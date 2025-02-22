// frontend/src/pages/CreateCampaign.jsx
import { Container } from "@chakra-ui/react";
import CampaignForm from "../components/CampaignForm";

const CreateCampaign = () => {
  return (
    <Container maxW="container.md" py={10}>
      <CampaignForm />
    </Container>
  );
};

export default CreateCampaign;
