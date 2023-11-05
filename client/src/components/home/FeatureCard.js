import React from "react";
import {
    Card,
    CardHeader,
    Heading,
    CardBody,
    Text,
    CardFooter,
    Button,
    Flex
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

function FeatureCard(props) {

    const {title, description, buttonText, url, ext=false } = props;

    const navigate = useNavigate()

    const handleButtonClick = () => {
        window.location.href = url;
    };


    const handleClick = () => {
        if(ext) {
            handleButtonClick()
        } else {
            navigate(url)
        }
    }

    return (
        <Card>
            <CardHeader>
                <Heading size="md" color={"#333"}>
                    {title}
                </Heading>
            </CardHeader>
            <CardBody>
                <Text>{description}</Text>
            </CardBody>
            <CardFooter>
                <Flex justifyContent={"right"} w={"100%"}>
                    <Button
                        onClick={handleClick}
                        colorScheme={"blue"}
                    >
                        {buttonText}
                    </Button>
                </Flex>
            </CardFooter>
        </Card>
    );
}

export default FeatureCard;
