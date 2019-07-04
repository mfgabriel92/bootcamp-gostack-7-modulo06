import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { withNavigation } from 'react-navigation'
import { Repository, Name } from './styles'

class RepositoryInfo extends Component {
  render() {
    const { repository } = this.props

    return (
      <Repository>
        <Icon name="source-repository" color="#333" size={18} />
        <Name>{repository.name}</Name>
      </Repository>
    )
  }
}

RepositoryInfo.propTypes = {
  repository: PropTypes.shape().isRequired,
}

export default withNavigation(RepositoryInfo)
