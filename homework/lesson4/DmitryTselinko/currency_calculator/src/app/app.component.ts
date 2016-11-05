import { Component } from '@angular/core';
import { Mode } from './exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent {
  STATIC_SERVICE_MODE = Mode.STATIC;
  API_SERVICE_MODE = Mode.API;
}
