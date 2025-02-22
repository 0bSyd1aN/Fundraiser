// frontend/src/components/Footer.jsx
import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box textAlign="center" p={4} bg="gray.700" color="white" mt={10}>
      <Text>&copy; {new Date().getFullYear()} Fundraiser. All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;
