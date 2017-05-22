import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
<<<<<<< HEAD
import { AppComponent } from "./app.component";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [BrowserModule, SidebarModule.forRoot()],
=======

import { AppComponent } from "./app.component";
import { ScreenPrintingComponent } from "./screenprinting/screenprinting.component";
import { EmbroideryComponent } from "./embroidery/embroidery.component";
import { HomeComponent } from "./home/home.component";
import { ContactUsComponent } from "./contactus/contactus.component";

import { routing } from "./app.routing";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ScreenPrintingComponent,
        EmbroideryComponent,
        ContactUsComponent,        
    ],
    imports: [BrowserModule, routing, SidebarModule.forRoot()],
>>>>>>> add routes
    bootstrap: [AppComponent]
})
export class AppModule {

}