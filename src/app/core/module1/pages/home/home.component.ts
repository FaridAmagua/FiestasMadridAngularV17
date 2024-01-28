import { Component } from '@angular/core';
import { HomeVideoComponent } from "../../components/home-video/home-video.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [HomeVideoComponent]
})
export class HomeComponent {

}
