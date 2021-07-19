import { Routes, RouterModule, PreloadAllModules  } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
{  path: '', redirectTo: '/login', pathMatch: 'full'},
    { 
        path: '',
        component: PagesComponent, children: [
            { path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule), data: { breadcrumb: 'Users' } },
            { path: 'contenuhisto', loadChildren: () => import ('./pages/contenuhisto/contenuhisto.module').then(m => m.ContenuhistoModule), data: { breadcrumb: 'Profile' } },
        ]
    },

    { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
    { path: 'description', loadChildren: () => import('./pages/description/description.module').then(m => m.DescriptionModule) },

];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,  // <- comment this line for enable lazy load
    // useHash: true
});