import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Response} from '@angular/http';
import { ActivatedRoute, Params } from '@angular/router';
import { GetDataService } from '../../shared/services/get-data.service';
import { PhotoPopupComponent } from './photo-popup/photo-popup.component';
import { Subscription } from 'rxjs/Subscription';
import { SortingService } from '../../shared/services/sorting.service';

@Component({
  selector: 'app-photographer',
  templateUrl: './photographer.component.html',
  styleUrls: ['./photographer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PhotographerComponent implements OnInit {
  @ViewChild(PhotoPopupComponent) private popupToggle: PhotoPopupComponent;
  private photographUrl = '/assets/data/photographers/';
  private photographersUrl = '/assets/data/photographers.json';
  paramsSubscription: Subscription;
  photographers = [];
  photograph: {id: number};
  photographContent: any;
  photographGallery = [];
  btnClicked = false;
  galleryAmount;
  itemInfo: object;
  currentId: number;
  nextPhotographId: number;
  prevPhotographId: number;

  constructor(private route: ActivatedRoute,
              private getDataSrv: GetDataService) { }

  ngOnInit() {
    this.photograph = {
      id: this.route.snapshot.params['id']
    };

    this.paramsSubscription = this.route.params.subscribe(
      (params: Params) => {
        this.photograph = {
          id: params['id']
        };

        this.getDataSrv.getData(this.photographUrl + this.photograph.id + '.json').subscribe(
          (data: Response) => {
            this.photographContent = data.json();
            this.photographGallery = [];
            this.btnClicked = false;

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

            SortingService.sortArrayByWeight(this.photographGallery);

            this.currentId = this.photographContent.id;
          },
          (error) => { console.log(error); }
        );

        this.getDataSrv.getData(this.photographersUrl).subscribe(
          (data: Response) => {
            const photographersList = data.json();
            this.photographers = [];

            for (const index in photographersList) {
              const photographer = photographersList[index];

              this.photographers.push({
                id: photographer.id,
                weight: photographer.weight
              });
            }

            SortingService.sortArrayByWeight(this.photographers);

            for (const index in this.photographers) {
              const photographer = this.photographers[index];

              if (photographer.id === this.currentId) {
                this.nextPhotographId =
                  this.photographers[+index + 1] ? this.photographers[+index + 1].id : this.photographers[0].id;
                this.prevPhotographId =
                  this.photographers[+index - 1] ? this.photographers[+index - 1].id : this.photographers[this.photographers.length - 1].id;
              }
            }
          },
          (error) => { console.log(error); }
        );
      }
    );
  }

  showMoreImages() {
    this.btnClicked = true;
  }

  openPopup(item) {
    this.itemInfo = item;
    this.popupToggle.togglePopup();
  }
}
