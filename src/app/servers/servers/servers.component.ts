import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer : boolean = false;
  serverCreated: string ="No server created";
  serverName: string ="";
  userName:string ="";


  constructor(){
    setTimeout(() => {
      this.allowNewServer= true;
    }, 2000);
  }

ngOnInit() {
  
}

onCreateServer(){
  this.serverCreated= "Server Created. The server was:" + this.serverName;

}
onUpdateServerName(event : Event ){
  this.serverName = (<HTMLInputElement> event.target).value;
}
emptyUsername(){
  this.userName="";

}
}
