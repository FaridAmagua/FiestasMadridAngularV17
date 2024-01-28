// import { CanActivateFn, Router } from '@angular/router'
// import { SiteStatusService } from '../../service/site-status.service'

// export const MaintenanceGuard: CanActivateFn = (route, state) => {
//     const siteStatusService = new SiteStatusService()

//     if (!siteStatusService.getIsSiteOnline()) {
//         const router = new Router() // Certifique-se de ajustar a criação do router conforme sua configuração de injeção de dependência
//         router.navigate(['/maintenance'])
//         return false
//     }
//     return true
// }