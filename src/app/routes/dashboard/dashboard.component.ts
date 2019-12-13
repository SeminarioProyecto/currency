import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  NgZone,
} from '@angular/core';

import { DashboardService } from './dashboard.srevice';
import { json } from '@angular-devkit/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .mat-raised-button {
        margin-right: 8px;
        margin-top: 8px;
      }
      table {
        width: 100%;
        border: 1px solid #000;
     }
     th, td {
        width: 25%;
        text-align: left;
        vertical-align: top;
        border: 1px solid #000;
        border-spacing: 0; 
      table {
          width: 100%;
          border: 1px solid #000;
       }
       th, td {
          width: 25%;
          text-align: left;
          vertical-align: top;
          border: 1px solid #000;
          border-collapse: collapse;
          padding: 0.3em;
          caption-side: bottom;
       }
       caption {
          padding: 0.3em;
          color: #fff;
           background: #000;
       }
       th {
          background: #eee;
       }        

        p{
          text-align: justifice;
          font-face: Arial;
          font-size:15;
        }
        
     }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DashboardService],
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.dashboardSrv.getData();

  messages = this.dashboardSrv.getMessages();
  currencys: any[];
  tabls: any[];
  charts = this.dashboardSrv.getCharts();
  chart1 = null;
  //chart2 = null;
  data:any;
  data3:any;
  //prueba = this.dashboardSrv.getCurrency();
 
  
  /* this.dashboardSrv.getCurrency().subscribe(
    (data) => { // Success
      this.currencys = data['result'];
      console.log(data[2]);
    },
    (error) => {
      console.error(error);
    }
  ); */
  constructor(
    private dashboardSrv: DashboardService,
    private ngZone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit() { 
    //JSON.stringify(this.dashboardSrv.getCurrency());
    //console.log(this.dashboardSrv.getCurrency());
    this.dashboardSrv.getUpdateCurrency();
    this.dashboardSrv.getHistoryCurrency();
    this.dashboardSrv.getTableCurrencies().subscribe(
      data3 => { // Success
       this.tabls = data3['resultado'];
        console.log(data3['resultado']);
        
      },
      (error) => {
        console.error(error);
      }
    );
    this.dashboardSrv.getCurrency().subscribe(
      data => { // Success
        //this.currencys = data['result'];
       this.data = data['result'];
        console.log(data['result']);
        
      },
      (error) => {
        console.error(error);
      }
    );

    this.dashboardSrv.getCurrencies().subscribe(
      data1 => { // Success
        //this.currencys = data['result'];
       this.currencys = data1['result'];
        console.log(data1['result']);
      },
      (error) => {
        console.error(error);
      }
    );

    
    
  };

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => this.initChart());
  
  }

  ngOnDestroy() {
    if (this.chart1) {
      this.chart1.destroy();
    }
    /* if (this.chart2) {
      this.chart2.destroy();
    } */
  }

  initChart() {
    this.chart1 = new ApexCharts(document.querySelector('#chart1'), this.charts[0]);
    this.chart1.render();
   /*  this.chart2 = new ApexCharts(document.querySelector('#chart2'), this.charts[1]);
    this.chart2.render(); */
    
  }
}
