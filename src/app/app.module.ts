import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PdfgenComponent } from './pdfgen/pdfgen.component';

import { RouterModule } from '@angular/router';
import { PdfService } from './pdf.service';

// Define the routers
const ROUTES = [
  {
    path: '',
    redirectTo: 'createpdf',
    pathMatch: 'full'
  },
  {
    path: 'createpdf',
    component: PdfgenComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PdfgenComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES) // Add routes to the app
  ],
  providers: [PdfService],
  bootstrap: [AppComponent]
})
export class AppModule { }
