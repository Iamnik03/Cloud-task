import { Component, OnInit } from '@angular/core';
import { ApiCallServiceService } from '../services/api-call-service.service';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {
 public msg:string="";
  constructor(private crud:ApiCallServiceService) { }

  ngOnInit(): void {
  }
  add_task(t:any,d:any,s:any)
  {
    var obj={title:t.value,description:d.value,status:s.value,date:Date.now()
    }
    console.log(obj);
    this.crud.PostData("task",obj).subscribe((res)=>{
      this.msg="task added"
    },
    (err)=>{

    })
  }

}
