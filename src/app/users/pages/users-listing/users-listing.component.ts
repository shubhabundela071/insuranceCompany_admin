import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'app/shared/utility/utility.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { UserService } from 'app/shared/services/user.service';
//import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FileUploadService } from 'app/shared/services/file-upload.service';
//import { ExcelService } from 'app/shared/services/excel.service';
import { takeUntil } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-users-listing',
  templateUrl: './users-listing.component.html',
  styleUrls: ['./users-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class UsersListingComponent implements OnInit, OnDestroy {

  UserListing: any[] = [];
  success: any;
  payload: object = {
    created_at: '',
    search: ''
  };
  last_created_at = '';
  search = '';
  //variable used to unsubscribe
  private _unsubscribe = new Subject<boolean>();

  constructor(
    private confirmationService: ConfirmationService,
    private utilityService: UtilityService,
    private UserService: UserService,
    private uploader: FileUploadService,
    private messageService: MessageService
  ) { }

  searchUserForm = new FormGroup({
    search: new FormControl(''),
    filter: new FormControl('')
  });

  ngOnInit() {
    this.getAllUserListing();
  }

  // User list show
  getAllUserListing() {
    console.log("aaa");
    this.utilityService.loaderStart();
    this.UserService.getInfo(this.payload).pipe(takeUntil(this._unsubscribe)).subscribe(
      (success: any) => {
       // console.log('Check value User' + success);
        
        if(success.success == true){
          this.UserListing = success.data;
          this.utilityService.resetPage();
        }
      },
      error => {
        this.utilityService.routingAccordingToError(error);
      }
    );
  }

  //search parameter
  searchUser() {
    
    // tslint:disable-next-line: no-shadowed-variable
    const data = this.searchUserForm.value;
    this.search = data.search;
    // tslint:disable-next-line: triple-equals
    if (data.search == '') {
      this.payload['created_at'] = this.last_created_at;
      this.payload['search'] = '';
    } else {
      this.payload['created_at'] = this.last_created_at;
      this.payload['search'] = this.search;
    }
    this.getAllUserListing();
  }

  resetSearchForm() {
    this.searchUserForm.reset();
    this.payload = {
      created_at: '',
      search: ''
    };
    this.getAllUserListing();
  }

  //-----------unsubscribe function----------
  ngOnDestroy() {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }

}
