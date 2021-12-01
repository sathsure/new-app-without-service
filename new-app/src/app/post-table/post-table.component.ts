import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-post-table',
  templateUrl: './post-table.component.html',
  styleUrls: ['./post-table.component.css']
})
export class PostTableComponent implements OnInit {

  @Input() posts: [{ heading: string; content: string; newDate: Date }];
  @Output() deleteRow = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(index:number) {
    this.deleteRow.emit(index);
  }
  
}
