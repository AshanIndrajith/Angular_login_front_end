import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APanelComponent } from './a-panel/a-panel.component';
import { AuthGurdService } from './auth-gurd.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { RouterresolverserviceService } from './routerresolverservice.service';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},

  {path:"aPanel",component:APanelComponent,canActivate: [AuthGurdService], data: { allowedRoles: ['ADMIN'] },resolve: { userRole: RouterresolverserviceService }},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
