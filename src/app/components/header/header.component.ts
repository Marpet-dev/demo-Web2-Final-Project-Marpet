import { AvatarService } from '../../service/avatar.service'
import { SendavatarService } from '../../service/sendavatar.service';
import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  avatarRandom: any;
  // message: any;
  message="https://images.dog.ceo/breeds/springer-english/n02102040_1266.jpg";
  constructor(private scroll: ViewportScroller, private _service: AvatarService, private stageColorService: SendavatarService) { }
  // message:any;
  // message=document.getElementById("avatarString")?.innerText;
  ngOnInit(){
    this._service.getSampleData().subscribe({
      next: data=>{
        // console.log(data);
        this.avatarRandom=data;
        console.log(document.getElementById("avatarString")?.id);
        console.log("Try first:"+this.avatarRandom.message);
        // this.stageColorService.setMessage(this.message) --ko dc, phải ở ngoài

      }
    })
    this.stageColorService.setMessage(this.message);
    // this.stageColorService.setMessage(this.avatarRandom.message);
    // console.log("sdad"+this.avatarRandom.message);
    // const canv =document.getElementById('avatarCustomer') as HTMLCanvasElement;
    // this.stageColorService.sendStage(canv.toDataURL()); // use service to send image to color component
  }

  scrollToTop(){
    this.scroll.scrollToPosition([0,0]);
  }
  // sendPattern(){
  //   const canv = document.getElementById('avatarCustomer') as HTMLCanvasElement;
  //   this.stageColorService.sendStage(canv.toDataURL()); // use service to send image to color component
  // };
}
