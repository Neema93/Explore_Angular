import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
 
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-manage';
  imageIndecision = {
    src: 'asserts/indecision.png',
    alt: 'Indecision'
  };
  imageCooking = {
    src: 'asserts/cooking.webp',
    alt:'cooking'
  };
  imageIdea = {
    src: 'asserts/idea.png',
    alt:'idea'
  };
}
