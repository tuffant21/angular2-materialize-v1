import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';
import {SyntaxHighlighterService} from '../../syntax-highlighter.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, AfterViewInit {

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service,
              private syntaxHighlighterService: SyntaxHighlighterService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.syntaxHighlighterService.highlightAll();
    this.angular2MaterializeService.initCarousel('#carousel');
    this.angular2MaterializeService.initCarousel('#carousel-slider', {
      fullWidth: true
    });
    this.angular2MaterializeService.initCarousel('#special-options', {
      fullWidth: true,
      indicators: true
    });
  }

}
