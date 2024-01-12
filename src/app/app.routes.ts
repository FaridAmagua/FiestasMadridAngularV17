import { Routes } from '@angular/router';
import { FormsComponent } from './compononents/forms/forms.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'forms', component: FormsComponent},
];
