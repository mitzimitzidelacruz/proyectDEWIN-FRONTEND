import { Injectable } from '@angular/core';
//modulos para firestore
import { AngularFirestore } from '@angular/fire/compat/firestore';

//modelo
import { Users } from '../users.model';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private angularFirestore: AngularFirestore) {}
    //metodos para le crud

    getUsers(){
      return this.angularFirestore
      .collection("users")
      .snapshotChanges()
      }
      getUsersById(id){
      return this.angularFirestore
      .collection("users")
      .doc(id)
      .valueChanges()
      }
      createUsers(users: Users){
      return new Promise<any> ((resolve, reject) =>{
        this.angularFirestore
        .collection("users")
        .add(users)
        .then ((response) =>{
          console.log(response)
        },
        (error) =>{
          reject(error)
        })
      })}
      updateUsers(users:Users, id){
      return this.angularFirestore
      .collection("users")
      .doc(id)
      .update({
        nombre: users.nombre,
        apellido: users.apellido,
        direccion: users.direccion,
        discapacidad: users.discapacidad,
        edad: users.edad

      })
      }
      deleteUsers(users){
      return this.angularFirestore
      .collection("users")
      .doc(users.id)
      .delete();
      }}
