import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from "./core/module1/pages/form/form.component";
import { NavbarComponent } from "./core/module1/shared/navbar/navbar.component";
import { HomeComponent } from './core/module1/pages/home/home.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HttpClientModule, FormComponent, NavbarComponent,HomeComponent]
})
export class AppComponent {
  title = 'pulseMadrid';
  
}
