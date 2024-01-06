import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './componenets/header/header.component';
import { InfoComponent } from './componenets/info/info.component';
import { ProjectsComponent } from './componenets/projects/projects.component';
import { EducationComponent } from './componenets/education/education.component';
import { FooterComponent } from './componenets/footer/footer.component';
import { ScrollService } from './services/scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,
      RouterOutlet,
      HeaderComponent,
      InfoComponent,
      ProjectsComponent,
      EducationComponent,
      FooterComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private scrollService: ScrollService) {}

  ngOnInit() {
    this.scrollService.scroll$.subscribe((sectionId) => {
      this.scrollToSection(sectionId);
    });
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

}
