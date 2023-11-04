import React from "react";
import { Box, Text } from "@chakra-ui/react";

import ServiceList from "../components/services/ServiceList";

function Services() {
  return (
    <Box mt={3}>
      <Text pl={5} fontWeight={"semibold"}>
        My Services
      </Text>
      <ServiceList />
      <Text pl={5} fontWeight={"semibold"}>
        Explore Services
      </Text>
      <ServiceList />
    </Box>
  );
}

export default Services;
