import React from "react";
import { SimpleGrid } from "@chakra-ui/react";
import Service from "./Service";

function ServiceList() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      border={"1px solid #232323"}
      borderRadius={8}
      m={3}
      p={2}
    >
      <Service />
    </SimpleGrid>
  );
}

export default ServiceList;
