export const GenericButton = ({label, color}) =>  {
  const buttonStyle = {
    color: color
  };

  return (
      <>
        <button style={buttonStyle}>{label}</button>
      </>
    )
  }