import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColourModeService {

  lightMode: boolean;

  constructor() {
    this.lightMode = true;
  }

  changeMode(bool: boolean): void {
    if(this.lightMode) {
      /* Header */
      const header = document.getElementById('header');
      const nameText1 = document.getElementById('name-text');
      const projectsLink = document.getElementById('projects-link');
      const educationLink = document.getElementById('education-link');
      
      header!.classList.remove('header-light');
      nameText1!.classList.remove('name-text-light');
      projectsLink!.classList.remove('projects-light');
      educationLink!.classList.remove('education-light');

      header!.classList.add('header-dark');
      nameText1!.classList.add('name-text-dark');
      projectsLink!.classList.add('projects-dark');
      educationLink!.classList.add('education-dark');


      /* Body */
      const rootBody = document.getElementById('root-body');

      rootBody!.classList.add('body-dark');


      /* Info */
      const introText = document.getElementById('intro-text');
      const lightName = document.getElementById('light-name');
      const darkName = document.getElementById('dark-name');
      const profilePictureContainer = document.getElementById('profile-picture-container');
      const profileImage = document.getElementById('profile-picture') as HTMLImageElement;
      const resumeButton = document.getElementById('resume');
      const githubButton = document.getElementById('github');
      const linkedinButton = document.getElementById('linkedin');
      const emailButton = document.getElementById('email');

      introText!.classList.remove('intro-text-light');
      lightName!.style.display = 'none';
      profilePictureContainer!.classList.remove('profile-picture-container-light');
      resumeButton!.classList.remove('contact-button-light');
      githubButton!.classList.remove('contact-button-light');
      linkedinButton!.classList.remove('contact-button-light');
      emailButton!.classList.remove('contact-button-light');

      introText!.classList.add('intro-text-dark');
      darkName!.style.display = 'flex';
      profilePictureContainer!.classList.add('profile-picture-container-dark');
      profileImage!.src = '../assets/img/dark-icons/profile-picture-dark.png';
      resumeButton!.classList.add('contact-button-dark');
      githubButton!.classList.add('contact-button-dark');
      linkedinButton!.classList.add('contact-button-dark');
      emailButton!.classList.add('contact-button-dark');


      /* Projects */
      const projectTitle = document.getElementById('ph-title');
      const project1 = document.getElementById('trs-project');
      const project2 = document.getElementById('yelp-project');
      const project3 = document.getElementById('n-puzzle-solver-project');
      const pTitle1 = document.getElementById('p-title1');
      const pTitle2 = document.getElementById('p-title2');
      const pTitle3 = document.getElementById('p-title3');
      const pDesc1 = document.getElementById('desc1');
      const pDesc2 = document.getElementById('desc2');
      const pDesc3 = document.getElementById('desc3');
      const tech1 = document.getElementById('tech1');
      const tech2 = document.getElementById('tech2');
      const tech3 = document.getElementById('tech3');
      const linkImg1 = document.getElementById('link-img-elm1') as HTMLImageElement;
      const gitImg1 = document.getElementById('git-img-elm1') as HTMLImageElement;
      const linkImg2 = document.getElementById('link-img-elm2') as HTMLImageElement;
      const gitImg2 = document.getElementById('git-img-elm2') as HTMLImageElement;
      const linkImg3 = document.getElementById('link-img-elm3') as HTMLImageElement;
      const gitImg3 = document.getElementById('git-img-elm3') as HTMLImageElement;

      projectTitle!.classList.remove('projects-title-light');
      project1!.classList.remove('project-light');
      project2!.classList.remove('project-light');
      project3!.classList.remove('project-light');
      pTitle1!.classList.remove('project-title-light');
      pTitle2!.classList.remove('project-title-light');
      pTitle3!.classList.remove('project-title-light');
      pDesc1!.classList.remove('project-desc-trs-light');
      pDesc2!.classList.remove('project-desc-light');
      pDesc3!.classList.remove('project-desc-light');
      tech1!.classList.remove('technologies-light-trs');
      tech2!.classList.remove('technologies-light');
      tech3!.classList.remove('technologies-light');

      projectTitle!.classList.add('projects-title-dark');
      project1!.classList.add('project-dark');
      project2!.classList.add('project-dark');
      project3!.classList.add('project-dark');
      pTitle1!.classList.add('project-title-dark');
      pTitle2!.classList.add('project-title-dark');
      pTitle3!.classList.add('project-title-dark');
      pDesc1!.classList.add('project-desc-trs-dark');
      pDesc2!.classList.add('project-desc-dark');
      pDesc3!.classList.add('project-desc-dark');
      tech1!.classList.add('technologies-dark-trs');
      tech2!.classList.add('technologies-dark');
      tech3!.classList.add('technologies-dark');
      linkImg1!.src = '../assets/img/dark-icons/link-icon-dark.png';
      gitImg1!.src = '../assets/img/dark-icons/github-icon-dark.png';
      linkImg2!.src = '../assets/img/dark-icons/link-icon-dark.png';
      gitImg2!.src = '../assets/img/dark-icons/github-icon-dark.png';
      linkImg3!.src = '../assets/img/dark-icons/link-icon-dark.png';
      gitImg3!.src = '../assets/img/dark-icons/github-icon-dark.png';


      /* Education */
      const educationTitle = document.getElementById('education-title');
      const schoolBox = document.getElementById('school-box');
      const schoolTitle = document.getElementById('s-title');
      const dateTitle = document.getElementById('d-title');
      const location = document.getElementById('location');
      const degree = document.getElementById('degree');

      educationTitle!.classList.remove('education-title-light');
      schoolBox!.classList.remove('school-light');
      schoolTitle!.classList.remove('school-title-light');
      dateTitle!.classList.remove('date-light');
      location!.classList.remove('location-light');
      degree!.classList.remove('degree-light');

      educationTitle!.classList.add('education-title-dark');
      schoolBox!.classList.add('school-dark');
      schoolTitle!.classList.add('school-title-dark');
      dateTitle!.classList.add('date-dark');
      location!.classList.add('location-dark');
      degree!.classList.add('degree-dark');


      this.lightMode = bool;
    } else {

    }
  }

}
