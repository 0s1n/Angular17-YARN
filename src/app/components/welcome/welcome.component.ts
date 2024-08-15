import { Component } from '@angular/core';
import { MainContainerComponent } from '../layout/main-container/main-container.component';
import { FadeInDirective } from '../directives/animations';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [MainContainerComponent, FadeInDirective],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {}
