import { Component, Input } from '@angular/core';
import { SocialMediaElement } from '../models';
import { NgOptimizedImage } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'app-social-media-element',
  standalone: true,
  imports: [NgOptimizedImage, MatTooltipModule],
  templateUrl: './social-media-element.component.html',
  styleUrl: './social-media-element.component.scss',
})
export class SocialMediaElementComponent {
  @Input() socialMediaElement: SocialMediaElement = {
    name: '',
    link: '',
    imgPath: '',
  };
}
