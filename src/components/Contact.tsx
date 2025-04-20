"use client"; // Ajoute ceci si tu es sous Next.js App Router

import { motion } from "framer-motion";
import { useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError("Tous les champs sont requis.");
      return;
    }

    // Simuler l'envoi du formulaire
    console.log("Formulaire envoyé :", formData);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 md:px-12 py-16">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center">
        Contact
      </h2>

      {/* Liens sociaux */}
      <div className="flex justify-center gap-6 mt-6">
        <a href="https://linkedin.com/in/amran-abdourazak-abdillahi" target="_blank" className="text-blue-600 hover:scale-110 transition">
          <FaLinkedin size={32} />
        </a>
        <a href="https://github.com/amran-zak" target="_blank" className="text-gray-900 dark:text-white hover:scale-110 transition">
          <FaGithub size={32} />
        </a>
        <a href="amranabdourazak@gmail.com" className="text-red-600 hover:scale-110 transition">
          <FaEnvelope size={32} />
        </a>
        <a href="tel:+33749339584" className="text-green-600 hover:scale-110 transition">
          <FaPhone size={32} />
        </a>
      </div>

      {/* Formulaire de contact */}
      <motion.form
        className="mt-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 md:p-8 max-w-lg mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-semibold">
            Nom
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder="Votre nom"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-semibold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder="Votre email"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-semibold">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border rounded-md dark:bg-gray-700 dark:text-white"
            placeholder="Votre message"
          />
        </div>

        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">Message envoyé avec succès !</p>}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition"
        >
          Envoyer
        </button>
      </motion.form>
    </section>
  );
};

export default Contact;
