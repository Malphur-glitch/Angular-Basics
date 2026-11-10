import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  standalone: true,
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css'
})
export class ProfileCard {
  cardTitle = 'A Little About Me';
  description = 'I am a student learning to build modern web applications with Angular. I am not performative but I like reading. I frequently play video games with my friends, but I still tend to be diligent in completing my school requirements and take care of my consistency. I try to experience life as best as I can with maximum efficiency, upskilling as I progress further compared to the person I was yesterday. I\'m not there yet, but I\'m not in the same place I was before.';
}
