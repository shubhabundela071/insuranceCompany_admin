
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
import { DragulaModule } from 'ng2-dragula';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from './layouts/content/content-layout.component';
import { FullLayoutComponent } from './layouts/full/full-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './shared/services/auth.service';

import { TokenInterceptorService } from './shared/services/token-interceptor.service';
import * as $ from 'jquery';
import { MessagingService } from './shared/services/messaging.service';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'environments/environment';
import { AuthModule } from './auth/auth.module';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function tokenGetter() {
    return localStorage.getItem('token');
}

// import { CustomFormsModule } from 'ng5-validation';
@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        ContentLayoutComponent

    ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule.forRoot(),
        DragulaModule.forRoot(),
        HttpClientModule,
        ToastrModule.forRoot(),
        NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: '12345'
        }),
        FormsModule, ReactiveFormsModule,
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFireMessagingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AuthModule,
        JwtModule.forRoot({
            config: {
                tokenGetter: tokenGetter,
                whitelistedDomains: ['http://localhost:4200/']
            }
        }),
    ],
    providers: [{
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    },
        AuthService,
        TokenInterceptorService,
        JwtHelperService,
        MessagingService,
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
