import {Component, trigger, state, style, transition, animate, keyframes, ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
      trigger('sideMenuAnime', [
          state('close', style({width:'0px', visibility: 'hidden'})),
          state('open', style({width:'260px'})),
          transition('open => close', animate('500ms ease-in')),
          transition('close => open', animate('500ms ease-out'))
      ]),
    trigger('mainContainerAnime', [
      state('close', style({marginLeft:'0px'})),
      state('open', style({marginLeft:'260px'})),
      transition('open => close', animate('500ms ease-in')),
      transition('close => open', animate('500ms ease-out'))
    ]),
    trigger('heroAnime', [
      state('close', style({paddingLeft:'165px'})),
      state('open', style({paddingLeft:'30px'})),
      transition('open => close', animate('500ms ease-in')),
      transition('close => open', animate('500ms ease-out'))
    ])
    // trigger('myTrigger', [
    //   state('small', style({
    //     transform: 'scale(1)'
    //   })),
    //   state('large', style({
    //     transform: 'scale(1.4)'
    //   })),
    //   state('extraLarge', style({
    //     transform: 'scale(2)'
    //   })),
    //   state('fadeIn', style({
    //     opacity: '1',
    //   })),
    //   // transition('small => large', animate('500ms ease-in')),
    //   // transition('large => small', animate('500ms ease-out'))
    //   // transition('small => large, large => small', animate('500ms'))
    //   // transition('small <=> large', animate('500ms'))
    //   // transition('* => *', animate('500ms ease-in')),
    //   //   transition('void => *', [
    //   //       style({ opacity: '0', transform: 'translateX(200px)'}),
    //   //       animate('500ms 0 ease-out')
    //   //   ])
    //   transition('void => *', [
    //     animate(2000, keyframes([
    //       style({opacity: 0, transform: 'translateY(-30px)', offset: 0}),
    //       style({opacity: 1, transform: 'translateY(5px)', offset: .3}),
    //       style({opacity: 1, transform: 'translateY(0)', offset: 1}),
    //     ]))
    //   ])
    // ]),
    // trigger('removeMe', [
    //   state('out', style({
    //     transform: 'scale(0)',
    //     opacity: 0
    //   })),
    //
    //     transition('* => out', [
    //         animate('500ms 0s ease-in', keyframes([
    //             style({opacity: 1, transform: 'translateX(-8px)', offset: 0}),
    //             style({opacity: 1, transform: 'translateX()', offset: 0.3}),
    //             style({opacity: 0, transform: 'translateX(50px)', offset: 1})
    //         ]))
    //     ])
    // ])
  ]
})
export class AppComponent {

  openClose:string = 'open';

  hideAndShow(): void {

    this.openClose = (this.openClose === 'open') ? 'close' : 'open';

    // alert('alert hideshow' + this.openClose);
  }
  // state: string = 'fadein';
  // // items = ['item1', 'item2', 'item3'];
  // items = new Array();
  // animDetails: string = 'Waiting for this thing';
  // btnState: string = 'in';
  //
  // constructor(private cdRef: ChangeDetectorRef) {
  //
  // }
  //
  //
  // toggleState() {
  //   // this.state = (this.state === 'small' ? 'large' : 'small');
  //   this.items.push('another item');
  //   this.state = 'fadeIn';
  //   this.btnState = 'out';
  // }
  //
  // animStart(event: any) {
  //   console.log('Animation starts');
  //   console.log(event);
  // }
  //
  // animDone(event: any) {
  //   this.animDetails = 'It took me ' + event.totalTime + 'ms to complete.';
  //   this.cdRef.detectChanges();
  //   console.log('Animation finito');
  // }
  //
  // // title = 'Frontpage';
}
