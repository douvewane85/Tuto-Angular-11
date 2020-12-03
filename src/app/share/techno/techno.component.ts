import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Technology } from 'src/app/technology/models/technology';

@Component({
  selector: 'app-techno',
  templateUrl: './techno.component.html',
  styleUrls: ['./techno.component.scss']
})
export class TechnoComponent implements OnInit {
  @Input() techno:Technology;
  @Input() hiddenBtn:boolean=false;
  sizeDescription:number
  @Output() technoDelete:EventEmitter<Technology> =new EventEmitter<Technology>();
  constructor() { }
   
  ngOnInit(): void {
    this.sizeDescription=this.hiddenBtn==true?this.techno.description.length:400;
  }

  handleDelete() {
    this.technoDelete.emit(this.techno);
    
  }
}

