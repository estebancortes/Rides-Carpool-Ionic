
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgmCoreModule } from '@agm/core';
import { IonicModule } from '@ionic/angular';
import { MapDirectionComponent } from '@app/components/map-direction/map-direction.component';
import { ChatListComponent } from '@app/components/chat-list/chat-list.component';
import { AgmOverlays } from 'agm-overlays';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmDirectionModule } from 'agm-direction';
import { ChattingComponent } from '@app/components/chatting/chatting.component';
// import { StopOverLocationComponent } from '@app/components/stop-over-location/stop-over-location.component';

@NgModule({
  declarations: [MapDirectionComponent, ChatListComponent, ChattingComponent],
  entryComponents: [ChattingComponent, MapDirectionComponent],
  imports: [
    CommonModule,
    AgmCoreModule,
    AgmDirectionModule,
    AgmOverlays,
    ReactiveFormsModule,
    IonicModule,
    FormsModule,
  ],
  exports: [MapDirectionComponent, ChatListComponent, ChattingComponent]
})
export class ShareableModule { }
