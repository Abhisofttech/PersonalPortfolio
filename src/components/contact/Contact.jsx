import './contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="head">Contact</div>
                <form>
                    <div className="inputBox">

                        <div className="formInputContainer">
                            <input type="text" className='formInput' placeholder='Name' />
                        </div>
                        <div className="formInputContainer">
                            <input type="email" className='formInput' placeholder='E-mail' />
                        </div>
                    </div>
                    <div className="formTextAreaContainer">
                        <textarea name="" id="" placeholder='Message'></textarea>
                    </div>
                    <button className="btn btnLight btnWidth">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
