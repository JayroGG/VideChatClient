import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import './VideoPlayer.css'

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  const myVideoClass = callAccepted ? 'myVideoSmall' : 'myVideo'
  return <>
    {
      callAccepted && !callEnded && (
        <div>
          <h4 className='caller'>{call.name || 'Unkown'}</h4>
          <video playsInline ref={userVideo} autoPlay className='userVideo' />
        </div>
      )
    }
    {
      stream && (
        <div className='me'>
          <h4>{
            !callAccepted ? name || 'You' : ''
          }</h4>
          <video playsInline muted ref={myVideo} autoPlay className={myVideoClass} />
        </div>)
    }
  </>  
}

export default VideoPlayer