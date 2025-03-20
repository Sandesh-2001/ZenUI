import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/layout/dashboard/dashboard.component';
import { ButtonComponent } from './pages/ui-comp/components/button/button.component';
import { DialogComponent } from './pages/ui-comp/components/dialog/dialog.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "dashboard/button",
        pathMatch: "full"
    },
    {
        path: "dashboard",
        component: DashboardComponent,
        children: [
            {
                path: "button",
                component  : ButtonComponent
            },
            {
                path: "dialog",
                component  : DialogComponent
            }
        ]
    }
];
