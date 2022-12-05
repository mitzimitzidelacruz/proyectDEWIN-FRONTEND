import { Component, OnInit } from '@angular/core';

import { Post } from 'src/app/post.model';
import { PostService } from 'src/app/services/post.service';



@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
Posts: Post[]
  constructor( private postService: PostService) { }

  ngOnInit(): void {
   // console.log(this.postService.getPosts())
    this.postService.getPosts().subscribe(async (res) =>{
      this.Posts = await res.map ((e) =>{
       // console.log(res);
        return{
          id: e.payload.doc.id,
          ...(e.payload.doc.data() as Post)
        };
      });
    });
  }
 deleteRow = (post) => this.postService.deletePost(post);
}
