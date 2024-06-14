import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent implements OnInit {

  // TODO: Task 2
  private readonly formbuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  form !: FormGroup;


  ngOnInit(): void {
    this.form = this.formbuilder.group({
      // image
      title: this.formbuilder.control("", [Validators.required]),
      comments: this.formbuilder.control(""),
    })
  }

  submit() {
    const formData = new FormData();
    formData.set('image', this.form.get('image')?.value); // to map image
    formData.set('title', this.form.get('title')?.value);
    formData.set('comments', this.form.get('comments')?.value);

    console.info(formData);

    // image file
    // TODO: Task 3

  }

}
