import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lightMode: boolean;

  constructor() {
    this.lightMode = true;
  }

  onModeClick(bool: boolean) {
    this.lightMode = bool;
    if(this.lightMode) {
      console.log("Light mode is on");
    } else {
      console.log("Dark mode is on");
    }
  }
}
