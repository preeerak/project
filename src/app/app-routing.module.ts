import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringComponent } from './pages/hiring/hiring.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { OnboardingComponent } from './pages/onboarding/onboarding.component';
import { PreparingComponent } from './pages/preparing/preparing.component';
import { ScreeningComponent } from './pages/screening/screening.component';
import { SelectingComponent } from './pages/selecting/selecting.component';
import { SourcingComponent } from './pages/sourcing/sourcing.component';
import { FormComponent } from './pages/form/form.component'; 

const routes: Routes = [
{ 
  path: '',
  pathMatch: 'full',
  redirectTo: '/home',
},
{
  path: 'home',
  component: HomeComponent,
},
{
  path: 'preparing',
  component: PreparingComponent,
},
{
  path: 'sourcing',
  component: SourcingComponent,
},
{
  path: 'screening',
  component: ScreeningComponent,
},
{
  path: 'selecting',
  component: SelectingComponent,
},
{
  path: 'hiring',
  component: HiringComponent,
},
{
  path: 'onboarding',
  component: OnboardingComponent,
},
{
  path: 'form',
  component: FormComponent,
},
{
  path: '**',
  component: NotFoundComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
