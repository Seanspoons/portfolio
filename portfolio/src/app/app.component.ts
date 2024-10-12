import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { InfoComponent } from './components/info/info.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScrollService } from './services/scroll.service';
import { ResizeService } from './services/resize.service';
import { ExperienceComponent } from './components/experience/experience.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
      RouterOutlet,
      HeaderComponent,
      InfoComponent,
      ProjectsComponent,
      ExperienceComponent,
      EducationComponent,
      FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private scrollService: ScrollService, private resizeService: ResizeService) {}

  ngOnInit() {
    this.scrollService.scroll$.subscribe((sectionId) => {
      this.scrollToSection(sectionId);
    });
    this.setDynamicText();
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      if(sectionId === "header") {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      } else if(sectionId === "info") {
        const extraScroll = 35;
        window.scrollTo({
          top: element.offsetTop + element.offsetHeight - extraScroll,
          behavior: 'smooth',
        });
      } else if(sectionId === "projects") {
        const extraScroll = 35;
        window.scrollTo({
          top: element.offsetTop + element.offsetHeight - extraScroll,
          behavior: 'smooth',
        });
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.setDynamicText();
  }

  private setDynamicText(): void {
    if (window.innerWidth <= 540) {
      this.resizeService.dynamicText = 'SW';
      this.resizeService.setNameText();
    } else {
      this.resizeService.dynamicText = 'Sean Wotherspoon';
      this.resizeService.setNameText();
    }
  }
}
