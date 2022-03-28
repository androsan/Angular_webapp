import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	
	main_page:boolean = true;
	page_2:boolean = false;
	
	title = 'Secure Cloud Storage';
	ime_skladisca:string = '';
	ime_lokacije:string = '';
	
	sez:any;
	dol_short:any;
	
	//constructor(private route:Router) {}
	constructor(){}
	
    ngOnInit() {}
	
	/*
	go(){
		this.route.navigate(['']); // navigate to other page
	}
	*/
		
	mainListener(selected:any){
		
		this.main_page = selected[0];
		this.page_2 = selected[1];
		this.ime_skladisca = selected[2];
		this.ime_lokacije = selected[3];
		this.sez = selected[4];
		this.dol_short = selected[5];
		
	}
	
	getit(selected:any){
		this.main_page = selected[0];
		this.page_2 = selected[1];
		this.sez = selected[2];
		this.dol_short = selected[3];
	}

}


