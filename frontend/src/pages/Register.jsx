// frontend/src/pages/Register.jsx
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    console.log("Registering with:", user);
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="md" bg="white" maxW="md" mx="auto">
      <Heading size="md" mb={4}>Register</Heading>
      <Input name="name" placeholder="Full Name" mb={3} onChange={handleChange} />
      <Input name="email" type="email" placeholder="Email" mb={3} onChange={handleChange} />
      <Input name="password" type="password" placeholder="Password" mb={3} onChange={handleChange} />
      <Button colorScheme="green" onClick={handleRegister}>Register</Button>
    </Box>
  );
};

export default Register;
