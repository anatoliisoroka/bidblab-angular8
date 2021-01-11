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
import { BidService } from '../bid.service';

@Component({
  selector: 'app-auction-grid',
  templateUrl: './auction-grid.component.html',
  styleUrls: ['./auction-grid.component.scss']
})
export class AuctionGridComponent implements OnInit {

  @Input() auction: any;
  serverUrl = environment.apiUrl;

  constructor(
    private bidService: BidService,
  ) { }

  ngOnInit() {
  }

  displayDetail(){
    this.bidService.detailAuction = this.auction;
    this.bidService.detailAuction.display = true;
  }
  
  lessDetail(){
    this.bidService.detailAuction = '';
  }
}

