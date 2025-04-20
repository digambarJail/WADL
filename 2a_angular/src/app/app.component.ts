import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';

@Component({
  selector: 'app-root',
  standalone: true, // This means Angular does not use app.module.ts
  imports: [CommonModule, RegistrationComponent], // Import the RegistrationComponent here
  template: '<app-registration></app-registration>',
})
export class AppComponent {}
