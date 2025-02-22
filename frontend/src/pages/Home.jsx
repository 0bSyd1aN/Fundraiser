// frontend/src/pages/Home.jsx
import { Box, Heading, Text, Button, Image, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const MotionBox = motion(Box);

const Home = () => {
  return (
    <MotionBox
      textAlign="center"
      p={10}
      bgGradient="linear(to-r, blue.400, purple.500)"
      color="white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading size="2xl">Empower Change, Fund Dreams!</Heading>
      <Text fontSize="xl" mt={4}>
        Start your journey in helping others by funding or creating a campaign.
      </Text>
      <Stack direction="row" spacing={4} justify="center" mt={6}>
        <Button as={Link} to="/campaigns" colorScheme="teal" size="lg">
          View Campaigns
        </Button>
        <Button as={Link} to="/create" colorScheme="green" size="lg">
          Start a Campaign
        </Button>
      </Stack>
    </MotionBox>
  );
};

export default Home;
