import { ChakraProvider, theme } from "@chakra-ui/react";
import HotDeals from "./components/HotDeals";
import Layout from "./components/Layout";

export const App = () => (
	<ChakraProvider theme={theme}>
		<Layout>
			<HotDeals />
		</Layout>
	</ChakraProvider>
);
