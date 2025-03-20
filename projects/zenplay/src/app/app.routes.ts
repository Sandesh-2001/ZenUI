import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/layout/dashboard/dashboard.component';
import { ButtonComponent } from './pages/ui-comp/components/button/button.component';

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
            }
        ]
    }
];
