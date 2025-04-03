import { Component, inject } from '@angular/core';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'zen-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
    themeService = inject(ThemeService);

    ngOnInit(){
      this.themeService.setTheme("Blue");
    }

}
