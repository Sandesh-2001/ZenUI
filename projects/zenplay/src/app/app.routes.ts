import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/layout/dashboard/dashboard.component';
import { ButtonComponent } from './pages/ui-comp/components/button/button.component';
import { FileUploadComponent } from './pages/ui-comp/components/file-upload/file-upload.component';
import { CardComponent } from './pages/ui-comp/components/card/card.component';
import { ChipsComponent } from './pages/ui-comp/components/chips/chips.component';
import { DialogComponent } from './pages/ui-comp/components/dialog/dialog.component';
import { CheckboxComponent } from './pages/ui-comp/components/checkbox/checkbox.component';
import { TextareaComponent } from './pages/ui-comp/components/textarea/textarea.component';
import { ColorPickerComponent } from './pages/ui-comp/components/color-picker/color-picker.component';
import { InputComponent } from './pages/ui-comp/components/input/input.component';
import { PasswordComponent } from './pages/ui-comp/components/password/password.component';
import { RadioComponent } from './pages/ui-comp/components/radio/radio.component';
import { DatePickerComponent } from './pages/ui-comp/components/date-picker/date-picker.component';
import { AccordionComponent } from './pages/ui-comp/components/accordion/accordion.component';
import { BadgeComponent } from './pages/ui-comp/components/badge/badge.component';
import { MenubarComponent } from './pages/ui-comp/components/menubar/menubar.component';
import { AlertDialogComponent } from './pages/ui-comp/components/alert-dialog/alert-dialog.component';
import { SwitchComponent } from './pages/ui-comp/components/switch/switch.component';
import { ProgressComponent } from './pages/ui-comp/components/progress/progress.component';
import { TabsComponent } from './pages/ui-comp/components/tabs/tabs.component';
import { TooltipComponent } from './pages/ui-comp/components/tooltip/tooltip.component';

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
        path: 'chips',
        component: ChipsComponent,
      },
      {
        path: 'dialog',
        component: DialogComponent,
      },
      {
        path: 'checkbox',
        component: CheckboxComponent,
      },
      {
        path: 'textarea',
        component: TextareaComponent,
      },
      {
        path: 'color-picker',
        component: ColorPickerComponent,
      },
      {
        path: 'dialog',
        component: DialogComponent,
      },
      {
        path: 'input',
        component: InputComponent,
      },
      {
        path: 'password',
        component: PasswordComponent,
      },
      {
        path: 'radio',
        component: RadioComponent,
      },
      {
        path: 'date-picker',
        component: DatePickerComponent,
      },
      {
        path: 'accordion',
        component: AccordionComponent,
      },
      {
        path: 'badge',
        component: BadgeComponent,
      },
      {
        path: 'menubar',
        component: MenubarComponent,
      },
      {
        path : "alert-dialog",
        component : AlertDialogComponent
      },
      {
        path : "switch",
        component : SwitchComponent
      },
      {
        path : "progress",
        component : ProgressComponent
      },
      {
        path : "tabs",
        component : TabsComponent
      },
      {
        path : "tooltip",
        component : TooltipComponent
      }
    ],
  },
];
