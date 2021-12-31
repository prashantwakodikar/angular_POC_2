import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  
  @ViewChild('addWellForm') addWellForm!: NgForm;

  public model!: Well;
  public sourcekeyEnabled = false;

  ngOnInit(): void {
    this.model = new Well("","",this.parentSourceKey);
  }

  onAddWell(formObj:any){
    // emit the form object data from child to parent 
    // console.log(formObj);
    // console.log(this.addWellForm.control.get("source"))
    if(this.addWellForm.control.get("source")?.status == "DISABLED"){
      formObj['source'] = this.addWellForm.control.get("source")?.value;
    }
    this.addWellObjEvent.emit(formObj);
  }

  updateAddWellForm(sourcekey:number){    
    // this.sourcekeyEnabled = true;  
    this.addWellForm.control.get('source')?.disable();  
    this.addWellForm.control.patchValue({'source':sourcekey})
  }
}
