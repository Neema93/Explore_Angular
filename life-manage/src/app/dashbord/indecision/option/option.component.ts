import { Component, inject, Input } from '@angular/core';
import { option } from './option.model';
import { OptionsService } from '../option.service';

@Component({
  selector: 'app-option',
  templateUrl: './option.component.html',
  styleUrl: './option.component.css'
})
export class OptionComponent {
  @Input({ required: true }) option!: option;

  private optionsService = inject(OptionsService)
  onCompleteTask() {
    this.optionsService.removeOption(this.option.id);
  }
}
