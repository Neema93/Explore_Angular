import { Component } from '@angular/core';
import { AddListComponent } from "./add-list/add-list.component";
import { ListsComponent } from "./lists/lists.component";


@Component({
  selector: 'app-cooking-decision',
  standalone: true,
  imports: [AddListComponent, ListsComponent],
  templateUrl: './cooking-decision.component.html',
  styleUrl: './cooking-decision.component.css'
})
export class CookingDecisionComponent {

}
