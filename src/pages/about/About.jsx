import Experience from '../../components/experience/Experience'
import './about.css'
const About = () => {
    return (
        <>
           
            <div className="skills" id='skill'>
                <span className="head">MY SKILLS</span>
                <div className="skillsGroup">
                    <div className="skillContainer">
                        <span className="skillName">HTML5</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue html"></div>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <span className="skillName">CSS3</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue css"></div>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <span className="skillName">JAVASCRIPT</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue js"></div>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <span className="skillName">REACTJS</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue react"></div>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <span className="skillName">NODEJS [Learning...]</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue node"></div>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <span className="skillName">BOOTSTRAP</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue bootstrap"></div>
                        </div>
                    </div>
                    <div className="skillContainer">
                        <span className="skillName">MYSQL</span>
                        <div className="skillBar">
                            <div className="skillBarVAlue mysql"></div>
                        </div>
                    </div>
                </div>
            </div>
            <Experience/>
        </>
    )
}

export default About
