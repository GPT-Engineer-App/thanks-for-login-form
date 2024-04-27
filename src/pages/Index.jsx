// Complete the Index page component here
// Use chakra-ui and react-icons for UI components and icons
import { Box, Button, FormControl, FormLabel, Input, Image, Text, VStack } from "@chakra-ui/react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginStatus, setLoginStatus] = useState("");

  const handleLogin = () => {
    setLoginStatus("Thanks for Logging In!");
  };

  return (
    <VStack spacing={4} align="center" justify="center" height="100vh">
      <Image src={email ? "https://images.unsplash.com/photo-1505916287987-93face5dfed2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFyJTIwbG9va2luZyUyMGF0JTIwZW1haWx8ZW58MHx8fHwxNzE0MTk4NDczfDA&ixlib=rb-4.0.3&q=80&w=1080" : "https://images.unsplash.com/photo-1495538411606-c9efab92bcbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWFyJTIwbG9va2luZyUyMGF3YXl8ZW58MHx8fHwxNzE0MTk4NDc0fDA&ixlib=rb-4.0.3&q=80&w=1080"} boxSize="150px" objectFit="cover" alt="Bear Reaction" />
      <FormControl>
        <FormLabel htmlFor="email">Email or Username</FormLabel>
        <Input id="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email or username" />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input id="password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" onFocus={() => setShowPassword(true)} onBlur={() => setShowPassword(false)} />
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </FormControl>
      <Button colorScheme="blue" onClick={handleLogin}>
        Submit
      </Button>
      {loginStatus && <Text>{loginStatus}</Text>}
    </VStack>
  );
};

export default Index;
