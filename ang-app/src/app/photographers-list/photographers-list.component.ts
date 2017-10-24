import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../shared/services/get-data.service';
import { PhotographersListModel } from './photographers-list.model';
import { Response} from '@angular/http';

@Component({
  selector: 'app-photographers-list',
  templateUrl: './photographers-list.component.html',
  styleUrls: ['./photographers-list.component.scss']
})
export class PhotographersListComponent implements OnInit {
  private photographersUrl = '/assets/data/photographers.json';
  photographers: PhotographersListModel[] = [];

  constructor(private getDataSrv: GetDataService) { }

  ngOnInit() {
    this.getDataSrv.getData(this.photographersUrl).subscribe(
      (data: Response) => {
        const photographersList = data.json();

        for (const index in photographersList) {
          const photographer = photographersList[index];

          this.photographers.push({
            id: photographer.id,
            name: photographer.name,
            photo: photographer.photo,
            weight: photographer.weight
          });
        }

        this.photographers.sort( function(photograph1, photograph2) {
          if ( photograph1.weight < photograph2.weight ) {
            return 1;
          } else if ( photograph1.weight > photograph2.weight ) {
            return -1;
          } else {
            return 0;
          }
        });
      },
      (error) => { console.log(error); }
    );

  }
}
