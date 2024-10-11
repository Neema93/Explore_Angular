import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  private destroyRef = inject(DestroyRef);
  ngOnInit(): void {
      const subscription = interval(1000).subscribe({
        next: (val) => console.log(val)
      });
  
  this.destroyRef.onDestroy (() => {
    subscription.unsubscribe();
  })
}
}
