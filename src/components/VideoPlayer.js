import { useContext } from 'react';
import { SocketContext } from '../context/SocketContext';
import './VideoPlayer.css'

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } = useContext(SocketContext)
  return <>
    {
      stream && (
        <div>
          <h4>{name || 'Name'}</h4>
          <video playsInline muted ref={myVideo} autoPlay className='myVideo' />
        </div>)
    }

    {
      callAccepted && !callEnded && (
        <div>
          <h4>{call.name || 'Users Name'}</h4>
          <video playsInline muted ref={userVideo} autoPlay className='userVideo' />
        </div>
      )
    }
  </>  
}

export default VideoPlayer