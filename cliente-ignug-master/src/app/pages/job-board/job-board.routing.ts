import {Routes} from '@angular/router';

import {AuthGuard} from '../../shared/auth-guard/auth.guard';
import {AppEmpresaComponentComponent} from './app-empresa-component/app-empresa-component.component';
import {AppEmpresaDosComponent} from './app-empresa-dos/app-empresa-dos.component';
import { AppOffersComponent } from './app-offers/app-offers.component';
import { AppProfessionalReferenceComponent } from './hoja-vida/app-professional-reference/app-professional-reference.component';
import { AppAcademicFormationComponent } from './hoja-vida/app-academic-information/app-academic-formation.component';



export const JobBoardRoutes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'hoja-vida',
                loadChildren: () => import('./hoja-vida/hoja-vida.module').then(m => m.HojaVidaModule),
                canActivate: [AuthGuard]
            },
            {
                path: 'empresa',
                component: AppEmpresaComponentComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'empresa-dos',
                component: AppEmpresaDosComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'ofertas',
                component: AppOffersComponent,
                canActivate: [AuthGuard]
            },
            {
                path: 'academia',
                component: AppAcademicFormationComponent,
                canActivate: [AuthGuard]
            },
            
             {
                 path: 'referencia',
                component: AppProfessionalReferenceComponent,
                canActivate: [AuthGuard]
            },
            
        
            
        ]
    }
];
