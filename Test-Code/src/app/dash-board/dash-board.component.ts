import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  loadedMenu;
  private url: string = '../../assets/data/menu.json';


  constructor(private http: HttpClient) { }

  ngOnInit() {

  }




}
