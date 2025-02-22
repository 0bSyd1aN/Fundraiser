// frontend/src/pages/Login.jsx
import { Box, Input, Button, Heading } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    console.log("Logging in with:", credentials);
  };

  return (
    <Box p={6} boxShadow="md" borderRadius="md" bg="white" maxW="md" mx="auto">
      <Heading size="md" mb={4}>Login</Heading>
      <Input name="email" type="email" placeholder="Email" mb={3} onChange={handleChange} />
      <Input name="password" type="password" placeholder="Password" mb={3} onChange={handleChange} />
      <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
    </Box>
  );
};

export default Login;
