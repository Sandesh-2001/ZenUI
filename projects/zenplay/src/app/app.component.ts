import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './pages/layout/dashboard/dashboard.component';
import { ZenUiModule } from '../../../zenui/src/public-api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ZenUiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
