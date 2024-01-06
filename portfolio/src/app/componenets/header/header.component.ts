import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollService } from '../../services/scroll.service';
import { ColourModeService } from '../../services/colour-mode.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  lightMode: boolean;

  constructor(private scrollService: ScrollService, private colourModeService: ColourModeService) {
    this.lightMode = true;
  }

  onNameClick() {
    this.scrollService.triggerScroll('header');
  }

  onModeClick(bool: boolean) {
    this.lightMode = bool;
    this.colourModeService.changeMode(bool);
  }

  scrollToProjects() {
    this.scrollService.triggerScroll('info');
  }

  scrollToEducation() {
    this.scrollService.triggerScroll('projects');
  }

}
