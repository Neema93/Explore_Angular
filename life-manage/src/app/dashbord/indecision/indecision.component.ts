import { Component } from '@angular/core';
import { DashbordItemComponent } from "../dashbord-item/dashbord-item.component";
import { AddOptionComponent } from "./add-option/add-option.component";
import { OptionsService } from './option.service';
import { OptionsComponent } from "./options/options.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indecision',
  standalone: true,
  imports: [DashbordItemComponent, AddOptionComponent, OptionsComponent,CommonModule],
  templateUrl: './indecision.component.html',
  styleUrl: './indecision.component.css'
})
export class IndecisionComponent {
  
  constructor(private optionsService: OptionsService){}
  get seletctOption(){
    console.log(this.optionsService.getRandomOption())
    return this.optionsService.getRandomOption().option

  }
 
}
