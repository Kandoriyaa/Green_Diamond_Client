import { Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';

@Component({
  selector: 'app-slider-component',
  standalone: true,
  imports: [],
  templateUrl: './slider-component.component.html',
  styleUrl: './slider-component.component.css'
})
export class SliderComponentComponent {

  swiper!: Swiper;

  constructor() {}

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', {
      // modules: [Navigation, Pagination],
      speed: 500,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }

}
