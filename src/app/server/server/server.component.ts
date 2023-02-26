import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-server]',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

    ServerName : string  = "Server Name";
    ServerStatus : string = "Active";
    ServerId : number = 1234;

ngOnInit(){

}

    getServerStatus  (){
      this.ServerStatus;

    }
}
