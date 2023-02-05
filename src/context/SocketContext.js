import { createContext, useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
import Peer from 'simple-peer'

const SocketContext = createContext()

const socket = io('http://localhost:4000')

const ContextProvider = ({ children }) => {
  //States
  const [stream, setStream] = useState()
  const [me, setMe] = useState('')
  const [call, setCall] = useState({})
  const [callAccepted, setCallAccepted] = useState(false)
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState('')

  //Refs
  const myVideo = useRef()
  const userVideo = useRef()
  const connectionRef = useRef()

  //Asking user por video and audio permissions
  useEffect(() => {
    const getMedia = async () => {
      try {
        await navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then(currentStream => {
            setStream(currentStream)
            myVideo.current.srcObject = currentStream
          })
      } catch (error) {
        console.log(error)
      }
    }
    
    getMedia()

    socket.on('me', id => setMe(id))

    socket.on('callUser', ({ from, name: CallerName, signal }) => {
      setCall({ isRecivingCall: true, from, name: CallerName, signal })
    })
  }, [])

  //Asnwering a call
  const answerCall = () => {
    setCallAccepted(true)

    const peer = new Peer({ initiator: false, trickle: false, stream })

    peer.on('signal', data => {
      socket.emit('answerCall', { signal: data, to: call.from })
    })

    peer.on('stream', currentStream => {
      userVideo.current.srcObject = currentStream
    })

    peer.signal(call.signal)

    //Connections Reference 
    connectionRef.current = peer
  }

  //Calling a User
  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream })

    peer.on('signal', data => {
      socket.emit('callUser', { userToCall: id, signalData: data, from: me, name })
    })

    peer.on('stream', currentStream => {
      userVideo.current.srcObject = currentStream
    })

    socket.on('callAccepted', signal => {
      setCallAccepted(true)
      peer.signal(signal)
    })

    //Now this is the Connection Reference
    connectionRef.current = peer
  }

  //leaving the call
  const leaveCall = () => {
    setCallEnded(true)

    connectionRef.current.destroy()

    window.location.reload()
  }
  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      answerCall,
      leaveCall,
    }}>
      {children}
    </SocketContext.Provider>
  )
}

export { ContextProvider, SocketContext }