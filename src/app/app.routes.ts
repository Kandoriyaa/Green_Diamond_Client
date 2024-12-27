import { Routes } from '@angular/router';
import { MainLayoutComponent } from './pages/layout/main-layout/main-layout.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    {
        path: 'login', loadComponent: () =>
            import('./pages/authentication/login/login.component').then(m => m.LoginComponent)
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard', 
                loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent),
            },
        ]
    },
    { path: 'pages', redirectTo: 'pages/customer-category-info', pathMatch: 'full' },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'customer-category-info', 
                loadComponent: () => import('./pages/customer-category-info/customer-category-info.component').then(m => m.CustomerCategoryInfoComponent),
            }
        ]

    }
];
