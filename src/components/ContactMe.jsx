import React, { useState } from 'react';
import { FaEnvelope, FaPhone } from 'react-icons/fa';
import 'aos/dist/aos.css';

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const disableCondition = !formData.name || !formData.email || !formData.subject || !formData.message

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const submitForm = async (e) => {
        e.preventDefault();
        alert("Send email feature is not implimented yet, but very soon it will get added")
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        })
    };

    return (
        <section className="w-full bg-black text-white py-16 px-4 scroll-mt-15" id="contact">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center mb-12">
                    Get in<span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent"> touch</span>
                </h2>

                <div className="flex flex-col md:flex-row gap-10" data-aos="fade-up">
                    {/* Let's Talk Section */}
                    <div className="md:w-1/2 flex flex-col  p-8 rounded-xl shadow-lg">
                        <h3 className="text-4xl font-bold mb-4 text-pink-500">Let's Talk</h3>
                        <p className="mb-4 text-gray-300 text-2xl">
                            Feel free to reach out for collaborations or just a friendly hello 👋
                        </p>
                        <ul className="space-y-2 text-gray-400 text-2xl">
                            <li className="flex items-center gap-2">
                                <FaEnvelope className="text-pink-500" /> saikiran.golti@gmail.com
                            </li>
                            <li className="flex items-center gap-2">
                                <FaPhone className="text-pink-500" /> +91 83281 21983
                            </li>
                        </ul>
                    </div>

                    {/* Contact Form */}
                    <form className="md:w-1/2 flex flex-col gap-6" onSubmit={submitForm}>
                        <div className="flex flex-col md:flex-row gap-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="flex-1 p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                                value={formData.name}
                                name="name"
                                onChange={(e) => handleChange(e)}
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="flex-1 p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                                name="email"
                                value={formData.email}
                                onChange={(e) => handleChange(e)}
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Subject"
                            className="p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            name="subject"
                            value={formData.subject}
                            onChange={(e) => handleChange(e)}
                        />

                        <textarea
                            rows="6"
                            placeholder="Your Message"
                            className="p-4 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-pink-500"
                            name="message"
                            value={formData.message}
                            onChange={(e) => handleChange(e)}
                        ></textarea>

                        <button
                            type="submit"
                            className="self-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition disabled:opacity-50 disabled:text-gray-400"
                            disabled={disableCondition}
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactMe;
