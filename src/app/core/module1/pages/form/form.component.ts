import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet, UrlSegment } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [RouterOutlet, CommonModule],
})
export class FormComponent implements OnInit {
 
  showContent: boolean = true;
  contentHidden: boolean = true;

  constructor(private router: Router, private route: ActivatedRoute) {}

  showContainer: boolean = true;


  ngOnInit(): void {
    // Suscribirse a los cambios de navegación
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Verificar si la ruta actual es una ruta hija de /form
        const isChildRoute = this.route.firstChild?.routeConfig?.path === 'form-contact';

        // Actualizar la visibilidad del contenedor
        this.showContainer = !isChildRoute;
      });
  }
  
}
