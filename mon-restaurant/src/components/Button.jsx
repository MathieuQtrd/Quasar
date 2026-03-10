
const Button = ({href, name, classList}) => {
  return (
    <a href={href} className={classList}>
      {name}
    </a>
  )
}

export default Button
