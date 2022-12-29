import React, { Fragment } from "react";
import PropTypes from "prop-types";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
    let email;
    const submit = (e) => {
        e.preventDefault();
        email &&
            email.value.indexOf("@") > -1 &&
            onValidated({
                EMAIL: email.value,
            });
        let emailInput = document.getElementById("mc-email");
        emailInput.value = "";
    };
    // Change Handaler
    const inputChangedHandler = (e) => {
        console.log(e.target.value);
    };
    return (
        <Fragment>
            <form className="news-letter-form d-flex">
                <input
                    id="mc-email"
                    className="form-control"
                    type="email"
                    placeholder="Enter Email here"
                    name="mail"
                    onChange={(e) => inputChangedHandler(e)}
                    ref={(node) => (email = node)}
                />
                <button className="search-btn" type="submit" onClick={submit}>
                    Subscribe
                </button>
            </form>
            {status === "sending" && (
                <div style={{ color: "#3498db", fontSize: "12px" }}>
                    sending...
                </div>
            )}
            {status === "error" && (
                <div
                    style={{ color: "#e74c3c", fontSize: "12px" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
            {status === "success" && (
                <div
                    style={{ color: "#2ecc71", fontSize: "12px" }}
                    dangerouslySetInnerHTML={{ __html: message }}
                />
            )}
        </Fragment>
    );
};

CustomForm.propTypes = {
    status: PropTypes.oneOf(["sending", "error", "success"]),
    message: PropTypes.string,
    onValidated: PropTypes.func,
};
const Newsletter = (props) => {
    return (
        <MailchimpSubscribe
            url={props.mailchimpUrl}
            render={({ subscribe, status, message }) => (
                <CustomForm
                    status={status}
                    message={message}
                    onValidated={(formData) => subscribe(formData)}
                />
            )}
        />
    );
};

Newsletter.propTypes = {
    mailchimpUrl: PropTypes.string,
};

export default Newsletter;
