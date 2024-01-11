import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResizeService {

  dynamicText: string = 'Sean Wotherspoon';

  constructor() { }

  setNameText(): void {
    const nameText = document.getElementById('name-text');

    nameText!.innerText = this.dynamicText;
  }
}
