import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CameraService } from '../camera.service';
import { dataToImage } from '../utils';

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrl: './picture.component.css'
})
export class PictureComponent implements OnInit {

  // TODO: Task 2
  // private readonly formbuilder = inject(FormBuilder);
  // private readonly router = inject(Router);

  imageData = ""
  form !: FormGroup;
  file!: File;

  constructor(private router: Router, private fb: FormBuilder,
    private cameraSvc: CameraService) {

  }


  ngOnInit(): void {
    if (!this.cameraSvc.imageData) {
      this.router.navigate(['/'])
      return;
    }
    this.imageData = this.cameraSvc.imageData;
    this.form = this.fb.group(
      {
        title: this.fb.control<string>(''),
        complain: this.fb.control<string>(''),
      }
    );
    this.file = dataToImage(this.imageData);
    console.log(this.file);
  }

  post() {
    // TODO: Task 3
    const formVal = this.form.value;
    this.cameraSvc.upload(formVal, this.file).then((result) => {
      this.router.navigate(['/']);
    }).catch(error => {
      console.error(error);
    })

  }

}
