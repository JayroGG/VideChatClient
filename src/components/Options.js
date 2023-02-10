import './Options.css'
import Call from './Call'
import Account from './Account.js'

const Options = ({ children }) => {
  return <div className='options'>
    <Account />
    <Call />
    {children}
  </div>
}

export default Options