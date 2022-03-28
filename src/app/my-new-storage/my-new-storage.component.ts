import { Component, OnInit, Input, Output, EventEmitter, HostListener  } from '@angular/core';
//import new_files from './my-new-storage_files.json';
import {Router} from '@angular/router';


@Component({
  selector: 'app-my-new-storage',
  templateUrl: './my-new-storage.component.html',
  styleUrls: ['./my-new-storage.component.css'],
  //declarations: [testni_string],
})

/*
@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

*/






export class MyNewStorageComponent implements OnInit {
	
  //new_filesList:{ime:String, lastmod:String, size:String}[] = new_files;
  
  //new_filesList:{ime:String, lastmod:String, size:String}[] = this.SEZ["BestStorage"]["datoteke"];
  
  new_filesList:{ime:String, lastmod:String, size:String}[]=[{"ime":'', "lastmod":"", "size":""}];
  all_files:string = '';
  //all_files = 'All files ('+this.new_filesList.length+')';
	
  @Input() public bckn:any;
  @Input() public bckl:any;
  @Input() public IND:any;
  
  @Input() public SEZ:any;
  @Input() public DOL:any;
  
  @Input() public BUCKET_LIST:any;
  @Input() public ADD_BUCKET:any;
  
  @Output() my_new_storage_output = new EventEmitter<any>();
  
  
  constructor(private router:Router){} 
  

  ngOnInit(): void {
	  
	console.log('Welcome to ngOnInit from my-new-storage.component..');
	console.log('SEZ:  ',this.SEZ[this.IND]["datoteke"]);
	  
	this.new_filesList = this.SEZ[this.IND]["datoteke"];
    this.all_files = 'All files ('+this.new_filesList.length+')';
  }
  
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
		console.log('BRIŠI bucket z indeksom:  ',this.IND);
		this.SEZ.splice(this.IND, 1);   // deletes one item at given index (this.IND)
		this.dolzina = 'All buckets ('+this.SEZ.length+')';
		this.my_new_storage_output.emit([true,false, this.SEZ, this.dolzina]);
		//this.router.navigate(['./app.component.html']); // navigate to other page
		}  
	}
	
	@HostListener('window:popstate', ['$event'])
	onPopState(e:any) {
		//console.log('HostListener event:  '+e);
		//this.main_page=!this.main_page;
		
		//this.route.navigate(['./app.component.html'])
		//console.log('BACK button was pressed in browser..  ',window.history.back());
	
		//this.router.navigateByUrl('');
		console.log('trenutni URL from my-new-storage.ts:   ',this.router.url.split('?')[0]);
		
		if (this.router.url.split('?')[0]=='/bucket_contents'){
			this.BUCKET_LIST=true;
			this.ADD_BUCKET=false;
			this.my_new_storage_output.emit([this.BUCKET_LIST,this.ADD_BUCKET, this.SEZ, this.dolzina]);
			this.router.navigateByUrl('');
			//this.router.navigate(['./app.component.html'])
			//console.log('trenutni URL:   ',this.router.url.split('?')[0]);
			
		}
	
	
    }
	


	
}
