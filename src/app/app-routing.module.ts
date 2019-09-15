import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './auth/auth.guard'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent 
  },
  {
    path: 'registeration',
    component: RegisterationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'profile',
    canActivate: [AuthGuard],
    component: ProfileComponent,
    
    // loadChildren: '/profile/profile.module.ts#ProfileModule'
    // loadChildren: () => import('./profile/profile.module').then(mod => mod.ProfileModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
