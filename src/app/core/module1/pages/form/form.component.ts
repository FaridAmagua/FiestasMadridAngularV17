import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    imports: [RouterOutlet,CommonModule]
})
export class FormComponent {
    visible: boolean = true;

    toggleComponent() {
      this.visible = !this.visible;
    }
}
