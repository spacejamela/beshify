import { Card, CardBody, CardHeader, Flex, Text } from '@chakra-ui/react';
import { RxCopy } from "react-icons/rx";

// eslint-disable-next-line react/prop-types, no-unused-vars
const CardComponent = ({ text, generateText, copyText }) => {
    return (
        <Card>
            <CardHeader bg={"#5f7adb"} color={"white"} >
                <Flex height={2} alignItems={"center"} justifyContent={'space-between'}>
                    <Text fontSize={"sm"}>
                        Generated Text
                    </Text>
                    <RxCopy onClick={() => copyText()} />
                </Flex>

            </CardHeader>
            <CardBody maxW={{ base: "340px", md: "450px", lg: "600px" }}>
                <Text>{generateText()}</Text>
            </CardBody>
        </Card>
    )
}

export default CardComponent