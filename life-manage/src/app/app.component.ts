import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { IndecisionComponent } from "./dashbord/indecision/indecision.component";
import { CookingDecisionComponent } from "./dashbord/cooking-decision/cooking-decision.component";
import { NewIdeasComponent } from "./dashbord/new-ideas/new-ideas.component";
import { DashbordItemComponent } from "./dashbord/dashbord-item/dashbord-item.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IndecisionComponent, CookingDecisionComponent, NewIdeasComponent, DashbordItemComponent],
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
