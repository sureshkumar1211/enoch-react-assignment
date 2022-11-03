import React from "react";
import { DealItem, DealType } from "./types";
import Deal from "./Deal";
import { Box } from "@chakra-ui/react";

const data: DealItem[] = [
	{
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Enach Item",
		bidPrice: "$260",
		dealEndsIn: "11:22:22s",
		name: "Enach Citizian",
		dealId: "#BB/626625",
		dealType: DealType.AUCTION,
		likeCount: 90,
		liked: true,
	},
	{
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Enach Item",
		bidPrice: "$260",
		dealEndsIn: "11:22:22s",
		name: "Enach Citizian",
		dealId: "#BB/626626",
		dealType: DealType.SALE,
		likeCount: 70,
		liked: false,
	},
	{
		imageUrl: "https://bit.ly/2Z4KKcF",
		imageAlt: "Enach Item",
		bidPrice: "$260",
		dealEndsIn: "11:22:22s",
		name: "Enach Citizian",
		dealId: "#BB/626627",
		dealType: DealType.AUCTION,
		likeCount: 70,
		liked: true,
	},
];
const HotDeals: React.FC = () => {
	const renderHotDeals = () => {
		return data.map((deal) => <Deal {...deal} key={deal.dealId} />);
	};
	return (
		<Box display={"flex"} flexWrap={"wrap"}>
			{renderHotDeals()}
		</Box>
	);
};

export default HotDeals;
