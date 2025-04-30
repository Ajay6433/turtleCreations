"use client"
import Image from "next/image";
import React, { useState } from "react";

const SendMessage = () => {
    const [showForm, setShowForm] = useState(false);
    const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Integrate with emailJS here
        alert("Message sent! (Integrate with emailJS)");
        setForm({ name: "", email: "", phone: "", message: "" });
        setShowForm(false);
    };

    return (
        <div className="w-[90%] max-w-[1200px] min-h-[466px] border-3 m-auto relative flex justify-center items-center px-4 py-8 mb-32 boxShadow mt-24">
            <Image src="/smallIcons/sendMsgVector.png" className="absolute -top-8 md:right-88" width={100} height={100} alt="VectorStar"/>
            <div className="w-full max-w-4/5 flex flex-col justify-center items-center">
                <div className="w-full max-w-[696px] text-center">
                    <h2 className="text-[32px] md:text-[48px] font-bold bg-gradient-to-r from-[#5F8385] to-[#96BEC1] bg-clip-text text-transparent leading-tight">
                        Let's plan your Eventsd hassle-free and unforgettable{" "}
                    </h2>
                </div>
                <div className="w-full max-w-[831px] mt-4 text-center">
                    <p className="text-[20px] md:text-[28px]">
                        Let's plan your Event hassle-free and unforgettable{" "}
                    </p>
                </div>
                {/* Button */}
                <div className="mt-6">
                    <button
                        className="px-6 py-3 bg-[#F3ABCB] text-black font-medium rounded-full border-4 border-black transition hover:bg-[#f5c2bb]"
                        onClick={() => setShowForm(true)}
                    >
                        Send us message
                    </button>
                </div>
                {showForm && (
                    <form onSubmit={handleSubmit} className="mt-8 w-full max-w-md bg-white p-6 rounded-lg shadow-lg flex flex-col gap-4 z-10">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded"
                        />
                        <div className="flex gap-2">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="+91 Phone Number"
                                value={form.phone}
                                onChange={handleChange}
                                required
                                pattern="[0-9]{10}"
                                className="border p-2 rounded-r flex-1"
                            />
                        </div>
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            value={form.message}
                            onChange={handleChange}
                            required
                            className="border p-2 rounded"
                        />
                        <div className="flex gap-2">
                            <button type="submit" className="flex-1 px-4 py-2 bg-[#F3ABCB] border-2 border-black rounded-full font-medium hover:bg-[#f5c2bb]">Send</button>
                            <button type="button" className="flex-1 px-4 py-2 border-2 border-black rounded-full font-medium" onClick={() => setShowForm(false)}>Cancel</button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SendMessage;
