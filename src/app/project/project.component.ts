import { Component, Input, OnInit } from '@angular/core';
import { DriverProvider } from 'protractor/built/driverProviders';
import { setFlagsFromString } from 'v8';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() url;
  icons: string[];
  projectText: string;
  projectTitle: string;
  projectUrl: string;

  constructor() { }

  ngOnInit() {
    if (this.url == './assets/cov-api.png') {
      this.projectUrl = 'https://covapi-rails.herokuapp.com/api-docs/index.html';
      this.icons = ['https://pixaflo.com/wp-content/uploads/2019/06/Ruby-page-logo.png'];
      this.projectTitle = 'CovApi';
      this.projectText = 'is an open Coronavirus outbreak api that presents data about confirmed cases, deaths and recovered cases. Time line information is based on the data provided by the Johns Hopkins University Center for Systems Science and Engineering (JHU CSSE). Built using Ruby on Rails and Swagger.';
    } else if (this.url == './assets/ended.png') {
      this.projectUrl = 'https://legines.github.io/EndedByNetflix/';
      this.icons = ['https://pixaflo.com/wp-content/uploads/2019/06/Ruby-page-logo.png', 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1280px-Typescript_logo_2020.svg.png', 'https://www.mica.nl/wp-content/uploads/2020/02/Angular-Logo.png']
      this.projectTitle = 'Ended By Netflix';
      this.projectText = 'is an archive of all the shows that have been ended by Netflix in one way or another (canceled, ended, or unknown). Search through the archive or click on a genre to view all in that section. Detailed show information is shown on hover. Built on a Ruby on Rails backend and an Angualar 12 front end.';
    } else if (this.url == './assets/frag.png') {
      this.projectUrl = 'https://marketplace.visualstudio.com/items?itemName=bugfrag.bugfrag';
      this.projectTitle = 'BugFrag';
      this.projectText = 'is a VSCode theme that combines the Gruvbox Material Dark Hard and One Dark Pro themes. Check it out!';
    } else if (this.url == './assets/sp.png') {
      this.projectUrl = 'https://legines.github.io/SpareParts/';
      this.projectTitle = 'Spare Parts';
      this.projectText = 'is a personal blog using Angular to document car build projects and notes Ive taken through the years in detail. Not updated regularly.';
    } else {
      this.projectUrl = 'https://legines.github.io/Hangman-Game/';
      this.icons = ['https://web.archive.org/web/20200531002729im_/https://d33wubrfki0l68.cloudfront.net/041b1fc21a460c50d6231f6c30666e4b46272708/d0092/images/logos/js-logo.svg'];
      this.projectTitle = '2Fast2Furious : Hangman Edition';
      this.projectText = ', one of my first projects ever, is a simple hangman game based on the Fast and Furious franchise. I like to look back on this project as a reminder of how much Ive learned since then and all the fun I had building it. Built with vanilla JS.';
    }
  }

  goToUrl() {
    window.location.href = this.projectUrl;
  }

}
