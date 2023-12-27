import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componenets/header/header.component';
import { InfoComponent } from './componenets/info/info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
      RouterOutlet,
      HeaderComponent,
      InfoComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';
}
