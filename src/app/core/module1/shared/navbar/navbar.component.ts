import { Component } from '@angular/core';
import { FormComponent } from '../../pages/form/form.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

}
