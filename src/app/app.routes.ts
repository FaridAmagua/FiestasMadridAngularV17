import { Routes } from '@angular/router'
import { HomeComponent } from './core/module1/pages/home/home.component'
import { FormComponent } from './core/module1/pages/form/form.component'

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'form',component:FormComponent},
    // { path: '**', component: NotFoundComponent }
]