import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import './Notifications.css'

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext)

  return <>
    {
      call.isRecivingCall && !callAccepted && (
        <div>
          <h1>{call.name || 'Unkown'} is calling: </h1>
          <button type="buttons" className='answer' onClick={answerCall}>
            AswerCall
          </button>
          <button type="buttons" className='hang' onClick={leaveCall}>
            Decline
          </button>
        </div>
      )
    }
  </>
}

export default Notifications