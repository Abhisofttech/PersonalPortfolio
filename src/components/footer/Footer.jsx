import './footer.css'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <div className="footerIcons">
                    <a href="https://www.linkedin.com/in/abhisofttech" rel='noreferrer' target='_blank'>
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/Abhisofttech" rel='noreferrer' target='_blank'>
                        <i className="fa-brands fa-square-github"></i>
                    </a>
                    <a href="tel:9315632606" rel='noreferrer' target='_blank'>
                        <i className="fa-solid fa-phone"></i>
                    </a>
                    <a href="mailto:abhisofttech360@gmail.com" rel='noreferrer' target='_blank'>
                        <i className="fa-solid fa-envelope"></i>
                    </a>
                    <a href="https://wa.me/9315632606" rel='noreferrer' target='_blank'>
                        <i className="fa-brands fa-square-whatsapp"></i>
                    </a>
                </div>
                <div className="footerCopyright">
                    &#169; All Right Reserved. 2024
                </div>
            </div>
        </>
    )
}

export default Footer
