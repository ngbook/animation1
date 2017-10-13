import { Component, OnInit } from '@angular/core';

const IMG_PATH = 'http://ou2gp2r4n.bkt.clouddn.com/ngbook/pipe-random/pic';
const PAGE_COUNT = 5;

@Component({
  selector: 'sliders',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    list: string[];
    curActive = 0;

    ngOnInit() {
        const arr = [];
        for (let i = 1; i <= PAGE_COUNT; i ++) {
            arr.push(IMG_PATH + i + '.jpg');
        }
        this.list = arr;
        // console.log(this.list);
    }

    prev() {
        if (this.curActive > 0) {
            this.curActive --;
        }
    }

    next() {
        if (this.curActive < PAGE_COUNT - 1) {
            this.curActive ++;
        }
    }
}
