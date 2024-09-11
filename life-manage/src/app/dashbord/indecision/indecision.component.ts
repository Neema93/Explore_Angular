import { Component } from '@angular/core';
import { DashbordItemComponent } from "../dashbord-item/dashbord-item.component";
import { AddOptionComponent } from "./add-option/add-option.component";
import { OptionsService } from './option.service';
import { OptionsComponent } from "./options/options.component";

@Component({
  selector: 'app-indecision',
  standalone: true,
  imports: [DashbordItemComponent, AddOptionComponent, OptionsComponent],
  templateUrl: './indecision.component.html',
  styleUrl: './indecision.component.css'
})
export class IndecisionComponent {
 
}
