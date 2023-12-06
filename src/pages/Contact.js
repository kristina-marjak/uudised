const Contact = () => {
    return (
        <div className="page-container">
            <div className="contact-container">
                <div className="column">
                    <h2>Customer Service</h2>
                    <p>Phone: +123 456 789</p>
                    <h2>Business Customer Service</h2>
                    <p>Phone: +987 654 321</p>
                </div>

                <div className="column">
                    <h2>Editorial Contacts</h2>
                    <p>Email: toimetus@example.com</p>
                </div>

                <div className="column">
                    <h2>Other Contacts</h2>
                    <p>Sales: +456 789 012</p>
                    <p>Cleaner: +876 543 210</p>
                    <p>Parking Manager: +111 222 333</p>
                </div>
            </div>
        </div >
    );
};

export default Contact;