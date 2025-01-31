"use client";

import {
  Box,
  ButtonGroup,
  Button,
  Flex,
  Stepper,
  Step,
  StepIndicator,
  StepTitle,
  StepNumber,
  StepDescription,
  StepSeparator,
  StepStatus,
  StepIcon,
  useSteps,
  Card,
  CardBody,
  Heading,
  Stack,
  Checkbox,
} from "@chakra-ui/react";

import { useState } from "react";
import Form from "./components/Form";

export default function App() {
  const steps = [
    { title: "Register", description: "Info" },
    { title: "Payment", description: "Review" },
  ];

  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  const [name, setName] = useState("");
  const [institution, setInstitution] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  return (
    <>
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form"
      >
        {/*//progress-----------------------------*/}
        <Stepper size="lg" index={activeStep} mb={10}>
          {steps.map((step, index) => (
            <Step key={index}>
              <StepIndicator>
                <StepStatus
                  complete={<StepIcon />}
                  incomplete={<StepNumber />}
                  active={<StepNumber />}
                />
              </StepIndicator>

              <Box flexShrink="0">
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </Box>

              <StepSeparator />
            </Step>
          ))}
        </Stepper>

        <Form
          country={country}
          institution={institution}
          name={name}
          email={email}
          setEmail={setEmail}
          setCountry={setCountry}
          setInstitution={setInstitution}
          setName={setName}
        />

        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              {/*--------------------Back button-----------------------*/}
              <Button
                onClick={() => {
                  setActiveStep(activeStep - 1);
                }}
                display={activeStep === 1 ? "" : "none"}
                colorScheme="blue"
                variant="outline"
                w="7rem"
                mr="5%"
              >
                Back
              </Button>

              {/*-------------------Next button-----------------------*/}
              <Button
                display={activeStep === 0 ? "" : "none"}
                onClick={() => {}}
                colorScheme="blue"
                variant="solid"
              >
                Find Jobs
              </Button>
            </Flex>
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}
