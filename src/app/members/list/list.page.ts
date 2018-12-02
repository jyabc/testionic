import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private base64Image;

  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public translate: TranslateService, private camera: Camera, private photoViewer: PhotoViewer) {
  
  
  }

  public takePicture (){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE //PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
     this.base64Image = 'data:image/jpeg;base64,' + imageData;

     console.log(this.base64Image);
     console.log('camera img ok');
    }, (err) => {
     // Handle error
     console.log('camera img err');
    });
  }

  public viewphoto(){
    this.photoViewer.show(this.base64Image);
}

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
