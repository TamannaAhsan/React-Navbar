import React,{Fragment,useState} from 'react'
import "./About.css"

const About = () => {
  const [ toggleTab, setToggleTab] = useState(1)
  const toggleState = (index) =>{
    setToggleTab(index)
  }
  return (
    <Fragment>

    <section className="about">

    <div className="row">

    <div className="column">
      <div className="about-img"></div>
    </div>

    <div className="column">

    <div className="tabs">

    <div className={toggleTab === 1 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(1)}
    >
      <h2>About</h2>
    </div>

    <div className={toggleTab === 2 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(2)}
    >
      <h2>Foods</h2>
    </div>

    <div className={toggleTab === 3 ? "single-tab active-tab": "single-tab"}
    onClick = {() => toggleState(3)}
    >
      <h2>Achievements</h2>
    </div>
      
    </div>

    <div className="tab-content">

    {/* About Content */}

    <div className={toggleTab === 1 ?"content active-content":"content"}>
      <h2>About Us</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>
       <h3>I Am Web Designer And Developer Having 10 Year Of Experience</h3>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, quae accusantium totam mollitia facilis debitis porro sunt repellat eveniet dignissimos.</p>
    </div>

    {/* Skills Content */}

    <div className={toggleTab === 2 ?"content active-content":"content"}>
      <h2>Our Foods</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?Lorem ipsum dolor sit 
       amet consectetur adipisicing elit.
       Eveniet nostrum laborum porro pariatur minima tenetur.
       Adipisci obcaecati placeat ex veritatis est delectus sunt, 
       quam doloribus nemo sed perferendis ipsa corporis?</p>

    </div>

       {/* Experience Content */}

    <div className={toggleTab === 3 ?"content active-content":"content"}>

    <div className="exp-column">
      <h3>Our Goals</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>

    <div className="exp-column">
      <h3>Good Food Service</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>

    <div className="exp-column">
      <h3>Online Service</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim error rem dicta perferendis et qui obcaecati labore accusantium cupiditate libero.</p>
    </div>
    
    </div>
        
    </div>

    </div>

    </div>

    </section>
    
    </Fragment>
  )
}

export default About