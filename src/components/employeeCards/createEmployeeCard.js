
import { CrudContext } from "@/context/crudProvider";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  Stack,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { useContext, useState } from "react";


export const EmployeeCard = () => {
  const { schema } = useContext(CrudContext);
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
	const data = {
		name: name,
		surname: surname
	};

	const toast = useToast();
	const save = async () => {
		try {
			await schema.validate(data, { abortEarly: false });
			createUser();
		} catch (error) {

			for (let i = 0; i < error.errors.length; i++) {
				toast({
					title: 'Please, check the following:',
					description: error.errors[i],
					status: 'error',
					duration: 9000,
					isClosable: true
				});
			}

		}
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
            bg="black"
            borderRadius="lg"
            p={8}
            color="white"
          >
            <HStack spacing={5}>
              <FormLabel color="white">
                Create Employee
              </FormLabel>
              <FormControl
                isRequired
                borderColor="white"
              >
                <InputGroup>
                  <Input
                    type="text"
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="enter employee name"
                    _placeholder={{
                      color: "white"
                    }}
                    borderColor="white"
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
                    color: "white"
                  }}
                  borderColor="white"
                />
              </InputGroup>

              <InputGroup>
                <Input
                  type="date"
                  name="birthdate"
                  onChange={(e) => setBirthdate(e.target.value)}
                  placeholder="enter employee birthdate"
                  _placeholder={{
                    color: "white"
                  }}
                  borderColor="white"
                />
              </InputGroup>

              <Button
                width={"full"}
                type="submit"
                onClick={save}
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
