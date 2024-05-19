import {Card, Button, HStack, CardHeader, CardBody, Container, Heading, SimpleGrid, CardFooter, Flex, Divider, Avatar} from '@chakra-ui/react'
import { useLoaderData } from "react-router-dom";
import { ViewIcon, EditIcon, CalendarIcon } from '@chakra-ui/icons'
import {Text} from '@chakra-ui/react'
import {Box} from '@chakra-ui/react'

export default function Dashboard() {
  const tasks = useLoaderData()

  return (
    <SimpleGrid columns={4} spacing={10} minChildWidth="300px">
      {tasks && tasks.map(task => (
        <Card key={task.id} borderTop="8px" borderColor="teal.400" bg="white">
          <CardHeader>
            <Flex alignItems="center" justifyItems="stretch">
              <Heading as="h3" size="sm">{task.max_amount}{task.curreny}</Heading>
              <Text paddingLeft="5px">by {task.company}</Text>
            </Flex>
          </CardHeader>

          <CardBody color="grey.500">
            <Heading as="h4">task.title</Heading>
            <Text textOverflow="elipsis">{task.description}</Text>
          </CardBody>

          <Divider borderColor="grey.200"></Divider>

          <CardFooter>
            <HStack>
              <Button variant="ghost" leftIcon={<ViewIcon />}>Watch</Button>
            </HStack>
          </CardFooter>
        </Card>
      ))}
    </SimpleGrid>
  )
}

export const tasksLoader = async() => {
  const res = await fetch('http://localhost:3000/test/runpy')

  return res.json()
}