import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user_index = '';
  password = '';
  error = '';

  constructor(private loginService: LoginService, private router: Router) { }

  onSubmit() {
    this.loginService.login(this.user_index, this.password)
      .subscribe(
        (response: { token: any }) => {
          const token = response.token;
          localStorage.setItem('token', token);

          // Getting the user role
          this.loginService.getUserRole().subscribe(
            (role: string) => {
              // Navigate to a specific dashboard based on the role
              switch (role) {
                case 'ADMIN':
                  this.router.navigate(['/home']);
                  break;
                default:
                  this.router.navigate(['/login']);
                  break;
              }
            },
            (roleError: any) => {
              // Handle role retrieval error
              console.error('Failed to retrieve user role:', roleError);
              this.router.navigate(['/login']);
            }
          );
        },
        (error: any) => {
          if (error.status === 401) {
            this.error = 'Please enter valid credentials.';
          } else {
            this.error = 'Invalid email or password.';
          }
        }
      );
  }
}
