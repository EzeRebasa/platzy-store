import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms'

import { DemoComponent } from './components/demo/demo.component';
import { DemoRoutingModule } from './demo-routing.module';

@NgModule({
    // los componentes que va a tener este module
    declarations: [
        DemoComponent
    ],
    imports: [
        CommonModule,
        DemoRoutingModule,
        SharedModule,
        FormsModule
    ]
})

export class DemoModule {
}

