import { useState } from 'react';
import './contact.css'

const Contact = () => {
    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "0fc3ab89-c8be-4127-b941-bfeee622ec59");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    return (
        <>
            <div className="contact" id='contact'>
                <div className="head">Contact</div>
                <form onSubmit={onSubmit}>
                    <div className="inputBox">
                        <div className="formInputContainer">
                            <input type="text" name='Name' className='formInput' placeholder='Name' required />
                        </div>
                        <div className="formInputContainer">
                            <input type="email" name='Email' className='formInput' placeholder='E-mail' required />
                        </div>
                    </div>
                    <div className="formTextAreaContainer">
                        <textarea name="Message" id="" placeholder='Message' required></textarea>
                    </div>
                    <button type='submit' className="btn btnLight btnWidth">Submit</button>
                </form>
                <span className='result'>{result}</span>
            </div>
        </>
    )
}

export default Contact
