
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ChattingComponent } from '@app/components/chatting/chatting.component';
import { environment } from '@env/environment';
@Component({
  selector: 'app-chatlist',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss'],
})
export class ChatListComponent implements OnInit {

  public chatData: Array<any>;
  public segmentTab: any;
  public buttonClicked: boolean;
  public clickData: any;
  public imageData: any;
  constructor(private modalCtrl: ModalController) {
    this.chatData = environment.CHAT_DATA;
  }

  ngOnInit() { }
  async goforChat(chat) {
    const modal = await this.modalCtrl.create({
      component: ChattingComponent,
      componentProps: { value: chat }
    });
    return await modal.present();
  }
}
