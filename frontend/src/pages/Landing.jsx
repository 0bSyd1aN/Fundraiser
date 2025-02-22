// frontend/src/pages/Landing.jsx
import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <Box
        h="100vh"
        bgGradient="linear(to-r, teal.500, blue.500)"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <VStack spacing={6} textAlign="center">
          <Heading color="white" size="2xl">
            Welcome to Fundraiser
          </Heading>
          <Text color="whiteAlpha.800" fontSize="lg">
            Start your journey to make a difference.
          </Text>
          <Button colorScheme="teal" size="lg" onClick={() => navigate("/login")}>
            Sign In
          </Button>
          <Button colorScheme="blue" size="lg" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </motion.div>
  );
};

export default Landing;
