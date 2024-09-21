import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { NgModule } from '@angular/core';

export const routes: Routes = [
	{
		path: '',
		runGuardsAndResolvers: 'always',
		loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
		canActivate: [AuthGuard]
	},
	{
		path: 'auth',
		loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
	},
  {
		path: '**',
		loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
		canActivate: [AuthGuard]
  }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}

