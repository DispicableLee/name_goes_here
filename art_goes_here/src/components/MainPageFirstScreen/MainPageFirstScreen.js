import "./MainPageFirstScreen.css"
import mask from "../../images/mask.JPG"


export default function MainPageFirstScreen(){
    return (
    <section id="mainpage-firstscreen">
        <div className="name-goes-here">
          <h1>
            name goes here
          </h1>
          <h2>- Rob's Portfolio</h2>
        </div>
        <section id="art-goes-here">
          {/* <h1>art goes here</h1> */}
          <img src={mask}/>
        </section>
      </section>
    )
}