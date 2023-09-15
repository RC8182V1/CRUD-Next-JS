import { EditIcon } from '@chakra-ui/icons';
import { Button, Flex, IconButton, Input, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export const InputUpdate = (props) => {
    const newName = props?.newName;
    const name = props?.name;
    const updateUser = props?.updateUser;
    const setNewName = props?.setNewName;
    const updateMode = props?.updateMode;


  return (
    <Flex>
        <Flex>
        <Input
            type="text"
            name="name"
            onChange={(e) => setNewName(e.target.value)}
            value={newName }
            placeholder={name}
            _placeholder={{
            color: useColorModeValue("white", "black"),
            }}
            borderColor={useColorModeValue("white", "black")}
        />
        </Flex>

        <Flex>
        <Button
                width={"full"}
                type="submit"
                onClick={updateUser}
                colorScheme="blue"
                bg="blue.400"
                color="white"
                _hover={{
                  bg: "blue.500",
                }}
              >
                Save
              </Button>
        </Flex>
    </Flex>
  )
}
