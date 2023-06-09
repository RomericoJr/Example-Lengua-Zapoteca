import { Injectable } from '@angular/core';

import { collectionWord } from '../interface';
 import { Firestore, collectionData } from '@angular/fire/firestore';
import { collection, addDoc, query, where, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(
    private firestore: Firestore
    ) { }

  guardarWord( word: collectionWord){
    const wordRef = collection(this.firestore, 'words');
    return addDoc(wordRef, word);
  }

  getWord (filter= ''){
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef);
    if(filter){
      q = query(wordRef, where('name', '==', filter))
    }
     return collectionData(q) as unknown as Observable<collectionWord[]>;
  }

  getWordById( id: string){
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef, where('id', '==', id));
    return collectionData(q) as unknown as Observable<collectionWord[]>;
  }

  async updateWord(word: collectionWord){
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef, where('id', '==', word.id));
    const wordDoc = await getDocs(q);

    wordDoc.forEach(async(docu) => {
      const docRef = doc(this.firestore, 'words', docu.id);
      await updateDoc(docRef, {...word});

  });
}

  async deleteWord(id: string): Promise<void> {
    const wordRef = collection(this.firestore, 'words');
    let q = query(wordRef, where('id', '==', id));
    const wordDoc = await getDocs(q);

    wordDoc.forEach(async(docu) => {
      const docRef = doc(this.firestore, 'words', docu.id);
      deleteDoc(docRef);
    });
  }

}
