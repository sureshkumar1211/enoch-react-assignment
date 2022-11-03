import React from "react";
import { Box, Image, Button, Badge } from "@chakra-ui/react";
import { HeartIcon } from "@heroicons/react/24/solid";
import { DealItem, DealType } from "../types";

const Deal: React.FC<DealItem> = ({
	dealType,
	imageAlt,
	imageUrl,
	bidPrice,
	dealEndsIn,
	dealId,
	name,
	likeCount,
	liked,
}) => {
	return (
		<Box
			color={"white"}
			width={[
				"100%", // 0-30em
				"50%", // 30em-48em
				"50%",
				"33%",
			]}
			borderRadius={"sm"}
			overflow="hidden"
		>
			<Box ml="6" mt="6" p="6" bg={"#0b2238"}>
				<Box pb="5" display={"flex"} justifyContent={"space-between"}>
					<Badge
						borderRadius="full"
						bgColor={"transparent"}
						textTransform={"capitalize"}
						borderWidth={"1px"}
						fontSize={"xs"}
						px="3"
						py="1"
						borderColor={"#666884"}
						color="#666884"
					>
						Hot deal
					</Badge>
					<Badge
						borderRadius="full"
						bgColor={"transparent"}
						borderWidth={"1px"}
						fontSize={"xs"}
						px="3"
						py="1"
						borderColor={dealType === DealType.AUCTION ? "#822c1a" : "#411c94"}
						color={"white"}
					>
						{dealType}
					</Badge>
				</Box>
				<Image src={imageUrl} alt={imageAlt} borderRadius={"sm"} />
				<Box display="flex" flexDirection={"column"}>
					<Box display="flex" pt={"2"} justifyContent={"space-between"} alignItems={"center"}>
						<Box mt="1" flexBasis={"60%"}>
							<Box fontWeight={"bold"} mb="1" as="h4" color={"#c7ccd0"}>
								{dealId}
							</Box>
							<Box as="h6" fontSize={"14px"} color={"#3f78b3"}>
								{name}
							</Box>
						</Box>
						<Box display={"flex"} alignItems="center">
							<Box as="span" cursor={"pointer"}>
								<HeartIcon width={"20px"} height="20px" color={liked ? "#ff0080" : "#7d8289"} />
							</Box>
							<Box as="span" ml={"2"} color={liked ? "#fff" : "#7d8289"}>
								{likeCount}
							</Box>
						</Box>
					</Box>
					<Box display="flex" pt={"2"} justifyContent={"space-between"} alignItems={"center"}>
						<Box display={"flex"} flexDir="column" borderWidth={"1px"} borderColor={"#172e50"} p="2">
							<Box fontWeight={"bold"} textTransform="uppercase" mb="1" as="h6" fontSize={"14px"} color={"#00be00"}>
								Highest Bid
							</Box>
							<Box as="h6" fontSize={"14px"} color={"#fff"}>
								{bidPrice}
							</Box>
						</Box>
						<Box display={"flex"} flexDir="column" borderWidth={"1px"} borderColor={"#2f2731"} p="2">
							<Box fontWeight={"bold"} textTransform="uppercase" mb="1" as="h6" fontSize={"14px"} color={"#7095ba"}>
								Auction ends in
							</Box>
							<Box as="h6" fontSize={"14px"} color={"#fff"} letterSpacing="widest">
								{dealEndsIn}
							</Box>
						</Box>
					</Box>
					<Button
						_hover={{
							backgroundColor: "#7ba3c9",
							transition: "ease",
						}}
						textTransform={"uppercase"}
						borderRadius={"sm"}
						mt="6"
						bgColor={"#0077ff"}
					>
						Bid now
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default Deal;
