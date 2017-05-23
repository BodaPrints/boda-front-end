import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from 'ng-sidebar';
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
    bootstrap: [AppComponent]
})
export class AppModule {

}