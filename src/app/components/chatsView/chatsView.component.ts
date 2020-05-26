import { GetViewChatsGQL, Building } from './../../shared/graphql/service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatsView',
  templateUrl: './chatsView.component.html',
  styleUrls: ['./chatsView.component.css']
})
export class ChatsViewComponent implements OnInit {
buildings: Building[];
  constructor(private GetViewChats:GetViewChatsGQL) { 
    this.type=localStorage.getItem('type');
  }
type;
  ngOnInit() {
    this.GetViewChats.watch({},{fetchPolicy:'network-only'}).valueChanges.subscribe(ele=>{
      console.log(ele);
      this.buildings=ele.data.GetViewChats;
    });
  }

}
