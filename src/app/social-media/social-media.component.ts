import { Component } from '@angular/core';
import { SocialMediaElement } from './models';
import { SocialMediaElementComponent } from './social-media-element';
import { NgFor } from '@angular/common';
import { MainContainerComponent, WobbleDirective } from '../components';

@Component({
  selector: 'app-social-media',
  standalone: true,
  imports: [
    SocialMediaElementComponent,
    NgFor,
    MainContainerComponent,
    WobbleDirective,
  ],
  templateUrl: './social-media.component.html',
  styleUrl: './social-media.component.scss',
})
export class SocialMediaComponent {
  socialMediaList: SocialMediaElement[] = [
    {
      name: 'Twitch',
      link: 'https://twitch.tv/gentleman_programming',
      imgPath: '../../../assets/images/social-media/gentleman-twitch.svg',
    },
    {
      name: 'YouTube',
      link: 'https://youtube.com/@GentlemanProgramming',
      imgPath: 'assets/images/social-media/gentleman-youtube.svg',
    },
    {
      name: 'Discord',
      link: 'https://discord.gg/KEavKkDc5Y',
      imgPath: 'assets/images/social-media/gentleman-discord.svg',
    },
    {
      name: 'X',
      link: 'https://twitter.com/G_Programming',
      imgPath: 'assets/images/social-media/gentleman-x.svg',
    },
    {
      name: 'Instagram',
      link: 'https://instagram.com/gentlemanprogramming',
      imgPath: 'assets/images/social-media/gentleman-instagram.svg',
    },
    {
      name: 'TikTok',
      link: 'https://tiktok.com/@gentlemanprogramming',
      imgPath: 'assets/images/social-media/gentleman-tiktok.svg',
    },
  ];
}
