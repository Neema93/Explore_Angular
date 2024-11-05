import { Component, DoCheck, OnInit } from '@angular/core';
import { OptionsService } from './option.service';
@Component({
  selector: 'app-indecision',
 
  templateUrl: './indecision.component.html',
  styleUrl: './indecision.component.css',
})
export class IndecisionComponent implements OnInit, DoCheck{
  isDisabled: boolean = false;
  selectedOption: string | null = null;
  constructor(private optionsService: OptionsService) {}
  
  ngOnInit() {
    this.checkOptionsAvailability();
  }

  checkOptionsAvailability() {
    const options = this.optionsService.getOptions();
    if(!options || options.length === 0){
      this.isDisabled = true;
      this.selectedOption = null;
    } else {
      this.isDisabled = false;
     
    }

  }
  selectOption() {
      const randomOption = this.optionsService.getRandomOption();
      if (randomOption) {
        console.log(randomOption);
        this.selectedOption = randomOption.option;
      } 
  }
  ngDoCheck() {
    this.checkOptionsAvailability(); 
  }
}
