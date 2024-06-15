import './project.css'
import Dashboard from '../../assets/images/Dahboard.jpg'
import Food from '../../assets/images/Food.jpg'
import Academic from '../../assets/images/Acdemic.jpg'
import Bug from '../../assets/images/Bug.jpg'
import News from '../../assets/images/News.jpg'
import Other from '../../assets/images/others.jpg'

const Project = () => {
  return (
    <>
      <div className="project" id='project'>
        <span className="head">MY RECENT WORKS</span>
        <div className="cardCaontainer">
          <div className="card">
            <img src={Dashboard} alt="" className="cardImg" />
            <div className="cardDetail">
              <div className="cardName">Dashboard Website</div>
              <div className="cardIconContainer">
                <div className="icon">
                  <a href="https://dashboardwebsitebyabhishek.netlify.app/" target='_blank' rel="noreferrer">

                <i className=" iconLink fa-solid fa-eye"></i> <p className='linkName'>Live</p>
                  </a>
                </div>
                <div className="icon">
                  <a href="https://github.com/Abhisofttech/Dashboard" target='_blank' rel="noreferrer">

                <i className=" iconLink fa-solid fa-link"></i> <p className='linkName'>Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Food} alt="" className="cardImg" />
            <div className="cardDetail">
              <div className="cardName">Food Website </div>
              <div className="cardIconContainer">
                <div className="icon">
                  <a href="https://abhisofttech.github.io/FoodWebsiteByAbhishek/" target='_blank' rel="noreferrer">

                  <i className=" iconLink fa-solid fa-eye"></i> <p className='linkName'>Live</p>
                  </a>
                </div>
                <div className="icon">
                  <a href="https://github.com/Abhisofttech/FoodWebsiteByAbhishek" target='_blank' rel="noreferrer">

                  <i className=" iconLink fa-solid fa-link"></i> <p className='linkName'>Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Academic} alt="" className="cardImg" />
            <div className="cardDetail">
              <div className="cardName">Academic Managment System </div>
              <div className="cardIconContainer">
                
                <div className="icon">
                  <a href="https://github.com/Abhisofttech/StudentManagementSystemByAbhishek" target='_blank' rel="noreferrer">

                  <i className=" iconLink fa-solid fa-link"></i> <p className='linkName'>Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Bug} alt="" className="cardImg" />
            <div className="cardDetail">
              <div className="cardName">Bug Tracking System </div>
              <div className="cardIconContainer">
                
                <div className="icon">
                  <a href="/" >

                  <i className=" iconLink fa-solid fa-link"></i> <p className='linkName'>Not Available</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={News} alt="" className="cardImg" />
            <div className="cardDetail">
              <div className="cardName">News Website </div>
              <div className="cardIconContainer">
                
                <div className="icon">
                  <a href="https://github.com/Abhisofttech/NewsUsingFunctionBasedComponent" target='_blank' rel="noreferrer">

                  <i className=" iconLink fa-solid fa-link"></i> <p className='linkName'>Link</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="card">
            <img src={Other} alt="" className="cardImg" />
            <div className="cardDetail">
              <div className="cardName">Other Projects </div>
              <div className="cardIconContainer">
                <div className="icon">
                  <a href="https://github.com/Abhisofttech" target='_blank' rel="noreferrer">

                  <i className="iconLink  fa-brands fa-square-github"></i> <p className='linkName'>Visit GitHub</p>
                  </a>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Project
