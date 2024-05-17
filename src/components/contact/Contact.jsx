import './contact.css'

const Contact = () => {
    return (
        <>
            <div className="contact">
                <div className="head">Contact</div>
                <form action="https://api.web3forms.com/submit" method="POST">
                    <div className="inputBox">
                    <input type="hidden" name="access_key" value="0fc3ab89-c8be-4127-b941-bfeee622ec59"></input>
                        <div className="formInputContainer">
                            <input type="text" name='Name' className='formInput' placeholder='Name' />
                        </div>
                        <div className="formInputContainer">
                            <input type="email" name='Email' className='formInput' placeholder='E-mail' />
                        </div>
                    </div>
                    <div className="formTextAreaContainer">
                        <textarea name="Message" id="" placeholder='Message'></textarea>
                    </div>
                    <button type='submit' className="btn btnLight btnWidth">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact
