import "../style/Contact.css"
import React, {useEffect, useRef, useState} from "react";
import emailjs from '@emailjs/browser';
import {useForm} from "react-hook-form";
import copy from "../asset/copy.png"
import {Link} from "react-router-dom";

function Contact(props) {

    useEffect(() => {
        document.title = 'Contact | TAKAHIRO YAMADA WEB CREATION';
        window.scroll({
            top: 0,
            // behavior: "smooth",
        });
    }, []);

    emailjs.init("hupchnZbg9mZaDmHZ");

    const [copyTocb, setCopyTocb] = useState(false);

    const [formindex, setFormindex] = useState(0);

    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailcheck, setEmailcheck] = useState('');
    let [submit, setSubmit] = useState(false);

    const {
        register, handleSubmit, formState: {errors},
    } = useForm({
        mode: 'onBlur', reValidateMode: 'onBlur', criteriaMode: 'all',
    });
    const form = useRef();

    useEffect(() => {
        if (name && !emailcheck && message) {
            setSubmit(true)
        } else {
            setSubmit(false)
        }
    });

    const copytocilpbord = (event) => {
        navigator.clipboard.writeText("takahirodev06@gmail.com");
        setCopyTocb(true)
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
    };
    const handleCompanyChange = (event) => {
        setCompany(event.target.value);
        console.log(event.target.value);
    };

    const handleEmailChange = (event) => {
        const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;
        if (pattern.test(event.target.value)) {
            setEmailcheck(null)
        } else {
            setEmailcheck("invalide")
        }
        setEmail(event.target.value);
    };
    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const onSubmit = async () => {
        try {
            await emailjs.sendForm('service_1mo2u0e', 'template_owe2ada', form.current);
            document.getElementById("form_area").classList.add("form_send_message")
        } catch (e) {
            window.alert("A transmission error has occurred.");
            console.log('FAILED...', e);// handle your error
        }
    }

    return (
        <div className="sub_container">
            <h2>Contact</h2>
            <section className="contact_address">
                <p>Please contact me through this email.</p>
                <h3>
                    takahirodev06@gmail.com
                    {copyTocb ? <img src={copy} alt="copy" onClick={copytocilpbord}
                                     className={"filtegreen"}/>
                        : <img src={copy} alt="copy" onClick={copytocilpbord}
                               className={"filterwhite"}/>}
                    {copyTocb ? <span onClick={copytocilpbord}>Copied!</span> :
                        <span onClick={copytocilpbord}>Click to copy</span>}
                </h3>
            </section>
            <section className="contact_form">
                <form onSubmit={handleSubmit(onSubmit)} method="post" ref={form} id={"form_area"}>
                    <div className={"form_sending"}>
                        <p>Get in touch </p>
                        <div className={"form_field_item"}>
                            <input type="text" placeholder="Company"
                                   value={company} {...register('company', {required: true})}
                                   onChange={handleCompanyChange}/>
                            {company && <div className="form_field_lamp lamp_on">
                                <div></div>
                            </div>}
                            {!company && !errors.company && <div className="form_field_lamp">
                                <div></div>
                            </div>}
                            {errors.company && !company && <div className="form_field_lamp lamp_error">
                                <div></div>
                            </div>}
                            {errors.company && <p className="form_alert">* required field</p>}
                        </div>
                        <div className={"form_field_item"}>
                            <input type="text" placeholder="Name"
                                   value={name} {...register('name', {required: true})}
                                   onChange={handleNameChange}/>
                            {name && <div className="form_field_lamp lamp_on">
                                <div></div>
                            </div>}
                            {!name && !errors.name && <div className="form_field_lamp">
                                <div></div>
                            </div>}
                            {errors.name && !name && <div className="form_field_lamp lamp_error">
                                <div></div>
                            </div>}
                            {errors.name && <p className="form_alert">* required field</p>}
                        </div>
                        <div className={"form_field_item"}>
                            <input type="email" placeholder="your_email@address.com" className="width100"
                                   value={email}   {...register('email', {required: true})}
                                   onChange={handleEmailChange}/>
                            {!email && !errors.email && <div className="form_field_lamp">
                                <div></div>
                            </div>}
                            {email && !emailcheck && <div className="form_field_lamp lamp_on">
                                <div></div>
                            </div>}
                            {email && emailcheck && <div className="form_field_lamp lamp_error">
                                <div></div>
                            </div>}
                            {errors.email && <p className="form_alert">* required field</p>}
                            {!errors.email && emailcheck &&
                                <p className="form_alert">* address email is not validated</p>}
                        </div>
                        <div className={"form_field_item"}>
                            <textarea placeholder="Enter message" className={"width100"}
                                      value={message} {...register('message', {required: true})}
                                      onChange={handleMessageChange}/>
                            {message && <div className="form_field_lamp lamp_on">
                                <div></div>
                            </div>}
                            {!message && !errors.message && <div className="form_field_lamp">
                                <div></div>
                            </div>}
                            {errors.message && !message && <div className="form_field_lamp lamp_error">
                                <div></div>
                            </div>}
                            {errors.message && <p className="form_alert">* required field</p>}
                        </div>
                        <div className={"form_switch"}>
                            <button type="submit" value="" disabled={!submit}>Send</button>
                        </div>
                    </div>
                    <div className={"form_is_send"}>
                        <p>Your message was sent successfully! </p>
                        <div className={"form_switch"}>
                            <Link to="/">Home</Link>
                        </div>
                    </div>
                </form>

            </section>
        </div>
    );
}

export default Contact;

/*

const [formindex, setFormindex] = useState(0);
const addFormIndic = (event) => {
    return setFormindex(formindex + 1)
};
const removeFormIndic = (event) => {
    return setFormindex(formindex - 1)
}
return (
    <div>
        <div className="form_indicate">
            {formindex === 0 ? <p className="form_indicate_curr"><span></span></p> :
                <p><span></span></p>}
            {formindex === 1 ? <p className="form_indicate_curr"><span></span></p> :
                <p><span></span></p>}
            {formindex === 2 ? <p className="form_indicate_curr"><span></span></p> :
                <p><span></span></p>}
            {formindex === 3 ? <p className="form_indicate_curr indicate_orange"><span></span></p> :
                <p><span></span></p>}
        </div>

    </div>
);
*
* */