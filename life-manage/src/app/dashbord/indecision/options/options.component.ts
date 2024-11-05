import { Component } from '@angular/core';
import { OptionsService } from '../option.service';
import { OptionComponent } from "../option/option.component";

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {

  constructor(private optionsService: OptionsService){}
  get setlectedOptions(){
   
    return this.optionsService.getOptions();
  
  }
  
}
