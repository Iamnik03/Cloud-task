import { Component, OnInit } from '@angular/core';
import { ApiCallServiceService } from '../services/api-call-service.service';

@Component({
  selector: 'app-showtask',
  templateUrl: './showtask.component.html',
  styleUrls: ['./showtask.component.css']
})
export class ShowtaskComponent implements OnInit {
  public result:any;
  public progress:any=[];
  public complete:any=[];

  constructor(private crud:ApiCallServiceService) { }

  fetchTask(extra:any)
  {
    this.crud.fetchData('task'+extra).subscribe((res)=>{
      this.result=res;

      
      console.log(res);
    },
    (err)=>{
      console.log(err);

    })
  }
  fetchTask1(extra:any)
  {
    this.crud.fetchData('task'+extra).subscribe((res)=>{
      this.progress=res;
      
      
      console.log(res);
    },
    (err)=>{
      console.log(err);

    })
  }
  fetchTask2(extra:any)
  {
    this.crud.fetchData('task'+extra).subscribe((res)=>{
      this.complete=res;
      
      
      console.log(res);
    },
    (err)=>{
      console.log(err);

    })
  }
  ngOnInit(): void {
    this.fetchTask("?status=1");
    this.fetchTask1("?status=2");
    this.fetchTask2("?status=3");
  }
  
  onItemDrag(e:any){
    var obj=e.target.attributes.for.value.split("#");
    console.log("formDrag");
    console.log(obj);
    localStorage.setItem("title",obj[0]);
    localStorage.setItem("description",obj[1]);
    localStorage.setItem("status",obj[2]);
    localStorage.setItem("date",obj[3]);
    localStorage.setItem("id",obj[4]);
    console.log(e.target);

  }
  onItemDrop(e:any)
  {
    // console.log("ondrop");
    var t=this.progress.push(e.dragData);
    console.log("drg data"+e.dragData);
    console.log(this.progress);
    console.log(this.result);
    var posstion=this.result.indexOf(e.dragData);
    this.result.splice(posstion,1);
    console.log(this.result);

    localStorage.setItem("status","2");
    var obj={
      title:localStorage.getItem("title"),
      description:localStorage.getItem("description"),
      status:localStorage.getItem("status"),
      date:localStorage.getItem("date"),
      id:localStorage.getItem("id"),
    }
    console.log(obj);
    console.log("collection name");
    console.log(`task?id=${obj.id}`,obj)

    this.crud.PutData(`task/${obj.id}`,obj).subscribe((res)=>{
      console.log(res);
      

    },
    (err:any)=>{

    })

  }
  onitemDropComplete(e:any)
  {
    this.complete.push(e.dragData);
    var postition=this.result.indexOf(e.dragData);
    this.result.splice(postition,1);
    console.log(this.result);
    console.log(e.dragData);
    console.log(this.complete);
    localStorage.setItem("status","3");
    var obj={
      title:localStorage.getItem("title"),
      desciption:localStorage.getItem("description"),
      status:localStorage.getItem("status"),
      date:localStorage.getItem("date"),
      id:localStorage.getItem("id")


    }
    console.log(obj);
    this.crud.PutData("task/"+obj.id,obj).subscribe((res:any)=>{
      console.log(res);

    },
    (err:any)=>{
      console.log(err);
      

    })
  }

}
