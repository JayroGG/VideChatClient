import { useContext, useState } from "react";
import { SocketContext } from "../context/SocketContext"
import './Call.css'

const Call = () => {

  const { callAccepted, callEnded, name, leaveCall, callUser } = useContext(SocketContext)
  const [idToCall, setIdToCall] = useState('')

  const changeIdToCall = evt => {
    setIdToCall(evt.target.value)
  }

  const handleCall = () => {
    callUser(idToCall)
  }
  return <div className='makeCall'>
    <h1 className='wrapper'>
      {
        callAccepted && !callEnded ? name + ' is online' : 'Make a Call'
      }
    </h1>
    <form noValidate autoComplete='off'>
      <label>ID</label>
      <input type="text" name="ID" value={idToCall} className='input' onChange={changeIdToCall} />
      {
        callAccepted && !callEnded
          ? (<button type='button' className='hang' onClick={leaveCall}>Hang Up</button>)
          : (<button type='button' className='call' onClick={handleCall}> Call </button>)
      }
    </form>
  </div>
}

export default Call