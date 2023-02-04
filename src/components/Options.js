import './Options.css'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { SocketContext } from '../context/SocketContext'
import { useContext, useState } from 'react'

const Options = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')

  const changeName = evt => {
    setName(evt.target.value)
  }

  const changeIdToCall = evt => {
    setIdToCall(evt.target.value)
  }

  const handleCall = () => {
    callUser(idToCall)
  }

  return <div className='options'>
    <div className='account'>
      <h1 className='options'>Info Account</h1>
      <form noValidate autoComplete='off'>
        <label className='font'>{name}</label>
        <input type="text" name="name" value={name} className='input' onChange={changeName} />
        <CopyToClipboard text={me}>
          <button type="button" className='button'>Copy ID</button>
        </CopyToClipboard>
      </form>
    </div>

    <div className='makeCall'>
      <h1 className='options'>Make a Call</h1>
      <form noValidate autoComplete='off'>
        <label className='font' >ID</label>
        <input type="text" name="ID" value={idToCall} className='input' onChange={changeIdToCall} />
        {
          callAccepted && !callEnded
            ? (<button type='button' className='hang' onClick={leaveCall}>Hang Up</button>)
            : (<button type='button' className='call' onClick={handleCall}> Call </button>)
        }
      </form>
    </div>
    {children}
  </div>
}

export default Options