import { useContext } from "react"
import { SocketContext } from "../context/SocketContext"
import './Notifications.css'

const Notifications = () => {
  const { answerCall, call, callAccepted } = useContext(SocketContext)

  return <>
    {
      call.isRecivingCall && !callAccepted && (
        <div>
          <h1>{call.name} is calling: </h1>
          <button type="buttons" className='answer' onClick={answerCall}>
            AswerCall
          </button>
        </div>
      )
    }
  </>
}

export default Notifications