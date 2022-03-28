import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

//import seznam from './secure_database.json';
import seznam from './_secure_DB_all.json';

import { save, saveAs } from 'file-saver';
import { require } from 'fs';    // Import the filesystem module


@Component({
  selector: 'app-txt-comp',
  templateUrl: './txt-comp.component.html',
  styleUrls: ['./txt-comp.component.css']
})



export class TxtCompComponent implements OnInit {
	

  seznamList:{ime:String, lokacija:String, datoteke:any}[]=seznam;
  dolzina = 'All buckets ('+this.seznamList.length+')';
	
  ime:string = '';
  lokacija:string = '';

  
  datoteke:any = [];
	
  blob: any;
  jsonData: any;
  js:any;
  
  @Input() public bckn:any;
  @Input() public bckl:any;
  
  @Input() public SEZ:any;
  @Input() public DOL:any;
  
  @Input() public BUCKET_LIST: any;
  @Input() public ADD_BUCKET: any;
  @Output() txt_comp_output = new EventEmitter<any>();

  constructor(private router: Router) { }

  /*
  fs:any = require('fs');
  err:any; files:any; file:any;
  //this.fs.readdir('./assets/SecureDataHub/',(this.err,this.files)=>{});
  
  testFolder:String = './assets/SecureDataHub/';
  

  this.fs.readdir(this.testFolder, (this.err, this.files) => {
   this.files.forEach(this.file => {
    console.log(this.file); // use those file and return it as a REST API
  });
})
*/
 

  ngOnInit(): void {
	  
	  //-this.trig2.emit(this.seznamList);
	  
	  /*
	  err:any; files:any; file:any;
	  
	  
	  this.fs.readdir('./assets/SecureDataHub/', (this.err, this.files) => {
			if (this.err){
				console.log(this.err);
			}
			else {
				console.log("\nCurrent directory filenames:");
				this.files.forEach(this.file => {
					console.log(this.file);
					});
			}
		});*/
          
  }
  
  
  currentDisplay = false;
  create_new_bucket() {
	this.currentDisplay = true;
    this.router.navigateByUrl('create_new');	
  }
	
  displayListener(selected: any){
		
	if (!selected[0]){
		this.currentDisplay = false;
		this.ime = selected[1];
		this.lokacija = selected[2];
		this.seznamList.splice(0, 0, {"ime":this.ime, "lokacija":this.lokacija, "datoteke":[{"ime":"kuracodovce"}]});
		this.dolzina = 'All buckets ('+this.seznamList.length+')';
		this.jsonData = JSON.stringify(this.seznamList, null, 2);
		console.log(this.jsonData);
			
			//***************** SAVING DATA to JSON *********************************************************
			
			//save(jsonData, './files/secure_database.json');  // Saves updated database in existing .json file-saver     
			
			// Uncomment following lines, if you want to pop-up  "SaveAs" dialogbox and save the database
			// under different name and path..
			  
			//this.blob = new Blob(this.jsonData, {type : 'application/json'});
			//saveAs(this.jsonData, './files/secure_database.json');
			
		//this.js = [{'a':1}, {'b':2}];
			//this.blob = new Blob([JSON.stringify(this.js)], {type : 'application/json'});
			//this.blob = new Blob(this.js, {type : 'application/json'});
			//saveAs(this.blob, './files/abc.json');
		//save(this.js, './abc.json');
			
			//************************************************************************************************
			
			//console.log('Bucket name: '+this.ime+' and location: '+this.lokacija+' were written in JSON Secure Database!');
				
		}
			
  }
	
  
  insider:any; 
  
  _ime_:any;
  _lokacija_:any;  
  j:any;

  my_new_storage(j:any){

	console.log(JSON.stringify(this.seznamList[j]));
	this.BUCKET_LIST = false;
	this.ADD_BUCKET = true;
	
	this._ime_ = this.seznamList[j].ime;
	this._lokacija_ = this.seznamList[j].lokacija;
	
	console.log('_ime_:  ',this._ime_);
	
	this.insider=this.txt_comp_output.emit([this.BUCKET_LIST, this.ADD_BUCKET, this._ime_, this._lokacija_, this.seznamList, j]);
    
	if (this.SEZ){
	   this.DOL = 'All buckets ('+this.SEZ.length+')';
	   }
	   
	this.router.navigateByUrl('bucket_contents');   
	
    }
	
	
  @HostListener('window:popstate', ['$event'])
	onPopState(e:any) {
		//console.log('HostListener event:  '+e);
		//this.main_page=!this.main_page;
		if (this.currentDisplay){
		this.currentDisplay=false;
			}
		
		//this.router.navigateByUrl('');
		console.log('trenutni URL:   ',this.router.url.split('?')[0]);
		
		if (this.router.url.split('?')[0]=='/bucket_list'){
			this.BUCKET_LIST=true;
			this.router.navigateByUrl('');
			console.log('trenutni URL:   ',this.router.url.split('?')[0]);
			
		}
	    
		}
		//console.log('BACK button was pressed in browser..  ',window.history.back());
	
    

}
