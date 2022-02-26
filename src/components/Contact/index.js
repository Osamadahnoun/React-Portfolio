import React from "react";

const Contact = () => {
    return (
        <div className="center">
            <div className="form-container">

            <section className="form">
                <h1>Contact me</h1>
                <form className="contact">
                    <div>
                        <label htmlFor="name">Name:</label>
                        <br />
                        <input type="text" name="name" />
                    </div>
                    <div>
                        <label htmlFor="email">Email address:</label>
                        <br />
                        <input type="email" name="email" />
                    </div>
                    <div>
                        <label htmlFor="message">Message:</label>
                        <br />
                        <textarea name="message" rows="5"  />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </section>

            </div>
        </div>
    )
}

export default Contact