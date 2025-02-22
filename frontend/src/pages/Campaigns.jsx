// frontend/src/pages/Campaigns.jsx
import { SimpleGrid, Container, Heading } from "@chakra-ui/react";
import CampaignCard from "../components/CampaignCard";

const dummyCampaigns = [
  { title: "Save the Rainforests", description: "Help us plant more trees!", goal: 5000, currentAmount: 2000 },
  { title: "Medical Fund for John", description: "John needs urgent surgery.", goal: 10000, currentAmount: 4500 },
];

const Campaigns = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Heading mb={6}>Active Campaigns</Heading>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {dummyCampaigns.map((campaign, index) => (
          <CampaignCard key={index} {...campaign} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Campaigns;
