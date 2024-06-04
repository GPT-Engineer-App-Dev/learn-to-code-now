import { Box, Button, Container, Flex, Heading, HStack, Image, Stack, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="blue.600" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">CodeLearn</Heading>
        <HStack spacing={8}>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </HStack>
      </Flex>

      {/* Hero Section */}
      <Flex
        as="section"
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="center"
        bg="gray.100"
        py={20}
        px={8}
        textAlign={{ base: "center", md: "left" }}
      >
        <VStack spacing={4} maxW="lg">
          <Heading as="h1" size="2xl">
            Learn to Code with CodeLearn
          </Heading>
          <Text fontSize="lg">
            Join our community of learners and start your journey to becoming a coding expert.
          </Text>
          <Button colorScheme="blue" size="lg">
            Get Started
          </Button>
        </VStack>
        <Image
          src="https://via.placeholder.com/500"
          alt="Hero Image"
          boxSize={{ base: "100%", md: "500px" }}
          objectFit="cover"
          mt={{ base: 8, md: 0 }}
          ml={{ md: 8 }}
        />
      </Flex>

      {/* Featured Courses Section */}
      <Box as="section" py={20} px={8}>
        <Heading as="h2" size="xl" textAlign="center" mb={10}>
          Featured Courses
        </Heading>
        <Flex wrap="wrap" justify="center" spacing={8}>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Course 1" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Course Title 1
              </Heading>
              <Text mb={4}>Course description goes here. Learn the basics of coding with this introductory course.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Course 2" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Course Title 2
              </Heading>
              <Text mb={4}>Course description goes here. Dive deeper into advanced coding topics.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
          </Box>
          <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
            <Image src="https://via.placeholder.com/300" alt="Course 3" />
            <Box p={6}>
              <Heading as="h3" size="md" mb={2}>
                Course Title 3
              </Heading>
              <Text mb={4}>Course description goes here. Master coding with our expert-led courses.</Text>
              <Button colorScheme="blue">Learn More</Button>
            </Box>
          </Box>
        </Flex>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="blue.600" color="white" py={10} px={8}>
        <Flex justify="space-between" align="center" wrap="wrap">
          <Text>&copy; {new Date().getFullYear()} CodeLearn. All rights reserved.</Text>
          <HStack spacing={4}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </HStack>
          <HStack spacing={4}>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </HStack>
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;