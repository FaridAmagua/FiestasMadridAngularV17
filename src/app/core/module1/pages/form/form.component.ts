import { Component } from '@angular/core';
import { FormContactoComponent } from "../../components/form-contacto/form-contacto.component";

@Component({
    selector: 'app-form',
    standalone: true,
    templateUrl: './form.component.html',
    styleUrl: './form.component.scss',
    imports: [FormComponent, FormContactoComponent]
})
export class FormComponent {

  name = "CONTACTA CON NOSTROS"

}
