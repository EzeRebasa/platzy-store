import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './components/contact.component';
import { SharedModule } from '../../shared/shared.module';

import { ContactRoutingModule } from './contact-routing.module';


@NgModule({
    // los componentes que va a tener este module
    declarations: [
        ContactComponent
    ],
    imports: [
        CommonModule,
        ContactRoutingModule,
        SharedModule
    ]
})

export class ContactModule {

}