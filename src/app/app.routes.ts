import { Routes } from '@angular/router'
import { ErrorComponent } from './features/error/error.component'
import { HomeComponent } from './features/home/home.component'
import { MaintenanceComponent } from './features/maintenance/maintenance.component'

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'maintenance',
        component: MaintenanceComponent,
    },
    {
        path: 'error',
        component: ErrorComponent,
    },
    {
        path: '**',
        redirectTo: 'error',
    },
]