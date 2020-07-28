import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SyntaxHighlighterService} from '../../syntax-highlighter.service';

@Component({
  selector: 'app-using-angular2-materialize-v1',
  templateUrl: './using-angular2-materialize-v1.component.html',
  styleUrls: ['./using-angular2-materialize-v1.component.css']
})
export class UsingAngular2MaterializeV1Component implements OnInit, AfterViewInit {

  constructor(private syntaxHighlighterService: SyntaxHighlighterService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.syntaxHighlighterService.highlightAll();
  }

}
