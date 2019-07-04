import React, { Component } from 'react'
import Api from '../../service/api'

class User extends Component {
  state = {
    repsitories: [],
  }

  async componentDidMount() {
    const { navigation } = this.props
    const user = navigation.getParam('user')
    const { data } = await Api.get(`/users/${user.login}/repos`)

    this.setState({ repsitories: data })
  }

  render() {
    const { navigation } = this.props
    const user = navigation.getParam('user')
    return <></>
  }
}

export default User
