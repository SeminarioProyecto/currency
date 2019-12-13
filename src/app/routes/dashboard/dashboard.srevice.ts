import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'node_modules/rxjs/'
import { parse } from 'querystring';
import { parseSelectorToR3Selector } from '@angular/compiler/src/core';

const MESSAGES = [
  {
    img: 'assets/images/divisa/honduras.png',
    subject: 'Honduras',
    content: `Lempira (moneda) El Lempira (código ISO 4217: HNL) 
    es la unidad monetaria de Honduras desde 1931. Se divide en 100 centavos.`,
  },
  {
    img: 'assets/images/divisa/usa.png',
    subject: 'Estados Unidos',
    content: `El dólar estadounidense es la moneda oficial de Estados Unidos. Usualmente también
     se suele asociar el nombre empleado por la divisa con la circulación legal en ese país. `,
  },
  {
    img: 'assets/images/divisa/euro.jpg',
    subject: 'Europa',
    content: `El nombre de «euro» fue adoptado oficialmente el 16 de diciembre de 1995 en Madrid.
     ​ El euro se introdujo en los mercados financieros mundiales como una moneda de cuenta
      el 1 de enero de 1999, reemplazando la antigua Unidad Monetaria Europea `,
  },
  {
    img: 'assets/images/divisa/japon.png',
    subject: 'Japon',
    content: `El yen (円 símbolo monetario: ¥, ISO: JPY) es la unidad monetaria 
    utilizada en Japón​ y la tercera moneda más valorada en el mercado de divisas 
    después del dólar estadounidense y el euro.`,
  },
  {
    img: 'assets/images/divisa/mexico.png',
    subject: 'Mexico',
    content: `El peso mexicano fue la primera moneda en el mundo en utilizar el signo "$", 
    incluso antes que el dólar de Estados Unidos, el cual más tarde lo adoptó para su propio uso.`,
  },
];


@Injectable()
export class DashboardService {
  private urlback = 'https://currencyapiseminario.herokuapp.com/';
  public moneda1:string='Euro';
  public moneda3:string='Lempira';
  public moneda2:string='Dolar';

  graficos  = this.getCurrencies2().subscribe(
    data => { // Success
      //this.currencys = data['result'];
     this.currencys = data['result'];
      
      this.moneda1=this.currencys[1].nombreMoneda.toString();
      this.moneda2=this.currencys[6].nombreMoneda.toString();
      this.moneda3=this.currencys[0].nombreMoneda.toString();

      console.log(this.moneda1);
      console.log(this.moneda2);
      console.log(this.moneda3);

      //return this.currencys[4].nombreMoneda;
    },
    (error) => {
      console.error(error);
    }
  );
  constructor(private http: HttpClient) {}
  getCurrency():Observable<any> {
   /*  console.log(this.http.get('http://localhost:8000/currencyHistory?result=3')); */
    /* return this.http.get('http://ce1132f2.ngrok.io/currencyHistory/?result:3'); */
    return this.http.get(this.urlback+'currency/HNL');
  }
  getCurrencies():Observable<any> {
     return this.http.get(this.urlback+'currencies');
   }

   getTableCurrencies():Observable<any> {
    return this.http.get(this.urlback+'tableConversions');
  }

   getCurrencies2(){
     
   return this.http.get(this.urlback+'currencies');

  }
  getUpdateCurrency(){
    return this.http.get(this.urlback+'updateCurrencies');
  }
  getHistoryCurrency(){
    return this.http.get(this.urlback+'newHistoric');
  }

  getData() {
    //return ELEMENT_DATA;
  }

  getMessages() {
    return MESSAGES;
  }

  getCharts() {
    return this.charts;
  }
  public currencys: any[];
   charts = [
    {
      chart: {
        height: 350,
        type: 'area',
        toolbar: false,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
      },
      series: [
        {
          
          name: this.moneda1,
          data: [1, 1, 1, 1, 1, 1, 1],
        },
        {
          name: this.moneda2,
          data: [1.10587, 1.10675, 1.109261, 1.10832, 1.106272, 1.105297, 1.109863],
        },{
          name: this.moneda3,
          data: [27.53080, 27.55271, 27.29599, 27.49579, 27.39891, 27.76526, 27.29599],
        },
      ],
      xaxis: {
        type: 'datetime',
        categories: [
          '2019-12-05T00:00:00',
          '2019-12-06T04:30:00',
          '2019-12-07T05:30:00',
          '2019-12-08T04:30:00',
          '2019-12-09T01:30:00',
          '2019-12-11T02:30:00',
          '2019-12-12T03:30:00',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
      legend: {
        position: 'top',
        horizontalAlign: 'right',
      },
    },
    {
      chart: {
        height: 350,
        type: 'radar',
      },
      series: [
        {
          name: 'Cambio por moneda',
          data: [20, 100, 40, 30, 50, 80, 33,1],
        },
      ],
      labels: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sábado','hola'],
      plotOptions: {
        radar: {
          size: 140,
          polygons: {
            strokeColor: '#e9e9e9',
            fill: {
              colors: ['#f8f8f8', '#fff'],
            },
          },
        },
      },
      colors: ['#FF4560'],
      markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF4560',
        strokeWidth: 2,
      },
      tooltip: {
        y: {
          formatter: (val: number) => {
            return val;
          },
        },
      },
      yaxis: {
        tickAmount: 7,
        labels: {
          formatter: (val: number, i: number) => {
            if (i % 2 === 0) {
              return val;
            } else {
              return '';
            }
          },
        },
      },
    },
  ];

 
}
