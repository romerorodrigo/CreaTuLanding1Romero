import cart from '../../assets/CartWidgetImg.svg'

export const CartWidget = () =>  {
  return (
    <>
        <div>
            <img src={cart} alt='CartWidget' width="32" height="32"/>
            0
        </div>
    </>
)
}
