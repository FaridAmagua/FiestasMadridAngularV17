import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterOutlet, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-form',
  standalone: true,
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
  imports: [RouterOutlet, CommonModule],
})
export class FormComponent implements OnInit {
  ngOnInit(): void {
    // Accede a los segmentos de la URL utilizando el snapshot del ActivatedRoute
    const segments: UrlSegment[] = this.route.snapshot.url;

    // Convierte los segmentos en un array de strings usando map
    const segmentStrings: string[] = segments.map((segment) => segment.path);
    
    console.log(segmentStrings)

    // Verifica si la ruta actual es un route hijo específico
    this.showContent = !segmentStrings.includes('form-contact');
    console.log(this.showContent)

    // throw new Error('Method not implemented.');
  }

  visible: boolean = true;
  showContent: boolean = true;
  // get route
  constructor(private route: ActivatedRoute) {}

  toggleComponent() {
    this.visible = !this.visible;
  }
}
