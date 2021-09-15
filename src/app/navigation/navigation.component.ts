import { Component, ChangeDetectorRef} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})

export class NavigationComponent{
  checked = false;
  slide_Toggle_Message = "Light Mode";

  constructor(private cdr: ChangeDetectorRef, private _snackBar: MatSnackBar){}

  async copy(){
    const contact = document.getElementById("email")?.textContent?.toString()
    await navigator.clipboard.writeText(contact!)
  }

  openSnackBar(){
      this._snackBar.open("Contato copiado!", 'Fechar', {
        duration: 3000
      })
  }

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
