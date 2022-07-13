import { MainMenu } from '../components'

const withMainMenu = (Component: React.ComponentType) => {
  return (props: any) => {
    return (
      <MainMenu>
        <Component {...props} />
      </MainMenu>
    )
  }
}
export default withMainMenu
