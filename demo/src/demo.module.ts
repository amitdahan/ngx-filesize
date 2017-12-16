import {NgModule} from '@angular/core';
import {RootComponent} from './root.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {FileSizeModule} from '../../dist';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        FileSizeModule
    ],
    declarations: [
        RootComponent
    ],
    providers: [],
    bootstrap: [RootComponent]
})
export class DemoModule {}