import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime } from 'rxjs';
import { collectionWord } from 'src/app/interface';
import { CrudService } from 'src/app/service/crud.service';
import { SweetService } from '../../../../../service/sweet.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent {
  sweet = inject(SweetService);
  crudService = inject(CrudService);
  router = inject(Router);
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

  editar(word: collectionWord){
    this.router.navigate(['/admin/editar' , word.id]);
  }
  eliminar(word: collectionWord){
    this.sweet.confirm('¿seguro de borrar a' + word.spanishWord + '?' ).then((result) => {
      if (result.isConfirmed) {
        this.crudService.deleteWord(word.id);
        this.sweet.success('Post eliminado');
      } else {
        this.sweet.error('Post no eliminado');
      }
    });

  }
}
