import React, { useState } from "react";
import { Bounce } from "react-reveal";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
});

const [loading, setLoading] = useState(false);
const [error, setError] = useState('');
const [success, setSuccess] = useState('');

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
        const response = await fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            setSuccess('Your message has been sent. Thank you!');
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } else {
            setError(result.error || 'Failed to send email');
        }
    } catch (error) {
        setError('Failed to send email');
    } finally {
        setLoading(false);
    }
};
  return (
    <section id="contact" class="contact">
      <div class="container" data-aos="fade-up">
        <div class="section-header">
          <h2>Contact</h2>
          <Bounce bottom>
            <p>
              Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam
              porro nihil id ratione ea sunt quis dolorem dolore earum
            </p>
          </Bounce>
        </div>

        <div class="row gx-lg-0 gy-4">
          <div class="col-lg-4">
            <div class="info-container d-flex flex-column align-items-center justify-content-center">
              <div class="info-item d-flex">
                <a
                  href="https://maps.google.com/?q=A108+Adam+Street,+New+York,+NY+535022"
                  target="_blank"
                >
                  <i class="bi bi-geo-alt flex-shrink-0"></i>
                </a>
                <div>
                  <h4>Location:</h4>
                  <p>A108 Adam Street, New York, NY 535022</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <a href="mailto:hasansit48@gmail.com">
                  <i class="bi bi-envelope flex-shrink-0"></i>
                </a>
                <div>
                  <h4>Email:</h4>
                  <p>hasansit48@gmail.com</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <a href="https://wa.me/8801950090248" target="_blank">
                  <i class="bi bi-phone flex-shrink-0"></i>
                </a>
                <div>
                  <h4>Call:</h4>
                  <p>+8801950090248</p>
                </div>
              </div>

              <div class="info-item d-flex">
                <i class="bi bi-clock flex-shrink-0"></i>
                <div>
                  <h4>Open Hours:</h4>
                  <p>Mon-Sat: 11AM - 23PM</p>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
                <div className="col-md-6 form-group">
                    <input
                        type="text"
                        name="name"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
            <div className="form-group mt-3">
                <input
                    type="text"
                    className="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="form-group mt-3">
                <textarea
                    className="form-control"
                    name="message"
                    rows="7"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                ></textarea>
            </div>
            <div className="my-3">
                {loading && <div className="loading">Loading</div>}
                {error && <div className="error-message">{error}</div>}
                {success && <div className="sent-message">{success}</div>}
            </div>
            <div className="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
