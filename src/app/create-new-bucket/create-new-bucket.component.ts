import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-new-bucket',
  templateUrl: './create-new-bucket.component.html',
  styleUrls: ['./create-new-bucket.component.css']
})
export class CreateNewBucketComponent implements OnInit {
	
  bnam: string = '';
  bloc: string = '';
  @Input() public display: any;
  @Output() out = new EventEmitter<any>(); 
  
  vse_lokacije:{}[] = ['Ajdovščina', 'Celje', 'Ljubljana', 'Koper', 'Kranj', 'Maribor', 'Novo mesto'];

  constructor(private router: Router) { }

  ngOnInit(): void {}
  
  @HostListener('window:popstate', ['$event'])
  onPopState(e:any) {
	this.router.navigateByUrl('');
    this.display=!this.display;
  }
  
  
  create_bucket(bucket_name: string, bucket_location: string, selected: boolean){
	  
	  console.log('bucket_name:  ',bucket_name);
	  console.log('bucket_location:  ',bucket_location);
	  
	  this.bnam = bucket_name;
	  this.bloc = bucket_location;
	  
	  selected = !selected;
	  this.out.emit([selected, this.bnam, this.bloc]);
	  console.log('selected: '+selected);
	  
	   
  }
}
