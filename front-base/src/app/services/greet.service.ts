import { Injectable } from '@angular/core';
import { GreeterClient } from '../generated/GreetServiceClientPb';
import { resolve, reject } from 'q';
import { HelloRequest, HelloReply } from '../generated/greet_pb';

@Injectable({
  providedIn: 'root'
})
export class GreetService {
  client: GreeterClient;

  constructor() { 
    this.client = new GreeterClient("http://localhost:8080")
  }

  sayHello(): Promise<object> {
    return new Promise((resolve, reject) => {
      let req = new HelloRequest();
      req.setName("Vasia")
      this.client.sayHello(req, null, (err, response: HelloReply) => {
        console.log(`response ${response.toObject().message}`);
        if (err) {
          return reject(err);
        }
        resolve(response.toObject());
      })
    });
  }
}
