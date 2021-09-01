import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Image } from 'src/models/Image';
import { ImageRestService } from '../../../services/api/image.rest.service';

@Component({
  selector: 'i-image-library-modal',
  templateUrl: './image-library-modal.component.html',
  styleUrls: ['./image-library-modal.component.scss']
})
export class ImageLibraryModalComponent implements OnInit {
  images: Image[];
  @Input() selectedImage: Image;
  @Output() onSelect = new EventEmitter<Image>();
  @Output() onHide = new EventEmitter<null>();

  constructor(private imageRest: ImageRestService) { }

  ngOnInit(): void {
    this.imageRest.getAll()
    this.imageRest.list$
      .subscribe(
        is => {
          this.images = is?.map(i => new Image(i.id, i.name));
        }
      );
  }

  selectImage(image: Image) {
    // this.selectedImage = image;
    this.onSelect.emit(image);
  }

  hide() {
    this.onHide.emit();
  }

}
