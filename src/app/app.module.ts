import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { CataloguePageComponent } from './catalogue/catalogue.page';
import { StartPageComponent } from './start/start.page';
import { TrainerPageComponent } from './trainer/trainer.page';

import { AppRoutingModule } from 'src/app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TrainerPageComponent,
    CataloguePageComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
