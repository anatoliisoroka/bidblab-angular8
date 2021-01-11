import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserGuard } from '../shared/guards/user.guard';
import { AccountComponent } from './account.component';
import { SharedModule } from '../shared/shared.module';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FollowingComponent } from './following/following.component';
import { MyquestionsComponent } from './myquestions/myquestions.component';
import { MyanswersComponent } from './myanswers/myanswers.component';
import { CreditsComponent } from './credits/credits.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { FollowersComponent } from './followers/followers.component';
import { MybidsComponent } from './mybids/mybids.component';
import { MailboxComponent } from './mailbox/mailbox.component';

const routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: 'following', component: FollowingComponent },
      { path: 'followers', component: FollowersComponent },
      { path: 'mybids', component: MybidsComponent },
      { path: 'myquestions', component: MyquestionsComponent },
      { path: 'myanswers', component: MyanswersComponent },
      { path: 'credits', component: CreditsComponent },
      { path: 'editprofile', component: ProfileComponent },
      { path: 'viewprofile', component: ViewProfileComponent },
      { path: 'mailbox', component: MailboxComponent },
      { path: '**', redirectTo: '' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatIconModule,
    MatSnackBarModule,
    MatCardModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatPaginatorModule,
    MatDividerModule,
    PerfectScrollbarModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AccountComponent,
    FollowingComponent,
    MyquestionsComponent,
    MyanswersComponent,
    CreditsComponent,
    ProfileComponent,
    ViewProfileComponent,
    FollowersComponent,
    MybidsComponent,
    MailboxComponent
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }

