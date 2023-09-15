
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";


export const EmployeeCard = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [birthdate, setBirthdate] = useState("");

  const createUser = async () => {
    const res = await fetch("/api/addUser", {
      body: JSON.stringify({
        name: name,
        surname: surname,
        birthdate: birthdate
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };

  return (
    <Box
      borderRadius="lg"
      m={{ base: 5, md: 16, lg: 10 }}
      p={{ base: 5, lg: 16 }}
    >
      <VStack spacing={{ base: 4, md: 8, lg: 20 }}>
        <Stack
          spacing={{ base: 4, md: 8, lg: 20 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            bg={useColorModeValue("black", "gray.100")}
            borderRadius="lg"
            p={8}
            color={useColorModeValue("white", "black")}
            shadow="base"
          >
            <HStack spacing={5}>
              <FormLabel color={useColorModeValue("white", "black")}>
                Create Employee
              </FormLabel>
              <FormControl
                isRequired
                borderColor={useColorModeValue("white", "black")}
              >
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter employee name"
                    _placeholder={{
                      color: useColorModeValue("white", "black"),
                    }}
                    borderColor={useColorModeValue("white", "black")}
                  />
                </InputGroup>
              </FormControl>

              <InputGroup>
                <Input
                  type="text"
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="enter employee surname"
                  _placeholder={{
                    color: useColorModeValue("white", "black"),
                  }}
                  borderColor={useColorModeValue("white", "black")}
                />
              </InputGroup>

              <InputGroup>
                <Input
                  type="date"
                  name="birthdate"
                  onChange={(e) => setBirthdate(e.target.value)}
                  placeholder="enter employee birthdate"
                  _placeholder={{
                    color: useColorModeValue("white", "black"),
                  }}
                  borderColor={useColorModeValue("white", "black")}
                />
              </InputGroup>

              <Button
                width={"full"}
                type="submit"
                onClick={createUser}
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Create Emoloyee
              </Button>
            </HStack>
          </Box>
        </Stack>
      </VStack>
    </Box>
  );
};
