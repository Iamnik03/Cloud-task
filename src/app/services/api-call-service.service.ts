import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiCallServiceService {

  constructor(private http:HttpClient) { }
  fetchData(CollectionName:any)
  {
    var ans=this.http.get(environment.apiURL+CollectionName);
    return ans;

  }
  PostData(CollectionName:any,dataForPost:any)
  {
    var ans=this.http.post(environment.apiURL+CollectionName,dataForPost);
    return ans;

  }
  PutData(CollectionName:any,dataForPost:any)
  {
    var ans=this.http.put(environment.apiURL+CollectionName,dataForPost);
    return ans;

  }
}
