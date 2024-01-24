import { Routes } from '@angular/router';
import { HomeComponent } from './core/module1/pages/home/home.component';
import { FormComponent } from './core/module1/pages/form/form.component';
import { FormContactComponent } from './core/module1/components/form-contact/form-contact.component';
import { FormGirlComponent } from './core/module1/pages/form-girl/form-girl.component';
import { PulseGirlsComponent } from './core/module1/components/pulse-girls/pulse-girls.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'form', component: FormComponent, children: [
      { path: 'form-contact', component: FormContactComponent}],
  },
  {
    path: 'form-girls', component: FormGirlComponent, children: [
      { path: 'pulse-girls', component:PulseGirlsComponent },
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
