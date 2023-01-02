import meme from "../images/troll.jpeg"

export default function Header(){
    return(
        <header className="header">            
            <img src={meme} className="header--image" alt="logo" /> 
            <h1 className="header--title">Meme generator</h1>
            <h4 className="header--project">Let's laugh a little</h4>
        </header>
    )
}