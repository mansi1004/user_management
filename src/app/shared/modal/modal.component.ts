import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  message:string="Woohoo, you're reading this text in a modal!";
  @Output() close=new EventEmitter<void>();


  constructor() { }

  ngOnInit() {
  }

  onClose()
  {
    this.close.emit();
  }
}
