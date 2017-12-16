import {NgModule} from '@angular/core';
import {RootComponent} from './root.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        RootComponent
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class DemoModule {}