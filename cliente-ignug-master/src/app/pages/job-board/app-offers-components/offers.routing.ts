import {Routes} from '@angular/router';
import { AuthGuard } from 'src/app/shared/auth-guard/auth.guard';
import { OffersComponent } from './offers.component';

export const OffersRouting: Routes = [
    {
        path: '',
        children: [
            {
                path: 'ofertas',
                component: OffersComponent,
                canActivate: [AuthGuard]
            },
        ]
        
    }
];
