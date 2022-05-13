import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination-photo',
  templateUrl: './pagination-photo.component.html',
  styleUrls: ['./pagination-photo.component.css']
})
export class PaginationPhotoComponent implements OnInit {
 
  // Main pagination array
  len = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  //for showing a range
  interval = 0;
  constructor() { }
  inde: number = 0;
  dyno_arr = []


  ngOnInit(): void {
  }

  showImage(i) {
    this.inde = i + this.interval;
  }


  next() {
    this.inde = this.inde + 1;
    if (this.inde === this.interval + 3) {

      this.interval += 3;
    }
  }


  previous() {
    this.inde = this.inde - 1;

    if (this.interval === 9) {
      this.interval -= 3;
    }
    else if (this.interval === 6 && this.inde === 5) {
      this.interval -= 3;
    }
    else if (this.interval === 3 && this.inde === 2) {
      this.interval -= 3;

    }
  }
}
