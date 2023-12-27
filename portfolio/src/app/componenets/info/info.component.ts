import { Component } from '@angular/core';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  onResumeClick(): void {
    /*const resumeURL = '';*/
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
    /*const emailURL = '';*/
  }

}
