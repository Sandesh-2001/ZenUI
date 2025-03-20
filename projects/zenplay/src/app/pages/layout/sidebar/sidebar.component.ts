import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule,FormsModule, RouterModule],
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
      path: "/dashboard/select",
      title: "Select",
      icon: "fa fa-circle"
    },
    {
      path: "/dashboard/checkbox",
      title: "Checkbox",
      icon: "fa fa-circle"
    },
  ];
}
