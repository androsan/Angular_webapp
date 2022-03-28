import { Component, OnInit, ViewChild, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
	title = 'Secure Cloud Storage';
	
	bucket_list:boolean = true;
	add_bucket:boolean = false;
	
	
	ime_skladisca:string = '';
	ime_lokacije:string = '';
	
	sez:any;
	ind:any;
	dol_short:any;
	
	constructor(private router:Router) {}
	
    ngOnInit() {}
	
	@HostListener('window:popstate', ['$event'])
	onPopState(e:any) {
		
		if (this.router.url.split('?')[0]=='/bucket_list'){
			this.bucket_list=true;
			this.router.navigateByUrl('');
			console.log('trenutni URL:   ',this.router.url.split('?')[0]);
			
		}
		
		
		
		//this.main_page=!this.main_page;
		//this.add_bucket=!this.add_bucket;
		
        }
	
	
		
	mainListener(selected:any){
		
		this.bucket_list = selected[0];
		this.add_bucket = selected[1];
		this.ime_skladisca = selected[2];
		this.ime_lokacije = selected[3];
		this.sez = selected[4];
		this.ind = selected[5];
		
	}
	
	getit(selected:any){
		this.bucket_list = selected[0];
		this.add_bucket = selected[1];
		this.sez = selected[2];
		this.dol_short = selected[3];
	}

}


