import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { EmbroideryComponent } from "./embroidery/embroidery.component";
import { ContactUsComponent } from "./contactus/contactus.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'embroidery', component: EmbroideryComponent },
    { path: 'contact_us', component: ContactUsComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);