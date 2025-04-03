import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { FileComponent } from './components/file/file.component';
import { CardComponent } from './components/card/card/card.component';
import { CardBodyComponent } from './components/card/card-body/card-body.component';
import { CardHeaderComponent } from './components/card/card-header/card-header.component';
import { CardFooterComponent } from './components/card/card-footer/card-footer.component';
import { CardContentComponent } from './components/card/card-content/card-content.component';
import { CardTitleComponent } from './components/card/card-title/card-title.component';
import { CardSubTitleComponent } from './components/card/card-sub-title/card-sub-title.component';
import { ChipsComponent } from './components/chips/chips.component';
import { DialogComponent } from './components/dialog/dialog/dialog.component';
import { DialogBodyComponent } from './components/dialog/dialog-body/dialog-body.component';
import { DialogHeaderComponent } from './components/dialog/dialog-header/dialog-header.component';
import { DialogFooterComponent } from './components/dialog/dialog-footer/dialog-footer.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { TextareaComponent } from './components/textarea/textarea.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { RadioComponent } from './components/radio/radio.component';
import { PasswordComponent } from './components/password/password.component';
import { InputComponent } from './components/input/input.component';
import { LabelComponent } from './components/label/label.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { AccordionComponent } from './components/accordion/accordion/accordion.component';
import { AccordionItemComponent } from './components/accordion/accordion-item/accordion-item.component';
import { BadgeComponent } from './components/badge/badge.component';
import { MenubarContentComponent } from './components/menubar/menubar-content/menubar-content.component';
import { MenubarItemComponent } from './components/menubar/menubar-item/menubar-item.component';
import { MenubarMenuComponent } from './components/menubar/menubar-menu/menubar-menu.component';
import { MenubarSeperatorComponent } from './components/menubar/menubar-seperator/menubar-seperator.component';
import { MenubarShortcutComponent } from './components/menubar/menubar-shortcut/menubar-shortcut.component';
import { MenubarSubComponent } from './components/menubar/menubar-sub/menubar-sub.component';
import { MenubarSubContentComponent } from './components/menubar/menubar-sub-content/menubar-sub-content.component';
import { MenubarTriggerComponent } from './components/menubar/menubar-trigger/menubar-trigger.component';
import { MenubarSubTriggerComponent } from './components/menubar/menubar-sub-trigger/menubar-sub-trigger.component';
import { MenubarComponent } from './components/menubar/menubar/menubar.component';
import { AlertDialogComponent } from './components/alert-dialog/alert-dialog/alert-dialog.component';
import { AlertDialogActionComponent } from './components/alert-dialog/alert-dialog-action/alert-dialog-action.component';
import { AlertDialogCancelComponent } from './components/alert-dialog/alert-dialog-cancel/alert-dialog-cancel.component';
import { AlertDialogContentComponent } from './components/alert-dialog/alert-dialog-content/alert-dialog-content.component';
import { AlertDialogDescriptionComponent } from './components/alert-dialog/alert-dialog-description/alert-dialog-description.component';
import { AlertDialogFooterComponent } from './components/alert-dialog/alert-dialog-footer/alert-dialog-footer.component';
import { AlertDialogHeaderComponent } from './components/alert-dialog/alert-dialog-header/alert-dialog-header.component';
import { AlertDialogTriggerComponent } from './components/alert-dialog/alert-dialog-trigger/alert-dialog-trigger.component';
import { AlertDialogTitleComponent } from './components/alert-dialog/alert-dialog-title/alert-dialog-title.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ProgressComponent } from './components/progress/progress.component';
import { SliderComponent } from './components/slider/slider.component';
import { ToastrComponent } from './components/toastr/toastr.component';
import { ToastrHeaderComponent } from './components/toastr/toastr-header/toastr-header.component';
import { ToastrBodyComponent } from './components/toastr/toastr-body/toastr-body.component';
import { ToastrService } from './components/hot-toastr/services/toastr.service';
import { HotToastrComponent } from './components/hot-toastr/hot-toastr.component';

const services = [
  ToastrService
]

const components = [
  ButtonComponent,
  SelectComponent,
  FileComponent,
  CardComponent,
  CardBodyComponent,
  CardHeaderComponent,
  CardFooterComponent,
  CardContentComponent,
  CardTitleComponent,
  CardSubTitleComponent,
  ChipsComponent,
  SelectComponent,
  DialogComponent,
  FileComponent,
  DialogBodyComponent,
  DialogHeaderComponent,
  DialogFooterComponent,
  CheckboxComponent,
  TextareaComponent,
  ColorPickerComponent,
  RadioComponent,
  PasswordComponent,
  InputComponent,
  LabelComponent,
  DatePickerComponent,
  AccordionComponent,
  AccordionItemComponent,
  BadgeComponent,
  MenubarContentComponent,
  MenubarItemComponent,
  MenubarMenuComponent,
  MenubarSeperatorComponent,
  MenubarShortcutComponent,
  MenubarSubComponent,
  MenubarSubContentComponent,
  MenubarTriggerComponent,
  MenubarSubTriggerComponent,
  MenubarComponent,
  AlertDialogComponent,
  AlertDialogActionComponent,
  AlertDialogCancelComponent,
  AlertDialogContentComponent,
  AlertDialogDescriptionComponent,
  AlertDialogFooterComponent,
  AlertDialogHeaderComponent,
  AlertDialogTriggerComponent,
  AlertDialogTitleComponent,
  SwitchComponent,
  ProgressComponent,
  SliderComponent,
  ToastrComponent,
  ToastrHeaderComponent,
  ToastrBodyComponent,
  HotToastrComponent
]

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ...components,

  ],
  providers:[
    ToastrService
  ],
  exports: [
    FileComponent,
    ...components,
  ]
})
export class ZenUiModule { }
