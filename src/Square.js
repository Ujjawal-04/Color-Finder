const Square = ({colorValue}) => {
  return (
    <section className="Square" style={{backgroundColor:colorValue}}>
      <p>{colorValue ? colorValue : "Empty Value"}</p>
    </section>
  )
}
Square.defaultProps = {
    colorValue:"Empty Color Value"
}

export default Square
