import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APanelComponent } from './a-panel/a-panel.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [

  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"aPanel",component:APanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
