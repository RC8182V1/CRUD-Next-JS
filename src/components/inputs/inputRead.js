
import { Button, Flex, IconButton, Input, useColorModeValue } from '@chakra-ui/react';
import React, { useState } from 'react'

export const InputRead = (props) => {
    const name = props?.name;
    const id = props?.id;
    const [newName, setNewName] = useState("");
    const updateUser = props?.updateUser;
    const [mode, setMode] = useState(false);

    const updateMode = () => {
      setMode(!mode);
    };
  return (
    <Flex>
       <Flex>
       {mode === false && id === id ? (
                <Input
                  type="text"
                  name="name"
                  value={name}
                  onChange={() => {}}
                  placeholder="enter employee name"
                  _placeholder={{
                    color: useColorModeValue("white", "black"),
                  }}
                  borderColor={useColorModeValue("white", "black")}
                />
              ) : (
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
              )}
       </Flex>
        <Flex>
            {mode === false? <IconButton
                icon={<EditIcon />}
                w={6}
                h={6}
                onClick={() => {
                    updateMode();
                }}
                />: 
                <Flex> 
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
                        > Save
                        </Button>
                    </Flex> 
                    <IconButton
                        icon={<EditIcon />}
                        w={6}
                        h={6}
                        onClick={() => {
                            updateMode();
                        }}
                        />
                    <Flex>  
                    </Flex>     


              </Flex>}
 
        </Flex>
   </Flex>
  )
}
