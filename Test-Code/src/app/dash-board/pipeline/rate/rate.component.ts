import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Rate } from '../../Model/Rate';
import { Card } from '../../Model/Card';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit {
  rateForm: FormGroup;
  rateData: Rate;

  private url = "../../../../assets/data/Rate-Data.json";

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Rate>(this.url).subscribe(res => {
      this.rateData = res;
      console.log(this.rateData);
      this.formInit();
    });
  }



  formInit() {
    this.rateForm = this.formBuilder.group({
      description: [this.rateData.description, Validators.required],
      sicCode: [this.rateData.sicCode, Validators.required],
      totalVolume: [{ value: this.rateData.totalVolume, disabled: true }],
      avgTicket: [{ value: this.rateData.avgTicket, disabled: true }],
      currentFees: [this.rateData.currentFees, Validators.required],
      totalTransaction: [{ value: this.rateData.totalTransaction, disabled: true }],
      currentRate: [{ value: this.rateData.currentRate, disabled: true }],
      currentAmmexFees: [this.rateData.currentAmexFees, Validators.required],
      rateDollar: this.formBuilder.group({
        visaCard: [this.rateData.rateDollar.visa, Validators.required],
        masterCard: [this.rateData.rateDollar.masterCard, Validators.required],
        discover: [this.rateData.rateDollar.discover, Validators.required],
        americanExpress: [this.rateData.rateDollar.americanExpress, Validators.required]
      }),
      ratePound: this.formBuilder.group({
        visaCard: [this.rateData.rateDollar.visa, Validators.required],
        masterCard: [this.rateData.rateDollar.masterCard, Validators.required],
        discover: [this.rateData.rateDollar.discover, Validators.required],
        americanExpress: [this.rateData.rateDollar.americanExpress, Validators.required]
      })
    });

  }

  onSubmit() {
    this.rateData = new Rate();
    this.rateData.rateDollar = new Card();
    this.rateData.ratePound = new Card();

    let { rateDollar, ratePound } = this.rateData;

    this.rateData.description = this.rateForm.get('description').value;
    this.rateData.sicCode = this.rateForm.get('sicCode').value;
    this.rateData.totalVolume = this.rateForm.get('totalVolume').value;
    this.rateData.totalTransaction = this.rateForm.get('totalTransaction').value;
    this.rateData.avgTicket = this.rateForm.get('avgTicket').value;
    this.rateData.currentFees = this.rateForm.get('currentFees').value;
    this.rateData.currentRate = this.rateForm.get('currentRate').value;
    this.rateData.currentAmexFees = this.rateForm.get('currentAmmexFees').value;
    ratePound.visa = this.rateForm.get('rateDollar.visaCard').value;
    ratePound.masterCard = this.rateForm.get('rateDollar.masterCard').value;
    ratePound.discover = this.rateForm.get('rateDollar.discover').value;
    ratePound.americanExpress = this.rateForm.get('rateDollar.americanExpress').value;
    rateDollar.visa = this.rateForm.get('ratePound.visaCard').value;
    rateDollar.masterCard = this.rateForm.get('ratePound.masterCard').value;
    rateDollar.discover = this.rateForm.get('ratePound.discover').value;
    rateDollar.americanExpress = this.rateForm.get('ratePound.americanExpress').value;

    console.log(this.rateData);


  }

}
