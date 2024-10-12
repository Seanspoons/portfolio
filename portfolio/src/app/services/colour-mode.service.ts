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
      const project1 = document.getElementById('mealpository-project');
      const project2 = document.getElementById('typeaid-project');
      const project3 = document.getElementById('n-puzzle-solver-project');
      const project4 = document.getElementById('yelp-project');
      const project5 = document.getElementById('trs-project');
      const pTitle1 = document.getElementById('p-title1');
      const pTitle2 = document.getElementById('p-title2');
      const pTitle3 = document.getElementById('p-title3');
      const pTitle4 = document.getElementById('p-title4');
      const pTitle5 = document.getElementById('p-title5');
      const pDesc1 = document.getElementById('desc1');
      const pDesc2 = document.getElementById('desc2');
      const pDesc3 = document.getElementById('desc3');
      const pDesc4 = document.getElementById('desc4');
      const pDesc5 = document.getElementById('desc5');
      const tech1 = document.getElementById('tech1');
      const tech2 = document.getElementById('tech2');
      const tech3 = document.getElementById('tech3');
      const tech4 = document.getElementById('tech4');
      const tech5 = document.getElementById('tech5');
      const linkImg1 = document.getElementById('link-img-elm1');
      //const gitImg1 = document.getElementById('git-img-elm1');
      //const linkImg2 = document.getElementById('link-img-elm2');
      const gitImg2 = document.getElementById('git-img-elm2');
      //const linkImg3 = document.getElementById('link-img-elm3');
      const gitImg3 = document.getElementById('git-img-elm3');
      //const linkImg4 = document.getElementById('link-img-elm4');
      const gitImg4 = document.getElementById('git-img-elm4');
      //const linkImg5 = document.getElementById('link-img-elm5');
      const gitImg5= document.getElementById('git-img-elm5');

      projectTitle!.classList.remove('projects-title-light');
      project1!.classList.remove('project-light');
      project2!.classList.remove('project-light');
      project3!.classList.remove('project-light');
      project4!.classList.remove('project-light');
      project5!.classList.remove('project-light');
      pTitle1!.classList.remove('project-title-light');
      pTitle2!.classList.remove('project-title-light');
      pTitle3!.classList.remove('project-title-light');
      pTitle4!.classList.remove('project-title-light');
      pTitle5!.classList.remove('project-title-light');
      pDesc1!.classList.remove('project-desc-light');
      pDesc2!.classList.remove('project-desc-light');
      pDesc3!.classList.remove('project-desc-light');
      pDesc4!.classList.remove('project-desc-light');
      pDesc5!.classList.remove('project-desc-light');
      tech1!.classList.remove('technologies-light');
      tech2!.classList.remove('technologies-light');
      tech3!.classList.remove('technologies-light');
      tech4!.classList.remove('technologies-light');
      tech5!.classList.remove('technologies-light');
      linkImg1!.classList.remove('project-link-light');
      //gitImg1!.classList.remove('project-link-light');
      //linkImg2!.classList.remove('project-link-light');
      gitImg2!.classList.remove('project-link-light');
      //linkImg3!.classList.remove('project-link-light');
      gitImg3!.classList.remove('project-link-light');
      //linkImg4!.classList.remove('project-link-light');
      gitImg4!.classList.remove('project-link-light');
      //linkImg5!.classList.remove('project-link-light');
      gitImg5!.classList.remove('project-link-light');

      projectTitle!.classList.add('projects-title-dark');
      project1!.classList.add('project-dark');
      project2!.classList.add('project-dark');
      project3!.classList.add('project-dark');
      project4!.classList.add('project-dark');
      project5!.classList.add('project-dark');
      pTitle1!.classList.add('project-title-dark');
      pTitle2!.classList.add('project-title-dark');
      pTitle3!.classList.add('project-title-dark');
      pTitle4!.classList.add('project-title-dark');
      pTitle5!.classList.add('project-title-dark');
      pDesc1!.classList.add('project-desc-dark');
      pDesc2!.classList.add('project-desc-dark');
      pDesc3!.classList.add('project-desc-dark');
      pDesc4!.classList.add('project-desc-dark');
      pDesc5!.classList.add('project-desc-dark');
      tech1!.classList.add('technologies-dark');
      tech2!.classList.add('technologies-dark');
      tech3!.classList.add('technologies-dark');
      tech4!.classList.add('technologies-dark');
      tech5!.classList.add('technologies-dark');
      linkImg1!.classList.add('project-link-dark');
      //gitImg1!.classList.add('project-link-dark');
      //linkImg2!.classList.add('project-link-dark');
      gitImg2!.classList.add('project-link-dark');
      //linkImg3!.classList.add('project-link-dark');
      gitImg3!.classList.add('project-link-dark');
      //linkImg4!.classList.add('project-link-dark');
      gitImg4!.classList.add('project-link-dark');
      //linkImg5!.classList.add('project-link-dark');
      gitImg5!.classList.add('project-link-dark');


      /* Experience */
      const experienceTitle = document.getElementById('experience-title');
      const jobBox1 = document.getElementById('job-box1');
      const jobBox2 = document.getElementById('job-box2');
      const jobTitle1 = document.getElementById('j-title1');
      const jobTitle2 = document.getElementById('j-title2');
      const jobEmployer1 = document.getElementById('j-employer1');
      const jobEmployer2 = document.getElementById('j-employer2');
      const jobTime1 = document.getElementById('j-time1');
      const jobTime2 = document.getElementById('j-time2');
      const jobContent1 = document.getElementById('j-content1');
      const jobContent2 = document.getElementById('j-content2');
      const jobImg2Container = document.getElementById('j-img2-container');

      experienceTitle!.classList.remove('experience-title-light');
      jobBox1!.classList.remove('job-light');
      jobBox2!.classList.remove('job-light');
      jobTitle1!.classList.remove('job-title-light');
      jobTitle2!.classList.remove('job-title-light');
      jobEmployer1!.classList.remove('job-employer-light');
      jobEmployer2!.classList.remove('job-employer-light');
      jobTime1!.classList.remove('job-time-light');
      jobTime2!.classList.remove('job-time-light');
      jobContent1!.classList.remove('job-content-light');
      jobContent2!.classList.remove('job-content-light');
      jobImg2Container!.classList.remove('job-img2-container-light');

      experienceTitle!.classList.add('experience-title-dark');
      jobBox1!.classList.add('job-dark');
      jobBox2!.classList.add('job-dark');
      jobTitle1!.classList.add('job-title-dark');
      jobTitle2!.classList.add('job-title-dark');
      jobEmployer1!.classList.add('job-employer-dark');
      jobEmployer2!.classList.add('job-employer-dark');
      jobTime1!.classList.add('job-time-dark');
      jobTime2!.classList.add('job-time-dark');
      jobContent1!.classList.add('job-content-dark');
      jobContent2!.classList.add('job-content-dark');
      jobImg2Container!.classList.add('job-img2-container-dark');


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


      /* Footer */
      const breakLine = document.getElementById('break');
      const footerTitle = document.getElementById('footer-title');
      const footerEmail = document.getElementById('footer-email');
      const footerLinkedin = document.getElementById('footer-linkedin');

      breakLine!.classList.remove('break-light');
      footerTitle!.classList.remove('footer-title-light');
      footerEmail!.classList.remove('contact-light');
      footerLinkedin!.classList.remove('contact-light');

      breakLine!.classList.add('break-dark');
      footerTitle!.classList.add('footer-title-dark');
      footerEmail!.classList.add('contact-dark');
      footerLinkedin!.classList.add('contact-dark');

      this.lightMode = bool;
    } else {

      /* Header */
      const header = document.getElementById('header');
      const nameText1 = document.getElementById('name-text');
      const projectsLink = document.getElementById('projects-link');
      const educationLink = document.getElementById('education-link');
      
      header!.classList.remove('header-dark');
      nameText1!.classList.remove('name-text-dark');
      projectsLink!.classList.remove('projects-dark');
      educationLink!.classList.remove('education-dark');

      header!.classList.add('header-light');
      nameText1!.classList.add('name-text-light');
      projectsLink!.classList.add('projects-light');
      educationLink!.classList.add('education-light');


      /* Body */
      const rootBody = document.getElementById('root-body');

      rootBody!.classList.remove('body-dark');


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

      introText!.classList.remove('intro-text-dark');
      darkName!.style.display = 'none';
      profilePictureContainer!.classList.remove('profile-picture-container-dark');
      resumeButton!.classList.remove('contact-button-dark');
      githubButton!.classList.remove('contact-button-dark');
      linkedinButton!.classList.remove('contact-button-dark');
      emailButton!.classList.remove('contact-button-dark');

      introText!.classList.add('intro-text-light');
      lightName!.style.display = 'flex';
      profilePictureContainer!.classList.add('profile-picture-container-light');
      profileImage!.src = '../assets/img/profile-picture.png';
      resumeButton!.classList.add('contact-button-light');
      githubButton!.classList.add('contact-button-light');
      linkedinButton!.classList.add('contact-button-light');
      emailButton!.classList.add('contact-button-light');


      /* Projects */
      const projectTitle = document.getElementById('ph-title');
      const project1 = document.getElementById('mealpository-project');
      const project2 = document.getElementById('typeaid-project');
      const project3 = document.getElementById('n-puzzle-solver-project');
      const project4 = document.getElementById('yelp-project');
      const project5 = document.getElementById('trs-project');
      const pTitle1 = document.getElementById('p-title1');
      const pTitle2 = document.getElementById('p-title2');
      const pTitle3 = document.getElementById('p-title3');
      const pTitle4 = document.getElementById('p-title4');
      const pTitle5 = document.getElementById('p-title5');
      const pDesc1 = document.getElementById('desc1');
      const pDesc2 = document.getElementById('desc2');
      const pDesc3 = document.getElementById('desc3');
      const pDesc4 = document.getElementById('desc4');
      const pDesc5 = document.getElementById('desc5');
      const tech1 = document.getElementById('tech1');
      const tech2 = document.getElementById('tech2');
      const tech3 = document.getElementById('tech3');
      const tech4 = document.getElementById('tech4');
      const tech5 = document.getElementById('tech5');
      const linkImg1 = document.getElementById('link-img-elm1');
      //const gitImg1 = document.getElementById('git-img-elm1');
      //const linkImg2 = document.getElementById('link-img-elm2');
      const gitImg2 = document.getElementById('git-img-elm2');
      //const linkImg3 = document.getElementById('link-img-elm3');
      const gitImg3 = document.getElementById('git-img-elm3');
      //const linkImg4 = document.getElementById('link-img-elm4');
      const gitImg4 = document.getElementById('git-img-elm4');
      //const linkImg5 = document.getElementById('link-img-elm5');
      const gitImg5 = document.getElementById('git-img-elm5');

      projectTitle!.classList.remove('projects-title-dark');
      project1!.classList.remove('project-dark');
      project2!.classList.remove('project-dark');
      project3!.classList.remove('project-dark');
      project4!.classList.remove('project-dark');
      project5!.classList.remove('project-dark');
      pTitle1!.classList.remove('project-title-dark');
      pTitle2!.classList.remove('project-title-dark');
      pTitle3!.classList.remove('project-title-dark');
      pTitle4!.classList.remove('project-title-dark');
      pTitle5!.classList.remove('project-title-dark');
      pDesc1!.classList.remove('project-desc-dark');
      pDesc2!.classList.remove('project-desc-dark');
      pDesc3!.classList.remove('project-desc-dark');
      pDesc4!.classList.remove('project-desc-dark');
      pDesc5!.classList.remove('project-desc-dark');
      tech1!.classList.remove('technologies-dark');
      tech2!.classList.remove('technologies-dark');
      tech3!.classList.remove('technologies-dark');
      tech4!.classList.remove('technologies-dark');
      tech5!.classList.remove('technologies-dark');
      linkImg1!.classList.remove('project-link-dark');
      //gitImg1!.classList.remove('project-link-dark');
      //linkImg2!.classList.remove('project-link-dark');
      gitImg2!.classList.remove('project-link-dark');
      //linkImg3!.classList.remove('project-link-dark');
      gitImg3!.classList.remove('project-link-dark');
      //linkImg4!.classList.remove('project-link-dark');
      gitImg4!.classList.remove('project-link-dark');
      //linkImg5!.classList.remove('project-link-dark');
      gitImg5!.classList.remove('project-link-dark');

      projectTitle!.classList.add('projects-title-light');
      project1!.classList.add('project-light');
      project2!.classList.add('project-light');
      project3!.classList.add('project-light');
      project4!.classList.add('project-light');
      project5!.classList.add('project-light');
      pTitle1!.classList.add('project-title-light');
      pTitle2!.classList.add('project-title-light');
      pTitle3!.classList.add('project-title-light');
      pTitle4!.classList.add('project-title-light');
      pTitle5!.classList.add('project-title-light');
      pDesc1!.classList.add('project-desc-light');
      pDesc2!.classList.add('project-desc-light');
      pDesc3!.classList.add('project-desc-light');
      pDesc4!.classList.add('project-desc-light');
      pDesc5!.classList.add('project-desc-light');
      tech1!.classList.add('technologies-light');
      tech2!.classList.add('technologies-light');
      tech3!.classList.add('technologies-light');
      tech4!.classList.add('technologies-light');
      tech5!.classList.add('technologies-light');
      linkImg1!.classList.add('project-link-light');
      //gitImg1!.classList.add('project-link-light');
      //linkImg2!.classList.add('project-link-light');
      gitImg2!.classList.add('project-link-light');
      //linkImg3!.classList.add('project-link-light');
      gitImg3!.classList.add('project-link-light');
      //linkImg4!.classList.add('project-link-light');
      gitImg4!.classList.add('project-link-light');
      //linkImg5!.classList.add('project-link-light');
      gitImg5!.classList.add('project-link-light');


      /* Experience */
      const experienceTitle = document.getElementById('experience-title');
      const jobBox1 = document.getElementById('job-box1');
      const jobBox2 = document.getElementById('job-box2');
      const jobTitle1 = document.getElementById('j-title1');
      const jobTitle2 = document.getElementById('j-title2');
      const jobEmployer1 = document.getElementById('j-employer1');
      const jobEmployer2 = document.getElementById('j-employer2');
      const jobTime1 = document.getElementById('j-time1');
      const jobTime2 = document.getElementById('j-time2');
      const jobContent1 = document.getElementById('j-content1');
      const jobContent2 = document.getElementById('j-content2');
      const jobImg2Container = document.getElementById('j-img2-container');

      experienceTitle!.classList.remove('experience-title-dark');
      jobBox1!.classList.remove('job-dark');
      jobBox2!.classList.remove('job-dark');
      jobTitle1!.classList.remove('job-title-dark');
      jobTitle2!.classList.remove('job-title-dark');
      jobEmployer1!.classList.remove('job-employer-dark');
      jobEmployer2!.classList.remove('job-employer-dark');
      jobTime1!.classList.remove('job-time-dark');
      jobTime2!.classList.remove('job-time-dark');
      jobContent1!.classList.remove('job-content-dark');
      jobContent2!.classList.remove('job-content-dark');
      jobImg2Container!.classList.remove('job-img2-container-dark');

      experienceTitle!.classList.add('experience-title-light');
      jobBox1!.classList.add('job-light');
      jobBox2!.classList.add('job-light');
      jobTitle1!.classList.add('job-title-light');
      jobTitle2!.classList.add('job-title-light');
      jobEmployer1!.classList.add('job-employer-light');
      jobEmployer2!.classList.add('job-employer-light');
      jobTime1!.classList.add('job-time-light');
      jobTime2!.classList.add('job-time-light');
      jobContent1!.classList.add('job-content-light');
      jobContent2!.classList.add('job-content-light');
      jobImg2Container!.classList.add('job-img2-container-light');


      /* Education */
      const educationTitle = document.getElementById('education-title');
      const schoolBox = document.getElementById('school-box');
      const schoolTitle = document.getElementById('s-title');
      const dateTitle = document.getElementById('d-title');
      const location = document.getElementById('location');
      const degree = document.getElementById('degree');

      educationTitle!.classList.remove('education-title-dark');
      schoolBox!.classList.remove('school-dark');
      schoolTitle!.classList.remove('school-title-dark');
      dateTitle!.classList.remove('date-dark');
      location!.classList.remove('location-dark');
      degree!.classList.remove('degree-dark');

      educationTitle!.classList.add('education-title-light');
      schoolBox!.classList.add('school-light');
      schoolTitle!.classList.add('school-title-light');
      dateTitle!.classList.add('date-light');
      location!.classList.add('location-light');
      degree!.classList.add('degree-light');


      /* Footer */
      const breakLine = document.getElementById('break');
      const footerTitle = document.getElementById('footer-title');
      const footerEmail = document.getElementById('footer-email');
      const footerLinkedin = document.getElementById('footer-linkedin');

      breakLine!.classList.remove('break-dark');
      footerTitle!.classList.remove('footer-title-dark');
      footerEmail!.classList.remove('contact-dark');
      footerLinkedin!.classList.remove('contact-dark');

      breakLine!.classList.add('break-light');
      footerTitle!.classList.add('footer-title-light');
      footerEmail!.classList.add('contact-light');
      footerLinkedin!.classList.add('contact-light');

      this.lightMode = bool;
    }
  }

}
