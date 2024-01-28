import {CartWidget} from '../CartWidget/CartWidget'
import {GenericButton} from '../CustomControls/GenericButton'
import './NavBarStyle.css'

export const NavBar = () =>  {
  return (
    <>
      <div>
        <table>
          <tbody>
            <tr>
              <td><h2 className='subTitle'>Mi Tiend@</h2></td>
              <td>
                <div>
                  <GenericButton label={'Notebooks'} color={'blue'} />
                  <GenericButton label={'Impresoras'} color={'red'} />
                  <GenericButton label={'Tablets'} color={'purple'} />
                </div>
              </td>
              <td><CartWidget/></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}
