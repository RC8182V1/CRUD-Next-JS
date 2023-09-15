import { EmployeeCard } from "@/components/employeeCards/createEmployeeCard";
import { PrintAllEmployees } from "@/components/employeeCards/printAllEmployees";
import { Box, Flex } from "@chakra-ui/react";


export default function Home() {

  return (
    <Flex
      className="main-container"
      justifyContent={"center"}
      flexDir={"column"}
    >
      <EmployeeCard />
      <Flex>
        <PrintAllEmployees />
      </Flex>
    </Flex>
  );
}
