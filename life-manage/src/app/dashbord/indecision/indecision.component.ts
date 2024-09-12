import { Component } from '@angular/core';
import { DashbordItemComponent } from "../dashbord-item/dashbord-item.component";
import { AddOptionComponent } from "./add-option/add-option.component";
import { OptionsService } from './option.service';
import { OptionsComponent } from "./options/options.component";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-indecision',
  standalone: true,
  imports: [DashbordItemComponent, AddOptionComponent, OptionsComponent, CommonModule,],
  templateUrl: './indecision.component.html',
  styleUrl: './indecision.component.css'
})
export class IndecisionComponent {
  isDisabled: boolean = false;
 
  constructor(private optionsService: OptionsService){}
 
  get selectOption(){
    console.log(this.optionsService.getRandomOption())
  
    this.isDisabled =this.isDisabled ? false : true;
    
    return this.optionsService.getRandomOption().option

  }
  
}


