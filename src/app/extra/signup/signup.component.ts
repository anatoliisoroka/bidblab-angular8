import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '../../shared/services/dialog.service';
import { SignupDialogComponent } from '../../shared/components/signup-dialog/signup-dialog.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  private friendEmail: string = '';

  constructor(
    private dialogService: DialogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.has('friendEmail')) {
        this.friendEmail = params.get('friendEmail');
        setTimeout(() => this.openSignup(this.friendEmail) );
      }
    });
  }

  openSignup(friendEmail){
    this.dialogService.open(SignupDialogComponent, {
        data: {
          friendEmail
        }
      }).afterClosed().subscribe(result => {
        this.router.navigateByUrl('/');
      })
  }

}
