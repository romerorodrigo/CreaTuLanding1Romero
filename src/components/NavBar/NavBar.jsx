import {CartWidget} from '../CartWidget/CartWidget'
import {GenericButton} from '../CustomControls/GenericButton'
import logo from '../../assets/logo.svg'
import './NavBarStyle.css'

export const NavBar = () =>  {
  return (
    <>
      <img src={logo} alt='Logo' width="32" height="32"/>
      <div>
        <GenericButton label={'Guitarras'} color={'gray'} />
        <GenericButton label={'Amplificadores'} color={'red'} />
        <GenericButton label={'Pedales'} color={'gray'} />
      </div>
      <CartWidget/>
    </>
  )
}
