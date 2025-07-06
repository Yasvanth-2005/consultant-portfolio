"use client";
import { useState } from "react";

export default function ContactForm({
  email = "",
  phone = "",
}: {
  email?: string;
  phone?: string;
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  function validate() {
    const errs: { [key: string]: string } = {};
    if (!form.name.trim()) errs.name = "Name is required.";
    if (!form.email.trim()) errs.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = "Invalid email.";
    if (!form.phone.trim()) errs.phone = "Phone is required.";
    if (!form.message.trim()) errs.message = "Message is required.";
    return errs;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    alert("Data sent!");
    setForm({ name: "", email: "", phone: "", message: "" });
    setErrors({});
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl p-8 flex-1 max-w-lg mx-auto shadow-md"
    >
      <h3 className="text-2xl font-bold mb-4 text-center">Get In Touch</h3>
      <p className="mb-6 text-center text-gray-700">
        Simply fill out the brief fields below and Ellie will be in touch with
        you soon, usually within one business day. This form is safe, private,
        and completely free.
      </p>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Name</label>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full mb-1 p-2 rounded border"
        />
        {errors.name && (
          <div className="text-red-600 text-sm">{errors.name}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Email</label>
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full mb-1 p-2 rounded border"
          placeholder={email || "Email"}
        />
        {errors.email && (
          <div className="text-red-600 text-sm">{errors.email}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Phone</label>
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full mb-1 p-2 rounded border"
          placeholder={phone || "Phone"}
        />
        {errors.phone && (
          <div className="text-red-600 text-sm">{errors.phone}</div>
        )}
      </div>
      <div className="mb-4">
        <label className="block mb-1 font-medium">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full mb-1 p-2 rounded border"
          rows={4}
        />
        {errors.message && (
          <div className="text-red-600 text-sm">{errors.message}</div>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-700 text-white py-2 rounded font-semibold cursor-pointer"
      >
        Submit
      </button>
    </form>
  );
}
