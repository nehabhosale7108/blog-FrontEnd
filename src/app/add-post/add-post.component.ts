import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {
  AddPostForm: FormGroup;

  constructor(private formbuilder: FormBuilder) { 
    this.AddPostForm = this.formbuilder.group({
      title: ['', [Validators.required]],

    })
  }


  ngOnInit(): void {
  }

}
