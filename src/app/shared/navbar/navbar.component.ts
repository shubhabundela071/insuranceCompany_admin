import { Component, AfterViewChecked, Input } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ErrorHandlerService } from '../services/error-handler.service';
import { AuthService } from '../services/auth.service';
import { UtilityService } from 'app/shared/utility/utility.service';
import { SharedDataService } from '../services/shared-data.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
//import { WebsocketService } from '../services/websocket.service';
import { takeUntil } from 'rxjs/operators';
import jwt_decode from 'jwt-decode'
import { NotificationsService } from '../services/notifications.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements AfterViewChecked {
  @Input() routeName:any;
  toggleClass = "ft-maximize";
  placement = "bottom-right";
  public isCollapsed = true;
  userType: any;
  role: string;
  routerUrl: any;
  userRole: string;
  totalNotification: boolean = false;
  NotificationListing: any=[];
  NotificationCount: any;
  notificationList: any = [];
  loginData: any;

  constructor(
    private route: Router,
    private utilityService: UtilityService,
    private authService: AuthService,
    private messageService: MessageService,
    private loader: NgxUiLoaderService,
    private sharedDataService: SharedDataService,
    private activatedRoute: ActivatedRoute,
    //private webSocketService: WebsocketService,
    private notificationService: NotificationsService
  ) {
    this.routerUrl = this.activatedRoute.snapshot.url;
  }

  // tslint:disable-next-line: use-life-cycle-interface
  ngOnInit() {
    this.countNotification();
    this.notificationHistroy();

    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token").replace("Bearer ", "");

      var decoded = jwt_decode(token);

     // this.userRole = JSON.parse(decoded.roles);
      var user_type = decoded.type;
    }

    if (user_type === "super_admin") {
      this.userRole = "admin";
    } else if (user_type === "vendor") {
      this.userRole = "business";
    }
  }

  ngAfterViewChecked() {
  }

  profilePage() {
    this.route.navigateByUrl(`/${this.userRole}/profile`);
  }

  ToggleClass() {
    if (this.toggleClass === "ft-maximize") {
      this.toggleClass = "ft-minimize";
    } else this.toggleClass = "ft-maximize";
  }
  logout() {
    this.loader.start();
    this.authService.logout();
    this.loader.stop();
  }

  showNotification() {
    this.utilityService.loaderStart();
    this.notificationService.fetchAllNotifications().subscribe(
      (success: any) => {
        this.NotificationListing = success.data;
       this.utilityService.resetPage();
        this.route.navigateByUrl(`/notification`);
      },
      error => {
        this.utilityService.routingAccordingToError(error);
      }
    );
  }

  notificationHistroy() {
    this.notificationService.fetchNotifications().subscribe(
      (success: any) => {
        this.NotificationListing = success.data;
      },
      error => {
        this.utilityService.routingAccordingToError(error);
      }
    );
  }

  countNotification() {
    this.notificationService.updateNotification().subscribe(
      (success: any) => {
         this.NotificationCount = success.data.count;
        if (this.NotificationCount == 0) {
          this.NotificationCount = ""

        } else {
          this.totalNotification = true;
          this.NotificationCount;

        }
      //  console.log("NotificationCount", this.NotificationCount)
      },
      error => {
        this.utilityService.routingAccordingToError(error);
      }
    );
  }

}
