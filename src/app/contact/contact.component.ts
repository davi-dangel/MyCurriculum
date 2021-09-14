import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async copy(){
    const contact = document.getElementById("email")?.textContent?.toString()
    await navigator.clipboard.writeText(contact!)
  }

  openSnackBar(){
      this._snackBar.open("Contato copiado!", 'Fechar', {
        duration: 3000
      })
  }


}
