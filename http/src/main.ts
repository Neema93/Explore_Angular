import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {  HttpEventType, HttpHandlerFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { tap } from 'rxjs';
function logginInterceptor(request: HttpRequest<unknown>,  next: HttpHandlerFn) {
  // const req = request.clone({
  //   headers: request.headers.set('X-DEBUG', 'TESTING')
  // })
  console.log('[Outgoing Request]');
  console.log(request) 
  return next(request).pipe(
    tap({
      next: event => {
        if (event.type === HttpEventType.Response) {
          console.log('[Incoming Response]');
          console.log(event.status);
          console.log(event.body);
        }
      }
    })
  );
}
bootstrapApplication(AppComponent, {providers:[provideHttpClient(
  withInterceptors([logginInterceptor])
)]})
  .catch((err) => console.error(err));
