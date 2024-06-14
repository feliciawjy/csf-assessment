import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WebcamComponent, WebcamImage } from 'ngx-webcam';
import { Subject, Subscription } from 'rxjs';
import { CameraService } from '../camera.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  // TODO: Task 1
  @ViewChild(WebcamComponent)
  webcam!: WebcamComponent
  width: number = 500
  height: number = 375
  aspectRatios = [
    { label: '4:3', height: 282 },
    { label: '16:9', height: 375 },
    { label: '3:2', height: 333 },
    { label: '1:1', height: 500 }
  ];
  selectedAspectRatio = this.aspectRatios[0];

  pics: string[] = []
  sub$!: Subscription
  trigger = new Subject<void>;

  constructor(private router: Router, private cameraSvc: CameraService) {
  }

  ngOnInit(): void {
    console.log("init ... " + this.webcam);
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.webcam.trigger = this.trigger;
    this.sub$ = this.webcam.imageCapture.subscribe(
      this.snapshot.bind(this)
    );
  }

  aspectRatioSelection(aspectRatio: any): void {
    this.selectedAspectRatio = aspectRatio;
    this.height = aspectRatio.height;
  }
  


  snap() {
    this.trigger.next();
  }

  snapshot(webcamImg: WebcamImage) {
    this.cameraSvc.imageData = webcamImg.imageAsDataUrl;
    this.pics.push(webcamImg.imageAsDataUrl);
  }
}
