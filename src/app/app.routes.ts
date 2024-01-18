import { Routes } from '@angular/router'
import { HomeComponent } from './core/module1/pages/home/home.component'
import { FormComponent } from './core/module1/pages/form/form.component'


export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        pathMatch:'full'    
    },
    {
        path: 'forms',
        component: FormComponent,
        pathMatch:'full'
    },

    // {
    //     path: 'error',
    //     component: ErrorComponent,
    // },
    // {
    //     path: '**',
    //     redirectTo: 'error',
    // },
]