import React from "react";
import {
  Card,
  CardHeader,
  Heading,
  CardBody,
  Text,
  CardFooter,
  Button,
} from "@chakra-ui/react";

function Service() {
  return (
    <Card>
      <CardHeader>
        <Heading size="md" color={"#333"}>
          {"Home broadband"}
        </Heading>
      </CardHeader>
      <CardBody>
        <Text>View a summary of all your customers over the last month.</Text>
      </CardBody>
      <CardFooter>
        <Button>View</Button>
      </CardFooter>
    </Card>
  );
}

export default Service;
