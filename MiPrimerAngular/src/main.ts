import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes'

bootstrapApplication(AppComponent, {
  providers: 
    [provideRouter(routes)]
}).catch((error) => console.error('[LeroLeroCandelero] Angular bootstrap failed:', error));

