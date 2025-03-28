import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  links:any[] = [
    {
      path: "/dashboard/button",
      title: "Button",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/file-upload",
      title: "File Upload",
      icon: "fa fa-file"
    },
    {
      path: "/dashboard/card",
      title: "Card",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/dialog",
      title: "Dialog",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/chips",
      title: "Chips",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/input",
      title: "Input",
      icon: "fa fa-circle"
    },
    {
      path: '/dashboard/password',
      title: "Password",
      icon: ""
    },
    {
      path: '/dashboard/radio',
      title: "Radio",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/checkbox",
      title: "Checkbox",
      icon: "fa fa-circle"
    },
    {
      path : "textarea",
      title : "Textarea",
      icon: "fa fa-circle"
    },
    {
      path : "color-picker",
      title: "Color Picker",
      icon: "fa fa-circle"
    },
    {
      path : "date-picker",
      title: "Date Picker",
      icon: "fa fa-circle"
    },
    {
      path : "accordion",
      title : "Accordion",
      icon: "fa fa-circle"
    },
    {
      path : "badge",
      title : "Badge",
      icon: "fa fa-circle"
    }
  ];
}
