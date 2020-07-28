import {Injectable} from '@angular/core';

declare var Prism;

@Injectable({
  providedIn: 'root'
})
export class SyntaxHighlighterService {

  constructor() {
  }

  public highlightAll(): void {
    Prism.highlightAll();
  }
}
