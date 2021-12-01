import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // VIEW-ENCAPSULATION
  // encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title: string = 'Post Application';
  onChangeInput: string = '';
  toggleBtn: boolean = false;
  buttonLabel:string = 'Add';
  posts: [{ heading: string; content: string; newDate: Date }] = [
    { heading: 'First Heading', content: 'First Content', newDate: new Date() },
  ];
  status = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Good');
    }, 3000);
  });

  constructor() {
    console.log('Parent Constructor');
  }

  ngOnInit() {
    console.log('Parent ngOnInit');
  }

  onToggle() {
    this.toggleBtn = !this.toggleBtn;
    this.buttonLabel = this.toggleBtn ? 'Remove' : 'Add';
  }

  onPostAdded($event) {
    if ($event['heading'] && $event['content']) {
      this.posts.push($event);
    } else {
      alert('Please add input element to post.');
    }
  }

  onDelete(index:any) {
    this.posts.splice(index,1);
  }
}
