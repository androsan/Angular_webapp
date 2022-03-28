import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import seznam from './secure_database.json';
import { save, saveAs } from 'file-saver';


@Component({
  selector: 'app-txt-comp',
  templateUrl: './txt-comp.component.html',
  styleUrls: ['./txt-comp.component.css']
})
export class TxtCompComponent implements OnInit {
	
  seznamList:{ime:String, lokacija:String}[]=seznam;
  dolzina = 'All buckets ('+this.seznamList.length+')';
	
  ime:string = '';
  lokacija:string = '';
	
  blob: any;
  jsonData: any;
  js:any;
  
  @Input() public bckn:any;
  @Input() public bckl:any;
  
  @Input() public SEZ:any;
  @Input() public DOL:any;
  
  @Input() public main_page_trigger: any;
  @Input() public page_2_trigger: any;
  @Output() trig2 = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {}
  
  
  currentDisplay = false;
  onPress() {
	this.currentDisplay = true;       
  }
	
  displayListener(selected: any){
		
	if (!selected[0]){
		this.currentDisplay = false;
		this.ime = selected[1];
		this.lokacija = selected[2];
		this.seznamList.splice(0, 0, {"ime":this.ime, "lokacija":this.lokacija});
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
  

  my_new_storage(){
	//this.insider = document.getElementById("first_bucket_btn")!;
	//console.log('first button:  '+this.insider.innerHTML);
	//this.trig2.emit([false, true, this.insider.innerHTML]);
	this.insider=this.trig2.emit([false, true, this.ime, this.lokacija, this.seznamList]);
    this.dolzina = 'All buckets ('+this.SEZ.length+')';	
    }
	
}
