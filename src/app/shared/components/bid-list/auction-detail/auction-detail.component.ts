import { Component, OnInit, Input } from '@angular/core';
import { Auction, Bid } from '../../../../shared/models/auction.model';
import { MatSnackBar } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from '../../../../shared/services/common.service';
import { SocketsService } from '../../../../shared/services/sockets.service';
import { BlockUIService } from '../../../../shared/services/block-ui.service';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthenticationService } from '../../../../shared/services/authentication.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { DialogService } from '../../../../shared/services/dialog.service';
import { AlertDialogComponent } from '../../../../shared/components/alert-dialog/alert-dialog.component';
import { environment } from '../../../../../environments/environment';
  
@Component({
  selector: 'app-auction-detail',
  templateUrl: './auction-detail.component.html',
  styleUrls: ['./auction-detail.component.scss']
})
export class AuctionDetailComponent implements OnInit {

  @Input() auction: Auction;
  serverUrl = environment.apiUrl;

  constructor() { }

  ngOnInit() {
  }

}
