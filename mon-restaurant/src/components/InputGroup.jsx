
const Input = ({ groupText, type, name, classList, placeholder }) => {
  return (
    <div className="input-group">
      <span className="input-group-text" id="basic-addon1">{groupText}</span>
      <input type={type} name={name} className={classList} placeholder={placeholder} />
    </div>
    
  )
}

export default Input
