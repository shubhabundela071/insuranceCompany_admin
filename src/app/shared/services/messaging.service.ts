
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { mergeMapTo } from 'rxjs/operators';
import { take } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from './auth.service';
@Injectable()
export class MessagingService {

  currentMessage = new BehaviorSubject(null);

  constructor(
    private authService: AuthService,
    private angularFireDB: AngularFireDatabase,
    private angularFireAuth: AngularFireAuth,
    private angularFireMessaging: AngularFireMessaging) {

    this.angularFireMessaging.messaging.subscribe(
      (_messaging) => {

        _messaging.onMessage = _messaging.onMessage.bind(_messaging);
        _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
      }
    )
  }

  /**
   * update token in firebase database
   *
   * @param userId userId as a key
   * @param token token as a value
   */

  updateToken(userId, token) {
    console.log('updateToken', token)
    // we can change this function to request our backend service
    this.angularFireAuth.authState.pipe(take(1)).subscribe(
      () => {
        const data = {};
        data[userId] = token
        this.angularFireDB.object('fcmTokens').update(data).then(data => {

        }).catch(err => {
          console.log(err);

        })
      }, (err) => {
        console.log(err);

      })
  }
  /**
   * request permission for notification from firebase cloud messaging
   *
   * @param userId userId
   */


  // requestPermission(userId) {
  //   console.log("Messagin file",)
  //   this.angularFireMessaging.requestToken.subscribe(
  //     (token) => {
  //       this.updateFCM({ "userId": userId, "token": token });
  //       this.updateToken(userId, token);
  //     },
  //     (err) => {
  //       console.error('Unable to get permission to notify.', err);
  //     }
  //   );
  // }


  requestPermission(userId, FCMToken) {
    console.log("Messagin file requestPermission ", FCMToken)
    this.updateFCM(userId, FCMToken);
    this.angularFireMessaging.requestPermission
      .pipe(mergeMapTo(this.angularFireMessaging.getToken))
      .subscribe(
        // (token) => {
        //   this.authService.updateFCMtoken({ "userId": userId, "token": token });
        //   this.updateToken(userId, token);
        // }
        (token) => { console.log('Permission granted! Save to the server!', token); },
        (error) => { console.error(error); },
      ); 



  }
  updateFCMtoken(userId: any, FCMToken: any) {
    throw new Error("Method not implemented.");
  }

  /**
   * hook method when new notification received in foreground
   */
  receiveMessage() {
    this.angularFireMessaging.messages.subscribe(
      (payload) => {
        console.log("new message received. ", payload);
        this.currentMessage.next(payload);
      })
  }

  updateFCM(userId: any, FCMToken: any ) {
  console.log("updateFCM")
    this.authService.updateFCMtoken(userId, FCMToken)
      .subscribe(
        (response: any) => {
          console.log(response);
        }, error => {
          console.log(error)
        }
      );
  }
}



// import { Injectable } from '@angular/core';
// import { AngularFireDatabase } from '@angular/fire/database';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { AngularFireMessaging } from '@angular/fire/messaging';
// import { take } from 'rxjs/operators';
// import { BehaviorSubject } from 'rxjs';

// import * as firebase from 'firebase/app';
// //import 'firebase/messaging';

// import jwt_decode from 'jwt-decode';
// import { AuthService } from 'app/shared/services/auth.service';
// import { decode } from 'punycode';


// @Injectable()
// export class MessagingService {

//     currentMessage = new BehaviorSubject(null);

//     constructor(
//         private angularFireDB: AngularFireDatabase,
//         private angularFireAuth: AngularFireAuth,
//         private angularFireMessaging: AngularFireMessaging,
//         private authService: AuthService) {
//         //if (firebase.messaging.isSupported()) {
//             this.angularFireMessaging.messaging.subscribe(
//                 (_messaging) => {
//                     _messaging.onMessage = _messaging.onMessage.bind(_messaging);
//                     _messaging.onTokenRefresh = _messaging.onTokenRefresh.bind(_messaging);
//                 }
//             )
//         //}

//     }

//     /**
//      * update token in firebase database
//      * 
//      * @param userId userId as a key 
//      * @param token token as a value
//      */
//     updateToken(userId, token) {
//         console.log("updateToken",userId);
//         // we can change this function to request our backend service
//         if (firebase.messaging.isSupported()) {
//             this.angularFireAuth.authState.pipe(take(1)).subscribe(
//                 () => {
//                     const data = {};
//                     data[userId] = token
//                     this.angularFireDB.object('fcmTokens/').update(data)
//                     console.log("fcm ", data);
//                 });
//             this.authService.updateServerDeviceToken({ device_token: token }).subscribe((response) => {
//             })
//         }
//     }

//     /**
//      * request permission for notification from firebase cloud messaging
//      * 
//      * @param userId userId
//      */
//     requestPermission(userId) {
//         console.log('request permission', userId);
//         //if (firebase.messaging.isSupported()) {
//             this.angularFireMessaging.requestToken.subscribe(
//                 (token) => {
//                     console.log('request permission', token);
//                     //let tokeServer = localStorage.getItem("token").replace("Bearer ", "");

//                     //ar decoded = jwt_decode();
//                     //console.log('ttt',decoded);
//                     this.updateToken(userId, token);

//                 },
//                 (err) => {
//                      console.error('Unable to get permission to notify.', err);
//                 }
//             );
//        // }
//     }

//     /**
//      * hook method when new notification received in foreground
//      */
//     receiveMessage() {
//         if (firebase.messaging.isSupported()) {
//             this.angularFireMessaging.messages.subscribe(
//                 (payload) => {
//                     alert("new message received. " + payload);
//                     this.currentMessage.next(payload);
//                 })
//         }
//     }
// }