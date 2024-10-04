import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LifecycleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  lifecycleComponentIsVisible =false;
  onToggleLifecycle(){

  }
  onChangeLifecycle(){

  }
}
