import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { BrowserModule } from '@angular/platform-browser';
import { LineChartComponent } from './line-chart/line-chart.component';
import { NgChartsModule } from 'ng2-charts';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    LineChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
