import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  User,
  Avatar,
  Name,
  Bio,
  ProfileButton,
  ProfileButtonText,
} from './styles'

class UserInfo extends Component {
  render() {
    const { user } = this.props

    return (
      <User>
        <Avatar source={{ uri: user.avatar }} />
        <Name>{user.name}</Name>
        <Bio>{user.bio}</Bio>
        <ProfileButton onPress={() => {}}>
          <ProfileButtonText>Profile</ProfileButtonText>
        </ProfileButton>
      </User>
    )
  }
}

UserInfo.propTypes = {
  user: PropTypes.shape().isRequired,
}

export default UserInfo
