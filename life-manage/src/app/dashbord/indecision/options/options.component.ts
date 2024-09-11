import { Component } from '@angular/core';
import { OptionsService } from '../option.service';
import { OptionComponent } from "../option/option.component";

@Component({
  selector: 'app-options',
  standalone: true,
  imports: [OptionComponent],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {

  constructor(private optionsService: OptionsService){}
  get setlectedOptions(){
    console.log(this.optionsService.getOptions())
    return this.optionsService.getOptions();
  
  }
  
}
