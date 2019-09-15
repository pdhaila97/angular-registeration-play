import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../home-page/home-page.component';
import { ProfileComponent } from './profile.component';
import { AuthGuard } from '../auth/auth.guard';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';


const routes: Routes=
  [{
    path: 'profile',
    children: [{
      path: '',
      canActivate: [AuthGuard],
      component: HomePageComponent
    },
    {
      path: ':id',
      canActivate: [AuthGuard],
      component: ProfileComponent
    }
    ]
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
