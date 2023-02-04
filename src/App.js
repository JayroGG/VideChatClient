import Notifications from "./components/Notifications"
import Options from "./components/Options"
import VideoPlayer from "./components/VideoPlayer"
import './App.css'

const App = () => {
  return <div className='center'>
    <h1 className='title'> Video Chat App</h1>
    <VideoPlayer />
    <Options>
      <Notifications />
    </Options>
  </div>
}

export default App