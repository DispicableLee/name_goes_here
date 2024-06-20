import react from "react"
import "./MainPageThirdScreen.css"

export default function MainPageThirdScreen(){
    return (
        <div id="mainpage-thirdscreen">
            <div className="section-title">
                <h1>Collections</h1>
            </div>
            <ul className="collection-slide-ul">
                <li>
                    <div className="collection-info">
                        <h3>Collection Title</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <ul className="collection-image-slide-ul">
                        <li>
                            {/* <img/> */}
                        </li>
                        <li>
                            
                        </li>
                    </ul>
                </li>
                <li>
                    <div className="collection-info">
                        <h3>Collection Title</h3>
                    </div>
                </li>
            </ul>
        </div>
    )
}