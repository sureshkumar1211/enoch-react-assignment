export interface DealItem {
	imageUrl: string;
	imageAlt: string;
	bidPrice: string;
	dealType: DealType;
	name: string;
	dealId: string;
	dealEndsIn: string;
	likeCount: number;
	liked: boolean;
}

export enum DealType {
	SALE = "Sale",
	AUCTION = "Auction",
}
