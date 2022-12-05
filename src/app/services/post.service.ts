import { Injectable } from '@angular/core';

//modulos para firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//modelo
import { Post } from '../post.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private angularFirestore: AngularFirestore) { }
//metodos para le crud

getPosts(){
return this.angularFirestore
.collection("posts")
.snapshotChanges()
}
getPostById(id){
return this.angularFirestore
.collection("posts")
.doc(id)
.valueChanges()
}
createPost(post: Post){
return new Promise<any> ((resolve, reject) =>{
  this.angularFirestore
  .collection("posts")
  .add(post)
  .then ((response) =>{
    console.log(response)
  },
  (error) =>{
    reject(error)
  })
})
}
updatePost(post:Post, id){
return this.angularFirestore
.collection("posts")
.doc(id)
.update({
  titulo: post.titulo,
  instructor: post.instructor,
  ubicacion: post.ubicacion
})
}
deletePost(post){
return this.angularFirestore
.collection("posts")
.doc(post.id)
.delete();
}

}
