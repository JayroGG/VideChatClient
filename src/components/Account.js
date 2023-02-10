import { useContext } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { SocketContext } from "../context/SocketContext"
import './Account.css'

const Account = () => {
  const { me, name, setName } = useContext(SocketContext)


  const changeName = evt => {
    setName(evt.target.value)
  }

  return <div className='account'>
    <h1 className='options'>Info Account</h1>
    <form noValidate autoComplete='off'>
      <label className='font'>{name}</label>
      <input type="text" name="name" value={name} className='input' onChange={changeName} />
      <CopyToClipboard text={me}>
        <button type="button" className='button'>Copy ID</button>
      </CopyToClipboard>
    </form>
  </div>
}
export default Account