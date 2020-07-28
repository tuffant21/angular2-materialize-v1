import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SyntaxHighlighterService} from '../../syntax-highlighter.service';

@Component({
  selector: 'app-pickers',
  templateUrl: './pickers.component.html',
  styleUrls: ['./pickers.component.css']
})
export class PickersComponent implements OnInit, AfterViewInit {

  constructor(private syntaxHighlighterService: SyntaxHighlighterService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.syntaxHighlighterService.highlightAll();
  }

}
