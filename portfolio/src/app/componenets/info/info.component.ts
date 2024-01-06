import { Component} from '@angular/core';
import { ColourModeService } from '../../services/colour-mode.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  lightMode: boolean = true;

  constructor(private colourModeService: ColourModeService) {}

  onResumeClick(): void {
    const resumePath = '../assets/documents/Resume.pdf';
    window.open(resumePath, '_blank');
  }

  onGitHubClick(): void {
    const gitHubURL = 'https://github.com/Seanspoons';
    window.open(gitHubURL, '_blank');
  }

  onLinkedInClick(): void {
    const linkedInURL = 'https://www.linkedin.com/in/sean-wotherspoon-a085122a4/';
    window.open(linkedInURL, '_blank');
  }

  onEmailClick(): void {
    const recipientEmail = 'seangwotherspoon3@gmail.com';
    var mailtoURI = 'mailto:' + recipientEmail
    window.location.href = mailtoURI;
  }

}
