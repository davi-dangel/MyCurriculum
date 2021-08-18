import { Component, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent{
  checked = false;
  slide_Toggle_Message = "Light Mode";

  constructor(private cdr: ChangeDetectorRef){}

  mudou(){
    if(this.checked === false){
      this.checked = true
      this.slide_Toggle_Message = "Dark Mode"
    }
    else {
      this.checked = false
      this.slide_Toggle_Message = "Light Mode"
    }
    document.querySelector('html')?.classList.toggle('light-mode')
    this.cdr.detectChanges();
  }
}
