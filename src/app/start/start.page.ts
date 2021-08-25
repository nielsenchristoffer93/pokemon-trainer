import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";

import { setStorage, getStorage } from "src/storage";

@Component({
    selector: "app-start-page",
    templateUrl: "./start.page.html",
    styleUrls: ["./start.page.css"]
})
export class StartPageComponent implements OnInit{
    //private trainerName: string = "";

    constructor(private router:Router) { }

    public ngOnInit():void {
        if (getStorage("trainer-name")) {
            this.router.navigate(['/pokemon-catalogue']);
        }
    }

    public onLoginButtonClick(trainerName:string): void {
        setStorage("trainer-name", trainerName);
    }

    public onSubmit(createForm: NgForm, trainerName:string):void {
        console.log(createForm.valid);
        setStorage("trainer-name", trainerName);
    }

}