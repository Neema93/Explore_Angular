import { Component } from '@angular/core';
import { AddListComponent } from "./add-list/add-list.component";


@Component({
  selector: 'app-cooking-decision',
  standalone: true,
  imports: [AddListComponent],
  templateUrl: './cooking-decision.component.html',
  styleUrl: './cooking-decision.component.css'
})
export class CookingDecisionComponent {

}
