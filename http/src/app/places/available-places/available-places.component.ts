import { Component, signal } from '@angular/core';
import { Place } from '../../place.model';

@Component({
  selector: 'app-available-places',
  standalone: true,
  imports: [],
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css'
})
export class AvailablePlacesComponent {
  places = signal<Place[] | undefined>(undefined);
}
