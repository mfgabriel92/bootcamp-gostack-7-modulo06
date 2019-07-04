import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
import Api from '../../service/api'
import { Container, Header, Avatar, Name, Bio, Repositories } from './styles'
import RepositoryInfo from '../../components/RepositoryInfo'

class User extends Component {
  state = {
    repositories: [],
    loading: true,
  }

  async componentDidMount() {
    const { navigation } = this.props
    const user = navigation.getParam('user')
    const { data } = await Api.get(`/users/${user.login}/repos`, {
      params: {
        sort: 'created',
      },
    })

    this.setState({ repositories: data, loading: false })
  }

  render() {
    const { navigation } = this.props
    const { repositories, loading } = this.state
    const user = navigation.getParam('user')

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name || user.login}</Name>
          <Bio>{user.bio || 'No bio'}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#7159c1" />
        ) : (
          <Repositories
            data={repositories}
            keyExtractor={repo => String(repo.id)}
            renderItem={({ item }) => <RepositoryInfo repository={item} />}
          />
        )}
      </Container>
    )
  }
}

export default User
