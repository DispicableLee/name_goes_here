import "./Contact.css"



export default function Contact(){
    const contactCardObjectArray = [
        {
            title: "Instagram",
            url: "",
            background: "linear-gradient(to right, #6228D7 0%, #EE2A7B 50%, #F9CE34 100%)"
        },
        {
            title: "LinkedIn",
            url: "https://www.linkedin.com/in/robert-lee-webdeveloper/",
            background: "#0077B5"
        },
        {
            title: "Github",
            url: "https://github.com/DispicableLee",
            background: "#6E5494"
        },
        {
            title: "My Other Portfolio :)",
            url: "https://robs-portfolio-wq7b-orsdckd30-dispicablelees-projects.vercel.app",
            background: ""
        }
    ]
    const renderedContactCards = contactCardObjectArray.map((card)=>{
        return (
            <a className="contact-card" 
                href="" 
                target="_blank"
                style={{"background": card.background}}
                >
                <h3>{card.title}</h3>
            </a>
        )
    })



    return (
        <div id="contact-main">
            <section className="contact-title">
                <h1>Contact</h1>
            </section>

            <section className="contact-card-holder">
                {renderedContactCards}
            </section>
        </div>
    )
}