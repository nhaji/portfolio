import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { KeyPointModel } from '../../models/key-point.model';

@Component({
  selector: 'app-profile-key-points',
  templateUrl: './profile-key-points.component.html',
  styleUrl: './profile-key-points.component.css',
  imports: [CommonModule, MatCardModule, MatIconModule, TranslateModule],
})
export class ProfileKeyPointsComponent {
  keyPoints = input.required<KeyPointModel[]>();
}
