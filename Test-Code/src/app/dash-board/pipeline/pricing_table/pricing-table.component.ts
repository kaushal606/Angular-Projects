import { Component, OnInit } from '@angular/core';
import { Pricing } from '../../Model/Pricing';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pricing-table',
  templateUrl: './pricing-table.component.html',
  styleUrls: ['./pricing-table.component.css']
})
export class PricingTableComponent implements OnInit {

  tableData: Pricing;
  private url = "../../../../assets/data/Pricing-Data.json";

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get<Pricing>(this.url).subscribe(res => {
      this.tableData = res;
      console.log(this.tableData);
    });
  }

}
