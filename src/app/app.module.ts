import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { HomePaintingFormPage } from '../pages/home-painting-form/home-painting-form';
import { HomePlumbingFormPage } from '../pages/home-plumbing-form/home-plumbing-form';
import { HomeRenovateFormPage } from '../pages/home-renovate-form/home-renovate-form';
import { PaymentAndContactPage } from '../pages/payment-and-contact/payment-and-contact';
import { SellerListPage } from '../pages/seller-list/seller-list';
import { SupportPage } from '../pages/support/support';
import { MapPage } from '../pages/map/map';
import { HomePage } from '../pages/home/home';
import { PaymentPage} from '../pages/payment/payment';
import { ConfirmpayPage } from '../pages/confirmpay/confirmpay';
import { DealsummaryPage } from '../pages/dealsummary/dealsummary';
import{ AgreementPage } from  '../pages/agreement/agreement'
import{ StatusPage } from  '../pages/status/status'
import { RequirementPage } from '../pages/requirement/requirement';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomePaintingFormPage,
    HomePlumbingFormPage,
    HomeRenovateFormPage,
    PaymentAndContactPage,
    SellerListPage,
    MapPage,
    HomePage,
    PaymentPage,
    ConfirmpayPage,
    DealsummaryPage,
    AgreementPage,
    StatusPage,
    RequirementPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: TutorialPage, name: 'Tutorial', segment: 'tutorial' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: HomePaintingFormPage, name: 'HomePaintingFormPage', segment: 'HomePaintingFormPage' },
        { component: HomePlumbingFormPage, name: 'HomePlumbingFormPage', segment: 'HomePlumbingFormPage' },
        { component: HomeRenovateFormPage, name: 'HomeRenovateFormPage', segment: 'HomeRenovateFormPage' },
        { component: PaymentAndContactPage, name: 'PaymentAndContactPage', segment: 'PaymentAndContactPage' },
        { component: RequirementPage, name: 'RequirementPage', segment: 'RequirementPage' },
        { component: StatusPage, name: 'StatusPage', segment: 'StatusPage' },
        { component: SellerListPage, name: 'SellerListPage', segment: 'SellerListPage' },
        { component: MapPage, name: 'map', segment: 'map' },
        { component: HomePage, name: 'HomePage', segment: 'HomePage' }
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AccountPage,
    LoginPage,
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    TutorialPage,
    SupportPage,
    HomePaintingFormPage,
    HomePlumbingFormPage,
    HomeRenovateFormPage,
    PaymentAndContactPage,
    SellerListPage,
    MapPage,
    HomePage,
    PaymentPage,
    ConfirmpayPage,
    DealsummaryPage,
    AgreementPage,
    StatusPage,
    RequirementPage

  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen,
  ]
})
export class AppModule { }
