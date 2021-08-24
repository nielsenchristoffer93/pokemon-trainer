import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CataloguePageComponent } from "./app/catalogue/catalogue.page";
import { StartPageComponent } from "./app/start/start.page";
import { TrainerPageComponent } from "./app/trainer/trainer.page";

const routes: Routes = [
    {
        path: "",
        pathMatch: "full",
        redirectTo: "/start"
    },
    {
        path: "start",
        component: StartPageComponent
    },
    {
        path: "trainer",
        component: TrainerPageComponent
    },
    {
        path: "pokemon-catalogue",
        component: CataloguePageComponent
    }
]

@NgModule({
    imports: [ RouterModule.forRoot(routes) ], 
    exports: [ RouterModule ]
})
export class AppRoutingModule {}