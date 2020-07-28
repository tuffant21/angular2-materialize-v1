import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Angular2MaterializeV1Service} from 'angular2-materialize-v1';
import {SyntaxHighlighterService} from '../../syntax-highlighter.service';

@Component({
  selector: 'app-collapsible',
  templateUrl: './collapsible.component.html',
  styleUrls: ['./collapsible.component.css']
})
export class CollapsibleComponent implements OnInit, AfterViewInit {

  constructor(private angular2MaterializeService: Angular2MaterializeV1Service,
              private syntaxHighlighterService: SyntaxHighlighterService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.syntaxHighlighterService.highlightAll();
    this.angular2MaterializeService.initCollapsible('#collapsible1');
    this.angular2MaterializeService.initCollapsible('#accordian');
    this.angular2MaterializeService.initCollapsible('#expandable', {
      accordion: false
    });
  }
}
