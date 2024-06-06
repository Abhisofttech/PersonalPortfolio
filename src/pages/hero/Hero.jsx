
import './hero.css'
import HeroPhoto from '../../assets/images/Abhi1.png'
import resume from '../../assets/Abhishek Resume.pdf'
// import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                
                <div className="leftHero">
                    <div className="leftItem">
                        <div className="leftName" data-text='Abhishek. '>Abhishek. </div>
                        <div className="leftPosition">Web Developer</div>
                        <div className="leftButonContainer">
                            <button className="btn btnDark"><a href="mailto:abhisofttech@gmail.com">HIRE ME</a></button>
                            {/* <button className="btn btnLight"><Link to='/skill'> EXPLORE MORE </Link></button> */}
                        </div>
                    </div>
                </div> <br />
                <div className="rightHero">
                    <div className="imageSection">
                        <img src={HeroPhoto} alt="Hero Pic of the page " className='heroImage' />
                    </div>
                </div>
            </div>
            <div className="about">
                <span className="head">ABOUT</span>
                <div className="aboutDetail">
                    Hi, I'm Abhishek, a web developer based in Delhi, India. Pursuing a Master's in Computer Application and holding a Bachelor's degree, I specialize in HTML, CSS, JavaScript, Bootstrap, and React.js. I've built dynamic websites using modern technologies for engaging user experiences. I'm passionate about creating web applications and committed to continuous learning. Let's collaborate and build something great!
                </div>
                <button className="btn btnDark"><a href={resume} download='Abhishek Resume' > DOWNLOAD MY CV</a></button>

            </div>
        </>
    )
}

export default Hero
