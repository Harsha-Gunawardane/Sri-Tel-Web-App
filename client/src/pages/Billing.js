import React, { useEffect, useState } from "react";
import { Box, Flex, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import FeatureCard from "../components/home/FeatureCard";
import DataTable from "../components/DataTable";
import axios from "axios";


// private Integer id;
//     private Integer userId;
//     private Integer serviceId;
//     private Double amount;
//     private LocalDateTime paidTime;

const data = [
    {
        "id": 1,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 2,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 3,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 4,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 5,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 6,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 7,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    },
    {
        "id": 8,
        "userId": 1,
        "serviceId": 1,
        "amount": 100.0,
        "paidTime": "2021-08-22T11:19:00"
    }
]

const columns = ["Bill Id", "Service ID", "Service Name", "Ammount", "Date"];



function Billing() {

    const [bills, setBills] = useState([]);

    useEffect(() => {
        fetchBills();
    }, []);

    const fetchBills = async () => {
        const response = await axios.get("http://localhost:8765/api/v1/payment/all");
        setBills(response.data);
    }

    return (
        <Box mt={3} w={"100%"} px={5}>
            <Heading
                pl={5}
                fontWeight={"semibold"}
                size={"xl"}
                color={"#333"}
                textAlign={"center"}
            >
                Manage Your Bills
            </Heading>
            <Flex w="100%" justifyContent="center" mt={5}>
                <DataTable data={bills ? bills : data} columns={columns} />
            </Flex>
        </Box>
    );
}

export default Billing;
