import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from "./core/module1/pages/form/form.component";
import { NavbarComponent } from "./core/module1/shared/navbar/navbar.component";
import { HomeComponent } from './core/module1/pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGirlComponent } from './core/module1/pages/form-girl/form-girl.component';
import { BrowserModule } from '@angular/platform-browser';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HttpClientModule,NavbarComponent,HomeComponent,ReactiveFormsModule,FormComponent,FormGirlComponent,FormComponent]
})
export class AppComponent {
  title = 'pulseMadrid';
  
}
