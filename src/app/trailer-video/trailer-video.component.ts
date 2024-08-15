import { Component } from '@angular/core';
import { IframeVideoComponent, MainContainerComponent } from '../components';

@Component({
  selector: 'app-trailer-video',
  standalone: true,
  imports: [IframeVideoComponent, MainContainerComponent],
  templateUrl: './trailer-video.component.html',
  styleUrl: './trailer-video.component.scss',
})
export class TrailerVideoComponent {
  videoSrc = 'https://www.youtube.com/embed/Hmx5c1SxyEE?si=gcB-YkbGpKSbiMmN';
}
