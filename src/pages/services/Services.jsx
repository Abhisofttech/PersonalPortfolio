import './services.css'

const Services = () => {
    return (
        <>
            <div className="services">
                <div className="servicesTop"></div>
                <div className="servicesBottom"></div>
                <div className="servicesContent">
                    <div className="head">WHAT I DO</div>
                    <div className="serviceContainer">
                        <div className="service">
                            <i class="fa-solid fa-desktop"></i>
                            <div className="serviceName">Front-end</div>
                            <p>
                                As a frontend developer, I have experience in crafting engaging user interfaces with expertise in HTML, CSS, Bootstrap, JavaScript, and React.js. I excel in building responsive and interactive web applications that deliver exceptional user experiences.  </p>
                        </div>
                        <div className="service">
                            <i class="fa-solid fa-laptop-file"></i>
                            <div className="serviceName">Back-end</div>
                            <p>
                                As a backend developer, I specialize in building robust server-side applications using Node.js and creating RESTful APIs. I have extensive experience with MySQL database management, ensuring efficient data storage and retrieval for scalable web solutions.</p>
                        </div>
                        <div className="service">
                            <i class="fa-solid fa-infinity"></i>
                            <div className="serviceName">Full-stack</div>
                            <p>
                                As a full stack developer, I specialize in frontend technologies like HTML, CSS, Bootstrap, JavaScript, and React.js for dynamic user interfaces. On the backend, I leverage Node.js to build RESTful APIs and manage MySQL databases for efficient data handling, enabling end-to-end web application development. </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
