import { User } from './user.model';

export interface Bid {
  _id: string;
  bidder: User;
  bidPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
export interface Auction {
  _id: string;
  auctioner: User;
  productName: string;
  productDescription: string;
  manufactureDescription: string;
  bidblabPrice: number;
  retailPrice: number;
  bidFee: number;
  auctionId: number;
  closes: Date;
  bids: Bid[];
  createdAt: Date;
  updatedAt: Date;
  auctionPicture: string;
}
