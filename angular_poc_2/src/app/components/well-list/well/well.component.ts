import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Well } from './well';

@Component({
  selector: 'app-well',
  templateUrl: './well.component.html',
  styleUrls: ['./well.component.scss']
})
export class WellComponent implements OnInit {

  constructor() { }
  @Output() addWellObjEvent = new EventEmitter();
  @Input("parentSourceData") parentSourceKey:any; 
  
  public model:any;

  ngOnInit(): void {
    this.model = new Well(" "," ",this.parentSourceKey);
    // console.log(this.parentSourceKey)
  }

  onAddWell(formObj:any){
    // emit the form object data from child to parent 
    this.addWellObjEvent.emit(formObj);
  }

  updateAddWellForm(){
    console.log("inn")
    this.model = new Well(" "," ",this.parentSourceKey);
  }
  
}
