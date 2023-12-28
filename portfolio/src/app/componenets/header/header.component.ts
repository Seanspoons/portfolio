import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lightMode: boolean;

  constructor(private scrollService: ScrollService) {
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

  scrollToProjects() {
    console.log("scroll to project clicked");
    this.scrollService.triggerScroll('info');
  }

  scrollToEducation() {
    this.scrollService.triggerScroll('education');
  }

}
