import { Component, OnInit } from '@angular/core';
import { images } from '../../values';
import { slider } from '../../interfaces';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  image: slider[] = images;
  constructor() { }

  ngOnInit(): void {
  }

}
