// frontend/src/components/CampaignCard.jsx
import { Box, Heading, Text, Button, Progress, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CampaignCard = ({ title, description, goal, currentAmount }) => {
  const progressPercent = (currentAmount / goal) * 100;

  return (
    <MotionBox
      bg="white"
      p={4}
      borderRadius="lg"
      boxShadow="md"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <Heading size="md">{title}</Heading>
      <Text mt={2} noOfLines={2}>
        {description}
      </Text>
      <Progress colorScheme="green" value={progressPercent} mt={3} />
      <Text mt={2} fontSize="sm">
        Raised: ${currentAmount} / ${goal}
      </Text>
      <Button mt={3} colorScheme="blue" width="full">
        Donate Now
      </Button>
    </MotionBox>
  );
};

export default CampaignCard;
