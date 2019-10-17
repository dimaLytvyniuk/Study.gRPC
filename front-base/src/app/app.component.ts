import { Component, OnInit } from '@angular/core';
import { GreetService } from './services/greet.service';
import { HelloReply } from './generated/greet_pb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'front-base';

  constructor(private greetService: GreetService) { }

  ngOnInit(): void {
    this.sayHello();
  }

  sayHello() {
    this.greetService.sayHello().then((data: HelloReply.AsObject) => {
      console.log(`get reply ${data.message}`)
    })
  }
}
