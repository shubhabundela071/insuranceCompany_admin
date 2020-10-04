

import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UtilityService } from 'app/shared/utility/utility.service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { FileUploadService } from 'app/shared/services/file-upload.service';

@Component({
  selector: 'app-faq',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {
  dashboard: any;
  mode: string;
  success: any;
  itemToEdit: any;
 public editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    minHeight: '15rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    toolbarPosition: 'top'
  };

  @ViewChild('myInput')
  myInputVariable: ElementRef;
  constructor(
    private confirmationService: ConfirmationService,
    private utilityService: UtilityService,
    private uploader: FileUploadService,
    private messageService: MessageService,
  ) {}


  ngOnInit() {
    this.getDashboardData();
  }
  onBasicUpload(e) {
    console.log(e);
  }
   getDashboardData() {

  }

}

