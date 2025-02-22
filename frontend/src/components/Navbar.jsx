// frontend/src/components/Navbar.jsx
import { Box, Flex, Button, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const Navbar = () => {
  return (
    <MotionBox
      as="nav"
      bg="blue.500"
      p={4}
      boxShadow="lg"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Flex maxW="1200px" mx="auto" align="center">
        <Heading size="lg" color="white">Fundraiser</Heading>
        <Spacer />
        <Button as={Link} to="/" colorScheme="teal" variant="outline" mr={2}>
          Home
        </Button>
        <Button as={Link} to="/campaigns" colorScheme="teal" mr={2}>
          Campaigns
        </Button>
        <Button as={Link} to="/create" colorScheme="green">
          Create Campaign
        </Button>
      </Flex>
    </MotionBox>
  );
};

export default Navbar;
