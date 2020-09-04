import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {TabViewModule} from 'primeng/tabview';
import { RouterModule } from '@angular/router';
import { OffersRouting } from './offers.routing';

import { OffersComponent } from './offers.component';

@NgModule({
  declarations: [
    OffersComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(OffersRouting),
    TabViewModule,
  ]
})
export class OffersModule { }
