import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componenets/header/header.component';
import { InfoComponent } from './componenets/info/info.component';
import { ProjectsComponent } from './componenets/projects/projects.component';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
      RouterOutlet,
      HeaderComponent,
      InfoComponent,
      ProjectsComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scroll$.subscribe((sectionId) => {
      console.log('Scrolling to:', sectionId);
      this.scrollToSection(sectionId);
    });
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      // Scroll the whole page a bit further down from the bottom of the element
      const extraScroll = 50; // Adjust this value based on your preference
      window.scrollTo({
        top: element.offsetTop + element.offsetHeight + extraScroll,
        behavior: 'smooth',
      });
    }
  }

}
