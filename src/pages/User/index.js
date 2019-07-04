import React, { Component } from 'react'

class User extends Component {
  render() {
    const { navigation } = this.props
    const user = navigation.getParam('user')
    return <></>
  }
}

export default User
