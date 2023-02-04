import './Options.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../context/SocketContext'
import { useContext, useState } from 'react'

const Options = ({ children }) => {
  const {me, callAccepted, name, setName, callEnded, leaveCall, callUser} = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')

  return <>
    <h1 className='options'>Options</h1> 
      <form noValidate autoComplete='off'>
        <label for="" >Name </label>
        <input type="text" name="name" value="" className='input'/>
      </form>
    {children}
  </>
}
export default Options