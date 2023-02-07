import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import './Notifications.css'

const Notifications = () => {
  const { answerCall, call, callAccepted, leaveCall } = useContext(SocketContext)

  return <>
    {
      call.isRecivingCall && !callAccepted && (
        <div className='notification'>
          <h1 className='calling'>{call.name || 'Unkown'} is calling ... </h1>
          <div className='wrapper'>
            <button type="buttons" className='answer' onClick={answerCall}>
              Accept
            </button>
            <button type="buttons" className='decline' onClick={leaveCall}>
              Decline
            </button>
          </div>
        </div>
      )
    }
  </>
}

export default Notifications