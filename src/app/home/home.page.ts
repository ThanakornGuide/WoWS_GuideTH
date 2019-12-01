import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  test: any;
  ArrayTest: any[];
  constructor(public Http:HttpClient) {
    let datas = this.Http.get('https://api.worldofwarships.asia/wows/encyclopedia/battletypes/?application_id=be2e3527b2ce60fa8239e31e2f367271');
    datas.subscribe(result=>{
      this.test = result;
      console.log(this.test);
      console.log(JSON.stringify(this.test));
      console.log('BT : ',this.test.status);
      console.log('BT : ',this.test.data['CLAN']);
      this.ArrayTest = this.test.data;
      console.log('test Array : ',this.ArrayTest);
      console.log('0');
      for (let i in this.test.data){
        console.log(this.test.data[i]);
        
      }
      //console.log(this.ArrayTest['CLAN']);
    })
    //console.log(JSON.parse(JSON.stringify(datas)));
  }

}
