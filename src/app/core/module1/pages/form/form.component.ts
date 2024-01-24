import { Component } from '@angular/core';
import { FormContactComponent } from '../../components/form-contact/form-contact.component';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    imports: [FormComponent, FormContactComponent, RouterOutlet]
})
export class FormComponent {


}
