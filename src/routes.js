import { createAppContainer, createStackNavigator } from 'react-navigation'
import Main from './pages/Main/config'
import User from './pages/User/config'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      User,
    },
    {
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159C1',
        },
        headerTintColor: '#FFF',
      },
    }
  )
)

export default Routes
