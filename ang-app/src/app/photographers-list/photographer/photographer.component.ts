import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Response} from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { GetDataService } from '../../shared/services/get-data.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotographerComponent implements OnInit {
  private photographUrl = '/assets/data/photographers/';
  photograph: {id: number};
  photographContent: any;
  photographGallery = [];
  btnClicked = false;
  galleryAmount;
  popupOpened = false;

  constructor(private route: ActivatedRoute,
              private getDataSrv: GetDataService) { }

  ngOnInit() {
    this.photograph = {
      id: this.route.snapshot.params['id']
    };

    this.getDataSrv.getData(this.photographUrl + this.photograph.id + '.json').subscribe(
      (data: Response) => {
        this.photographContent = data.json();

        for (const index in this.photographContent.gallery) {
          const galleryImage = this.photographContent.gallery[index];

          this.photographGallery.push({
            photo: galleryImage.photo,
            photo_title: galleryImage.photo_title,
            photo_description: galleryImage.photo_description,
            weight: galleryImage.weight
          });

          this.galleryAmount = index;
        }

        if (this.galleryAmount <= 2) {
          this.btnClicked = true;
        }

        this.photographGallery.sort( function(image1, image2) {
          if ( image1.weight < image2.weight ) {
            return 1;
          } else if ( image1.weight > image2.weight ) {
            return -1;
          } else {
            return 0;
          }
        });
      },
      (error) => { console.log(error); }
    );
  }

  showMoreImages() {
    this.btnClicked = true;
  }

  openPopup(i) {
    this.popupOpened = !this.popupOpened;
  }

}


