import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class ChartDataServiceService {
  private mockData = [
    {
      label: 'data1',
      value: 1
    },
    {
      label: 'data2',
      value: 2
    },
    {
      label: 'data3',
      value: 3
    },
    {
      label: 'data4',
      value: 4
    }
  ];

  private dataSubject = new BehaviorSubject(this.mockData);

  $data = this.dataSubject.asObservable();

  addData(newData) {
    this.mockData.push(newData);
    this.dataSubject.next(this.mockData);
  }
}
