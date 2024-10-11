import { Component } from '@angular/core';
import { DashbordItemComponent } from '../dashbord-item/dashbord-item.component';
import { AddOptionComponent } from './add-option/add-option.component';
import { OptionsService } from './option.service';
import { OptionsComponent } from './options/options.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-indecision',
  standalone: true,
  imports: [
    DashbordItemComponent,
    AddOptionComponent,
    OptionsComponent,
    CommonModule,
  ],
  templateUrl: './indecision.component.html',
  styleUrl: './indecision.component.css',
})
export class IndecisionComponent {
  isDisabled: boolean = false;
  selectedOption: string | null = null;
  constructor(private optionsService: OptionsService) {}
  
  ngOnInit() {
    this.checkOptionsAvailability();
  }

  checkOptionsAvailability() {
    const options = this.optionsService.getOptions();
    if(!options || options.length === 0){
      this.isDisabled = true
    } else {
      this.isDisabled = false
    }
    // Disable if no options are available
  }
  selectOption() {
      const randomOption = this.optionsService.getRandomOption();
      if (randomOption) {
        console.log(randomOption );
        this.isDisabled = false
        this.selectedOption = randomOption.option;
      } 
  }
}
