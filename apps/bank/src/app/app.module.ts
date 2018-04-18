import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { SharedComponentModule } from '@demo-app/shared-component';
import { ChartingModule } from '@demo-app/charting';
import { ChartDataServiceService } from './chart-data-service.service';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
    SharedComponentModule,
    ChartingModule,
    ChartsModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers:[ChartDataServiceService]
})
export class AppModule {}
