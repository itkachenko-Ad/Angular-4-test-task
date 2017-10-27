import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {
  constructor() { }

  sortArrayByWeight(arrayToSort: any) {
    arrayToSort.sort( function(elem1, elem2) {
      if ( elem1.weight < elem2.weight ) {
        return 1;
      } else if ( elem1.weight > elem1.weight ) {
        return -1;
      } else {
        return 0;
      }
    });
  }

}
