import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from '../data.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forms-dynamic',
  templateUrl: './dynamic.component.html',
  styles:[`table {
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
   }   `],
  providers: [DataService],
})
export class FormsDynamicComponent implements OnInit {
  form = new FormGroup({});
  currencys: any[];
  tabls:any[];
  cambios: any[];
  model = { Conversion: this.form.value};
  fields: FormlyFieldConfig[] = [
    {
      key: 'cantidad',
      type: 'input',
      templateOptions: {
        label: 'Cambio',
        placeholder: 'Ingrese la cantidad que desea convertir',
      },
    }

  ];
//aquí van los valores de la api
  selectedCarId = 3;
  cars = [
    { id: 1, name: 'USD ' },
    { id: 2, name: 'EUR' },
    { id: 3, name: 'HNL' },
    { id: 4, name: 'MXN' },
    { id: 5, name: 'JPY' },
    { id: 6, name: 'SVC' },
    { id: 7, name: 'QTR' },
    { id: 8, name: 'CRC' },
    { id: 9, name: 'PAB' },
    { id: 10, name: 'NIO' },
  ];
  constructor(
    private toastr: ToastrService,
    private cambioDivisa: DataService,public fb:FormBuilder) {
      this.form = this.fb.group({
        cantidad: [],
        monedaOrigen: [''],
        monedaDestino: ['']
      })
    }

  ngOnInit() {
    this.cambioDivisa.getTableCurrencies().subscribe(
      data3 => { // Success
       this.tabls = data3['resultado'];
        console.log(data3['resultado']);
        
      },
      (error) => {
        console.error(error);
      }
    );
    this.cambioDivisa.getCurrencies().subscribe(
      data1 => { // Success
        //this.currencys = data['result'];
       this.currencys = data1['result'];
        console.log(data1['result']);
        
      },
      (error) => {
        console.error(error);
      }
    );
  }

  submit() {
  /*   var formData: any = new FormData();
    formData.append("cantidad", this.form.get('cantidad').value);
    formData.append("monedaOrigen", this.form.get('monedaOrigen').value);
    formData.append("monedaDestino", this.form.get('monedaDestino').value);
    let json = JSON.stringify(this.form.value);
    let params = "json="+json;
    console.log(this.form.get('cantidad').value); */
    //console.log(params);
    //console.log(json);
   this.cambioDivisa.getConversion(this.form.value).subscribe(
      data2 => { // Success
        //this.currencys = data['result'];
       this.cambios = data2['result'];
        console.log();
      this.toastr.success(JSON.stringify(data2['result']));
        
      },
      (error) => {
        console.error(error);
      }
    );
    /* console.log(this.cambio);
    console.log(this.form.value) */
    //this.showToast();

  }

  showToast() {
    //this.toastr.success(JSON.stringify());
  }
}
