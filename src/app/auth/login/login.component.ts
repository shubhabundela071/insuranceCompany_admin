import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from 'ng5-validation';
import { validateAllFormFields } from 'app/shared/utility/custom-validators';
import { AuthService } from 'app/shared/services/auth.service';
import { SharedDataService } from 'app/shared/services/shared-data.service';
import { Router } from '@angular/router';
import { UtilityService } from 'app/shared/utility/utility.service';
import { HttpResponse } from '@angular/common/http';
import { MessagingService } from 'app/shared/services/messaging.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  message: any;
  isLoginSubmitted: boolean = false;
  loginForm = new FormGroup({
    email_id: new FormControl('', [
      Validators.required,
      CustomValidators.email
    ]),
    password: new FormControl('', [Validators.required])
  });

  constructor(
    private authService: AuthService,
    private sharedDataService: SharedDataService,
    private router: Router,
    private utility: UtilityService,
    private messagingService: MessagingService
  ) {}

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  onSubmit() {
   // console.log("onSubmit function")
    this.isLoginSubmitted = true;
    if (this.loginForm.valid) {
      this.utility.loaderStart();
      this.authService
        .login(this.loginForm.value)
        .subscribe(
          (response: HttpResponse<any>) => {
            localStorage.setItem('token', response.headers.get('authToken'));
            this.sharedDataService.updateUserDataStore(response.body.data);

                /**Update token for push notification */
                const userId = response.body.data.id;
              //  console.log("userId", userId)
                if (localStorage.getItem('FCMtoken')) {
                  const FCMToken = localStorage.getItem('FCMtoken')
                //  console.log("Login component", FCMToken)
                  this.messagingService.requestPermission(userId, FCMToken);
                  this.messagingService.receiveMessage();
                  this.message = this.messagingService.currentMessage;
                }
            /**Update token for push notification */  


            this.router.navigateByUrl('/dashboard');
          },
          error => {
            this.utility.routingAccordingToError(error);
          }
        )
        .add(() => {
          this.utility.resetPage();
        });
    } else {
      validateAllFormFields(this.loginForm);
    }
  }
}
