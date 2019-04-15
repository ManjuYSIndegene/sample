import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @ViewChild ('sp') spt:ElementRef;
  event: MouseEvent;

  clientX = 250;
  clientY = 0;
  arro:boolean=false;
  onEvent(event: MouseEvent): void {
      this.event = event;
      this.clientX =250;
     
  }

  ondEvent(event: MouseEvent): void {
    this.event = event;
    this.clientX = 700;
}

onddEvent(event: MouseEvent): void {
  this.event = event;
  this.clientX = 1000;
}

  ngAfterViewChecked(){

    console.log("afterinit");
     var x=this.clientX;
    
     let xy=x;
     console.log("this is "+xy)
          // this.spt.nativeElement.style.margin-left= 'yellow'; 

      this.spt.nativeElement.style.position= 'absolute';
      // this.spt.nativeElement.style.left=xy+"px";
      this.spt.nativeElement.style.display="block";
      this.spt.nativeElement.style.marginLeft=xy+"px";
      // this.spt.nativeElement.style.top=28+"px";
      // this.spt.nativeElement.style.left="300px"; 
    //  console.log(this.spt.nativeElement.value="Hello");
  }
 






}
