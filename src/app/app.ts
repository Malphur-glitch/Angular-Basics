import { Component } from '@angular/core';
import { ProfileCard } from './profile-card/profile-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  fullName = 'Daniel D. Manabat';
  location = 'City of San Fernando, Pampanga';
  email = 'danielmanabat27@gmail.com';
  phone = '0920 229 9595';

  profile = 'I am a student interested in web development, but I also like to dabble in different IT specializations such as networking and databases for my future career. If I were to be asked which role I would like to take in a team, I want to be database designer or administrator, or a backend developer in general. I know that being one of either frontend or backend isn\'t enough, so someday I also aim to be a Fullstack Developer. I am someone who you can trust to be diligent and eager to develop new skills in order to adapt to any type of work.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Python',
    'Java',
    'UI/UX',
    'Networking',
    'Database Design',
    'Project Management',
    'System Development',
    'Problem-Solving'
  ];

  message = 'Welcome to my profile!';
  clickCount = 0;

  showMessage() {
    this.clickCount++;
    this.message = `You clicked the button ${this.clickCount} time(s).`;
  }
}
