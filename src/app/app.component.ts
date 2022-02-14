import { Component, OnInit } from '@angular/core';
import { ServicesService } from './service/services.service'
import { HttpClient, HttpEventType, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'feedbacks';

  feedbackSearch = "";
  feedbacks: any;
  dashboard: any;
  aa:boolean=false;
  feedbackDetails: any;
  feedbackDate: any;

  constructor(
    private http: HttpClient,
    private data: ServicesService
  ) { }

  ngOnInit() {
    this.getFeedbacks();
    this.getDefaultDashboard();
  }

  
  details = (data:any) => {
    this.feedbackDetails = data;
    this.feedbackDate = new Date(this.feedbackDetails.updatedAt).toISOString().split('T')[0];
    console.log(this.feedbackDetails)
    // console.log(date)
}

  
  getFeedbacks = async () => {
    this.data.getFeedback().subscribe(
      data => { 
        this.feedbacks = data;
        // console.log(this.feedbacks);
      }, error => {
          console.log(error);
      }
    )
  }

  getDefaultDashboard = () => {
    this.data.getDashboard().subscribe(
      data => {
        this.dashboard = data?.today;
        console.log(data);
      }, error => {
        console.log(error);
      }
    )
  }

  getToday = () => {
    this.dashboard = null;

    this.data.getDashboard().subscribe(
      data => {
        this.dashboard = data?.today;
        console.log(data?.today);
      }, error => {
        console.log(error);
      }
    )      
  }

  getThisWeek = () => {
    this.dashboard = null;

    this.data.getDashboard().subscribe(
      data => {
        this.dashboard = data?.thisWeek;
        console.log(data?.thisWeek);
      }, error => {
        console.log(error);
      }
    )   
  }

  getThisMonth = () => {
    this.dashboard = null;

    this.data.getDashboard().subscribe(
      data => {
        this.dashboard = data?.thisMonth;
        console.log(data?.thisMonth);
      }, error => {
        console.log(error);
      }
    )   
  }

  
  setIndex(ii: any){
    this.aa=ii;
    console.log
  }

}
