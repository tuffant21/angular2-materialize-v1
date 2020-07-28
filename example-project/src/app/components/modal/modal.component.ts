import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SyntaxHighlighterService} from '../../syntax-highlighter.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, AfterViewInit {

  constructor(private syntaxHighlighterService: SyntaxHighlighterService) {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.syntaxHighlighterService.highlightAll();
  }

}
