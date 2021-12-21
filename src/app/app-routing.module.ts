import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginGuard } from './guard/login.guard';
import { NoLoginGuard } from './guard/no-login.guard';

const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'sign-in'},

  { 
    path: '',
    canActivate: [LoginGuard],
    canActivateChild: [LoginGuard],
    component: LayoutComponent,
    children: [
      {path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },
      {path: 'users', loadChildren: () => import('./modules/pilots/pilots.module').then(m => m.PilotsModule) },
    ]
  },

  { 
    path: '',
    canActivate: [NoLoginGuard],
    canActivateChild: [NoLoginGuard],
    children: [
      {path: 'sign-in', loadChildren: () => import('./modules/sign-in/sign-in.module').then(m => m.SignInModule) },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
