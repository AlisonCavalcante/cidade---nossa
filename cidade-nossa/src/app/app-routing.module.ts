import { RelatarProblemaComponent } from './pages/relatar-problema/relatar-problema.component';
import { HomeComponent } from './pages/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './shared/guards/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'relatar',
    component: RelatarProblemaComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((l) => l.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
