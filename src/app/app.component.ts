
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
  //title = 'assignment_1';
  quarterid = 0;
  selectedquarter ="";
  selectedmonth = "";
  showmessage = false;
  quarters = [
    {id:0,name:"Select Quarter"},
    {id:1,name:"quarter 1"},
    {id:2,name:"quarter 2"},
    {id:3,name:"quarter 3"},
    {id:4,name:"quarter 4"}
  ];
  months =[
    {id:0,quarterid:0,name:"Select Month"},
    {id:1,quarterid:1,name:"apr"},
    {id:2,quarterid:1,name:"may"},
    {id:3,quarterid:1,name:"june"},

    {id:4,quarterid:2,name:"jul"},
    {id:5,quarterid:2,name:"aug"},
    {id:6,quarterid:2,name:"sep"},

    {id:7,quarterid:3,name:"oct"},
    {id:8,quarterid:3,name:"nov"},
    {id:9,quarterid:3,name:"dec"},

    {id:10,quarterid:4,name:"jan"},
    {id:11,quarterid:4,name:"feb"},
    {id:12,quarterid:4,name:"mar"}
  ];
  quartermonths = [
    {id:0,quarterid:0,name:"Select Month"}
  ];
  quarterChanged(event : Event){
    let ctrl =(<HTMLSelectElement>event.target);
    this.quarterid =Number(ctrl.value);
    this.selectedquarter = ctrl.options[ctrl.selectedIndex].text;

    this.quartermonths.splice(0,this.quartermonths.length);
    for(let i =0; i < this.months.length; i++){
      if(this.months[i].quarterid == this.quarterid || this.months[i].quarterid == 0 )
      {
        this.quartermonths.push(this.months[i]);
      }

    }
    this.showmessage = false;
  }
  monthChanged(event: Event){
    let ctrl = (<HTMLSelectElement>event.target);
    this.selectedmonth = ctrl.options[ctrl.selectedIndex].text;
    if (ctrl.value !="0")
      this.showmessage = true;
    else
      this.showmessage = false;
  }
}
