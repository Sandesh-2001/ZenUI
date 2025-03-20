import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/layout/dashboard/dashboard.component';
import { ButtonComponent } from './pages/ui-comp/components/button/button.component';
import { FileUploadComponent } from './pages/ui-comp/components/file-upload/file-upload.component';
import { CardComponent } from './pages/ui-comp/components/card/card.component';
import { ChipsComponent } from "./pages/ui-comp/components/chips/chips.component";
import { SelectComponent } from './pages/ui-comp/components/select/select.component';
import { CheckboxComponent } from "./pages/ui-comp/components/checkbox/checkbox.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard/button',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'button',
        component: ButtonComponent,
      },
      {
        path: 'file-upload',
        component: FileUploadComponent,
      },
      {
        path: 'card',
        component: CardComponent,
      },
      {
        path : "chips",
        component : ChipsComponent
      },
      {
        path : "select",
        component : SelectComponent
      },
      {
        path : "checkbox",
        component : CheckboxComponent
      }
    ],
  },
];
