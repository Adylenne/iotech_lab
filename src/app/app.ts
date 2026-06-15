import { Component } from '@angular/core';

import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { WhyUs } from './components/why-us/why-us';
import { Services } from './components/services/services';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Team } from './components/team/team';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Navbar,
    Hero,
    WhyUs,
    Services,
    Projects,
    About,
    Team,
    Contact,
    Footer
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}