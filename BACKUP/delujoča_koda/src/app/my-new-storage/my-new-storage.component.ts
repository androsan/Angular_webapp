import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import new_files from './my-new-storage_files.json';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-new-storage',
  templateUrl: './my-new-storage.component.html',
  styleUrls: ['./my-new-storage.component.css']
})



export class MyNewStorageComponent implements OnInit {
	
  new_filesList:{ime:String, lastmod:String, size:String}[] = new_files;
  all_files = 'All files ('+this.new_filesList.length+')';
	
  @Input() public bckn:any;
  @Input() public bckl:any;
  
  @Input() public SEZ:any;
  @Input() public DOL:any;
  
  @Input() public page_2_trigger:any;
  @Input() public main_page_trigger:any;
  @Output() trig3 = new EventEmitter<any>();
  //constructor(private route:Router){} 
  //constructor(){}

  ngOnInit(): void {}
  
  filesSwitch:boolean = true;
  detailsSwitch:boolean = false;
  color_switch_files:any;
  color_switch_details:any;
  
  files(){
	this.filesSwitch = true;
	this.detailsSwitch = false;
	this.color_switch_files=document.getElementById("FILES_btn")!;
    this.color_switch_details=document.getElementById("DETAILS_btn")!;
	this.color_switch_files.style.background = "#ffffff";
	this.color_switch_details.style.background = "#d8d8d8";
    }
	
  details(){
	this.filesSwitch = false;
	this.detailsSwitch = true;
	this.color_switch_files=document.getElementById("FILES_btn")!;
    this.color_switch_details=document.getElementById("DETAILS_btn")!;
	this.color_switch_files.style.background = "#d8d8d8";
	this.color_switch_details.style.background = "#ffffff";
    }
  
  deleteObject(){
	var result = confirm("Do you really want to delete "+JSON.stringify(this.new_filesList.slice(-1)[0].ime)+" from "+this.bckn+" bucket?");
	if (result) {
		this.new_filesList = this.new_filesList.slice(0, -1);    // Deletes the last item from an array (-1 refers to index of last item..)
		this.all_files = 'All files ('+this.new_filesList.length+')';	
		}  
	}
  
  gumbUp:any;
  
  uploadObject(){
    this.gumbUp = document.querySelector('input')!;
	this.gumbUp.click();
  }
  
  folders:any;
  datoteka:any;
  xfile:any; 
  
  handle(e:any){
	this.folders = JSON.stringify(e.target.files);  
	this.datoteka = e.target.files[0];
	this.xfile = [this.datoteka.name, this.datoteka.lastModified, this.datoteka.size];
	
	//this.new_filesList.splice(0, 0, {"ime":this.xfile[0], "lastmod":this.xfile[1]+'(epoch time)', "size":this.xfile[2]+'B'});   // Adds new element to index=0
	this.new_filesList.push({"ime":this.xfile[0], "lastmod":this.xfile[1]+' (epoch time)', "size":this.xfile[2]+'B'});     // Adds new element to last position (i.e. Python append)                                     
	
	this.all_files = 'All files ('+this.new_filesList.length+')';	
  }
  
  dolzina:any;

  delete_bucket(){
	var result = confirm("Do you really want to delete "+this.bckn+" bucket?");
	if (result) {
		this.SEZ = this.SEZ.slice(1, this.SEZ.length);   // deletes first item of an array
		this.dolzina = 'All buckets ('+this.SEZ.length+')';
		this.trig3.emit([true,false, this.SEZ, this.dolzina]);
		//this.route.navigate(['./app.component.html']); // navigate to other page
		}  
	}
	
}
