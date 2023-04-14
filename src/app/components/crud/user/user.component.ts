import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable, debounceTime } from 'rxjs';
import { collectionWord } from 'src/app/interface';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  crudService = inject(CrudService);
  word$! : Observable<collectionWord[]>;
  searcher = new FormControl('');

  ngOnInit(){
    // this.crudService.getWord().subscribe((data) => {
    //   console.log('Estos datos vienen',data);
    // });

    this.word$ = this.crudService.getWord();
    this.searcher.valueChanges
    .pipe(
      debounceTime(1000)
    )
    .subscribe((data) => {
      if(data){
        this.word$ = this.crudService.getWord(data);
      } else {
        this.word$ = this.crudService.getWord();
      }

    });


  }
}
