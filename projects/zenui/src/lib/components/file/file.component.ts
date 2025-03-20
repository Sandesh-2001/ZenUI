import { NgStyle } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'zen-file',
  imports: [NgStyle],
  standalone: true,
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent {

  @ViewChild('fileInput') fileInput!: ElementRef<HTMLInputElement>;

  @Input() height: string = '100px';
  @Input() multiple: boolean = false;
  @Input() customStyles: object | string = '';
  @Input() allowedFileTypes: string = '';
  @Input() placeholder:string = "";

  @Output() onFileChange: EventEmitter<File | FileList> = new EventEmitter();

  isDragging = false;

  triggerSelectFile(): void {
    this.fileInput.nativeElement.click();
  }

  fileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files) {
      this.onFileChange.emit(this.multiple ? input.files : input.files[0]);
    }
  }

  onDragOver(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = true;
  }

  onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;
  }

  onDrop(event: DragEvent): void {
    event.preventDefault();
    this.isDragging = false;

    if (event.dataTransfer?.files) {
      this.onFileChange.emit(this.multiple ? event.dataTransfer.files : event.dataTransfer.files[0]);
    }
  }
  
}
