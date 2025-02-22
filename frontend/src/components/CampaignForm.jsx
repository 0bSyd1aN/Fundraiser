// frontend/src/components/CampaignForm.jsx
import { useState } from "react";
import { Box, Input, Textarea, Button, Heading } from "@chakra-ui/react";

const CampaignForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    goal: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Campaign Created:", formData);
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="md" bg="white">
      <Heading size="md" mb={4}>Create a Campaign</Heading>
      <Input
        name="title"
        placeholder="Campaign Title"
        mb={3}
        onChange={handleChange}
      />
      <Textarea
        name="description"
        placeholder="Campaign Description"
        mb={3}
        onChange={handleChange}
      />
      <Input
        name="goal"
        placeholder="Fundraising Goal ($)"
        type="number"
        mb={3}
        onChange={handleChange}
      />
      <Button colorScheme="blue" onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default CampaignForm;
