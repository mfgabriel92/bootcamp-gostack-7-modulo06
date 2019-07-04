import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, Button } from './styles'

const Main = () => {
  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Add user"
        />
        <Button>
          <Icon name="add" size={18} color="#FFF" />
        </Button>
      </Form>
    </Container>
  )
}

export default Main
