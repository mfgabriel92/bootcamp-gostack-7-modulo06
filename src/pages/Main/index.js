import React, { Component } from 'react'
import { Keyboard } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Container, Form, Input, Button, List } from './styles'
import Api from '../../service/api'
import UserInfo from '../UserInfo'

class Main extends Component {
  state = {
    user: '',
    users: [],
  }

  handleOnSubmit = async () => {
    const { user, users } = this.state

    if (user !== '') {
      const response = await Api.get(`/users/${user}`)
      const data = {
        id: response.data.id,
        name: response.data.name,
        login: response.data.login,
        bio: response.data.bio,
        avatar: response.data.avatar_url,
      }

      this.setState({ users: [...users, data] })
    }

    Keyboard.dismiss()
  }

  render() {
    const { user, users } = this.state

    return (
      <Container>
        <Form>
          <Input
            value={user}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Add user"
            onChangeText={text => this.setState({ user: text })}
            returnKeyType="send"
            onSubmitEditing={this.handleOnSubmit}
          />
          <Button onPress={this.handleOnSubmit}>
            <Icon name="add" size={18} color="#FFF" />
          </Button>
        </Form>

        <List
          data={users}
          keyExtractor={u => u.id}
          renderItem={({ item }) => <UserInfo user={item} />}
        />
      </Container>
    )
  }
}

export default Main
