import './ItemListContainerStyle.css'

export const ItemListContainer = ({greeting}) =>  {
  return (
    <>
      <div>
        <h1 className='title'>{greeting}</h1>
      </div>
    </>
  )
}
