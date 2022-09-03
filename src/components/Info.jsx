import avatar from "../assets/andyouare-avatar.jpeg";

export default function Info() {
  return(
    <header>
      <img className="avatar" src={avatar} alt="" />
      <div className="info">
        <h1>And you are?</h1>
        <h3>Fullstack Developer</h3>
        <p>andyouare.dev</p>
        <button>Email</button>
      </div>
    </header>
  )
}
