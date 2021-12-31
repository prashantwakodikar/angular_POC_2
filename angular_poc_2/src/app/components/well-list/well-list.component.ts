import { Component, OnInit,ViewChild } from '@angular/core';
import { WellComponent } from './well/well.component';

@Component({
  selector: 'app-well-list',
  templateUrl: './well-list.component.html',
  styleUrls: ['./well-list.component.scss']
})
export class WellListComponent implements OnInit {

  constructor() { }

  public wellListObj:any = [];
  public parentSourceKey:any = "";
  @ViewChild('appWell')
  appWell!: WellComponent;
  
  ngOnInit(): void {
    

    this.wellListObj = [
      {
        "name": "TestRLSWell01",
        "type":"rls",
        "source":"100001"
      },
      {
        "name": "TestESPWell01",
        "type":"esp",
        "source":"100001"
      },
      {
        "name": "TestRLSWell01",
        "type":"rls",
        "source":"100001"
      },
      {
        "name": "TestRLSWell01",
        "type":"rls",
        "source":"100001"
      },
      {
        "name": "TestESPWell01",
        "type":"esp",
        "source":"100001"
      },
      {
        "name": "TestRLSWell01",
        "type":"rls",
        "source":"100001"
      },
      {
        "name": "TestRLSWell01",
        "type":"rls",
        "source":"100001"
      },
      {
        "name": "TestRLSWell01",
        "type":"rls",
        "source":"100001"
      },
      {
        "name": "newrlswell",
        "type":"rls",
        "source":"101010101"
      }
    ];
    
  }

  onAddWellEvent(event:Event){
    // console.log(event);
    this.wellListObj.push(event);
  }

  onSourceClick(sourcekey:any){
    // console.log(sourcekey);
    this.parentSourceKey = sourcekey;
    this.appWell.updateAddWellForm(sourcekey);
  }

}
