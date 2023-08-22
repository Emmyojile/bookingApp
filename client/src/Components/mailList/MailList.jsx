import "./mailList.css"
const MailList = () => {
  return (
    <div className="mail">
        <h1 className="mailTitle">Save time, save Money !</h1>
        <span className="mailDesc">Sign Up and We'll send the best deals to you</span>
        <div className="mailInputContainer">
            <input type="text" placeholder="Your Email" />
            <button>Subscibe</button>
        </div>
    </div>
  )
}

export default MailList