import React from "react";
import { Box, Container, Image } from "@chakra-ui/react";

const Layout: React.FC<any> = ({ children }) => {
	return (
		<Box bg={"#051321"} minHeight="100vh">
			<Container maxW="6xl" p={5}>
				{/* navbar */}
				<Box as="nav" ml="6">
					<Image src="https://cdn.enochdev.com/urgent-fury-assets/enochweb-logo.svg"></Image>
				</Box>
				{/* main */}
			</Container>

			{/* main */}
			<Container maxW="6xl" p={5}>
				<Box as="main">
					{/* CardItems */}
					{children}
				</Box>
			</Container>
		</Box>
	);
};

export default Layout;
