import { Component } from '@angular/core';
import { AddOptionComponent } from "../cooking-decision/add-option/add-option.component";

@Component({
  selector: 'app-cooking-decision',
  standalone: true,
  imports: [AddOptionComponent],
  templateUrl: './cooking-decision.component.html',
  styleUrl: './cooking-decision.component.css'
})
export class CookingDecisionComponent {

}
