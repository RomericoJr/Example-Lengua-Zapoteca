import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { collectionWord } from 'src/app/interface';
import { CrudService } from 'src/app/service/crud.service';
import { Observable } from 'rxjs';
import { SweetService } from '../../../../../service/sweet.service';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  constructor(
    private fb : FormBuilder,
    private crud : CrudService,
    private route: Router,
    private location : Location,
    private activatedRoute: ActivatedRoute,
    private sweet : SweetService

  ){
  }
  titleText = 'Agregar Palabras';
  titleBtn = 'Agregar';
  id!: string;
  ngOnInit(){
    this.activatedRoute.params.subscribe((data : any) => {
      this.id = data.id;
      console.log(this.id);

      if(data.id){
        this.titleText = 'Actualizar Palabras';
        this.titleBtn = 'Actualizar';
        this.crud.getWordById(this.id).subscribe((data) => {
          console.log('existo y soy ', data);
          this.formColeccion.patchValue(data[0])

        });
      }
    });
    // console.log(this.location.getState());

  }
    formColeccion: FormGroup = this.fb.group({
      tipoWord: ['', ],
      spanishWord: ['', Validators.required],
      zapotecoWord: ['', Validators.required],
      content: ['', Validators.required],
      imagen: ['', Validators.required],
      audio: ['', Validators.required],
    })


    option(){

      if(this.id){
        this.update();
      } else {
        this.save();
      }
    }

    update(){
      this.crud.updateWord(
        {
          id : this.id,
          ...this.formColeccion.value

        }
        );
      console.log('Actualizando');
      console.log(this.formColeccion.value);
      this.sweet.success('Actualizado con exito');
      this.route.navigateByUrl('/admin/leer');
    }

    save(){

      this.crud.guardarWord(
        {
          id : new Date().getTime().toString(),
          ...this.formColeccion.value
        } as collectionWord);
      console.log('Guardando');
      console.log(this.formColeccion.value);
      this.sweet.success('Guardado con exito');

      this.route.navigateByUrl('/admin/leer');
    }
  }
