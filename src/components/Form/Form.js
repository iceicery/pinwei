import React from "react";
import "./Form.css";

export default class Form extends React.Component {
    constructor(props) {
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            status: ""
        };
    }

    render() {
        const { status } = this.state;
        return (
            <section className="contact">
                <h3 className="contact__title">Contact Me</h3>
                <div className="contact__subtitle"><h5>Interested in working together?<br></br> Fill up the form below and I will get back to you as soon as possible.</h5></div>
                <form
                    onSubmit={this.submitForm}
                    action="https://formspree.io/f/mgeprzzq"
                    method="POST"
                    className="form"
                >
                    <label className="form__label">Name:</label>
                    <input type="name" name="name" className="form__input" />
                    <label className="form__label">Email:</label>
                    <input type="email" name="email" className="form__input" />
                    <label className="form__label">Message:</label>
                    <textarea type="text" name="message" className="form__message">
                    </textarea>
                    {status === "SUCCESS" ? <p>Thanks, I've got your message. <br />
If you didn't hear from me in two days, please email me directly pw.amy.wu@gmail.com </p> : <button className="form__submit">Submit</button>}
                    {status === "ERROR" && <p className="form__err">Ooops! There was an error. Please enter all the fields so I could get back to you.</p>}
                </form>
            </section>
        );
    }

    submitForm(ev) {
        ev.preventDefault();
        const form = ev.target;
        const data = new FormData(form);
        const xhr = new XMLHttpRequest();
        xhr.open(form.method, form.action);
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                form.reset();
                this.setState({ status: "SUCCESS" });
            } else {
                this.setState({ status: "ERROR" });
            }
        };
        xhr.send(data);
    }
}