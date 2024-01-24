import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-form-girl',
    standalone: true,
    templateUrl: './form-girl.component.html',
    styleUrl: './form-girl.component.scss',
    imports: [RouterOutlet,FormGirlComponent]
})
export class FormGirlComponent {
  name = "¿WELCOME PulseGirls ?";
}
