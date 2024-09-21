import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from '../../commons/layouts/auth-layout/auth-layout.component';

const routes: Routes = [
	{
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'login',
        loadComponent: () => import('./login/login.component').then((m) => m.LoginComponent),
      }
    ]
	}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    AuthLayoutComponent
  ],
	exports: [],
	declarations: [],
	providers: []
})
export class AuthModule {


}
