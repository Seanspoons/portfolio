import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  onEmailClick(): void {

  }

  onLinkedInClick(): void {
    const linkedInURL = 'https://www.linkedin.com/in/sean-wotherspoon-a085122a4/';
    window.open(linkedInURL, '_blank');
  }
}
