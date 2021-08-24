import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from "@angular/common/http"

import { AppComponent } from './app.component';
import { CataloguePageComponent } from './catalogue/catalogue.page';
import { StartPageComponent } from './start/start.page';
import { TrainerPageComponent } from './trainer/trainer.page';

import { AppRoutingModule } from 'src/app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PokemonCardItemComponent } from './pokemon-card/pokemon-card-item.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StartPageComponent,
    TrainerPageComponent,
    CataloguePageComponent,
    NavigationBarComponent,
    PokemonCardItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
