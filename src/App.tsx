import { Box, Center, Stack, Text, StackDivider, Image } from "@chakra-ui/react";
import moment from "moment";
import image from "./assets/image-equilibrium.jpg";
import iconEthereum from "./assets/icon-ethereum.svg";
import iconClock from "./assets/icon-clock.svg";
import iconView from "./assets/icon-view.svg";
import avatar from "./assets/image-avatar.png";
import "./App.css";

const cardInformation = {
	id: 3429,
	title: "Equilibrium",
	description: "Our equilibrium collection promotes balance and calm.",
	price: 0.041,
	creatorName: "Jules Wyvern",
	creatorAvatar: avatar,
	dueDate: moment().add(4, "days").startOf("day"),
};

const getDaysLeft = (dueDate: moment.Moment) => {
	const daysLeft = dueDate.diff(moment(), "days");
	return daysLeft > 0 ? daysLeft : 0;
};

const hoverTextStyle = { color: "primary", cursor: "pointer", transition: "all 0.3s ease-in-out" };

function App() {
	return (
		<Box w="100vw" h="100vh" bgColor="bgDark" color="white">
			<Center h="100vh">
				<Stack bgColor="bgLight" w="80" p={6} borderRadius={12} gap={4} shadow="2xl">
					<Stack>
						<Image src={image} borderRadius={8} alt="equilibrium" />
					</Stack>
					<Stack>
						<Stack divider={<StackDivider borderColor="gray.600" p={1} />}>
							<Stack>
								<Text fontSize="2xl" fontWeight="semibold" _hover={hoverTextStyle}>
									{cardInformation.title} #{cardInformation.id}
								</Text>
								<Text fontSize="md" fontWeight="thin" color="secondary">
									{cardInformation.description}
								</Text>
								<Stack direction="row" justifyContent="space-between" pt={2}>
									<Stack direction="row" alignItems="center">
										<Image src={iconEthereum} alt="ethereum" w="3" h="5" />
										<Text color="primary" fontWeight="500">
											{cardInformation.price} ETH
										</Text>
									</Stack>
									<Stack direction="row" alignItems="center">
										<Image src={iconClock} alt="ethereum" w="4" h="4" />
										<Text color="secondary">{getDaysLeft(cardInformation.dueDate)} days left</Text>
									</Stack>
								</Stack>
							</Stack>
							<Stack direction="row" alignItems="center" fontWeight="thin" pt={3}>
								<Image src={cardInformation.creatorAvatar} alt="avatar" w="8" h="8" border="1px" borderRadius="100%" />
								<Text color="secondary">Creation of</Text>
								<Text _hover={hoverTextStyle}>{cardInformation.creatorName}</Text>
							</Stack>
						</Stack>
					</Stack>
				</Stack>
			</Center>
		</Box>
	);
}

export default App;
