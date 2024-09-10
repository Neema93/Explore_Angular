import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { IndecisionComponent } from "./dashbord/indecision/indecision.component";
import { CookingDecisionComponent } from "./dashbord/cooking-decision/cooking-decision.component";
import { NewIdeasComponent } from "./dashbord/new-ideas/new-ideas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, IndecisionComponent, CookingDecisionComponent, NewIdeasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'life-manage';
}
