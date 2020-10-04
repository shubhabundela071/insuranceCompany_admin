import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'app/shared/utility/utility.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { CarService } from 'app/shared/services/car.service';
import { FileUploadService } from 'app/shared/services/file-upload.service';
import { takeUntil } from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-car-listing',
  templateUrl: './car-listing.component.html',
  styleUrls: ['./car-listing.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: []
})
export class CarListingComponent implements OnInit, OnDestroy {

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
    private CarService: CarService,
    private uploader: FileUploadService,
    private messageService: MessageService
  ) { }

  searchUserForm = new FormGroup({
    search: new FormControl(''),
    filter: new FormControl('')
  });

  ngOnInit() {
    this.getAllCarListing();
  }

  // User list show
  getAllCarListing() {
    this.utilityService.loaderStart();
    this.CarService.isCarRegistered(this.payload).pipe(takeUntil(this._unsubscribe)).subscribe(
      (success: any) => {
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
    this.getAllCarListing();
  }
//for Search
  resetSearchForm() {
    this.searchUserForm.reset();
    this.payload = {
      created_at: '',
      search: ''
    };
    this.getAllCarListing();
  }

  //-----------unsubscribe function----------
  ngOnDestroy() {
    this._unsubscribe.next(true);
    this._unsubscribe.complete();
  }

}
