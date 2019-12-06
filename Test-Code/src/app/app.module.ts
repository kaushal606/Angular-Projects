import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipelineComponent } from './dash-board/pipeline/pipeline.component';
import { RateComponent } from './dash-board/pipeline/rate/rate.component';
import { PricingTableComponent } from './dash-board/pipeline/pricing_table/pricing-table.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard/pipeline', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashBoardComponent,
    children: [
      { path: 'pipeline', component: PipelineComponent }

    ]
  }
];



@NgModule({
  declarations: [AppComponent, DashBoardComponent, PipelineComponent, RateComponent, PricingTableComponent],

  imports: [BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
