"use client"
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";

const countries = ["Argentina", "México", "España", "Chile", "Colombia", "Perú", "Otros"];

export function Contact_form() {
  const formRef = React.useRef<HTMLFormElement>(null);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    country: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formRef.current) {
      try {
        await emailjs.sendForm(
          "service_ofkr3f4",  // Reemplaza con tu Service ID de EmailJS
          "template_h8pmnw8", // Reemplaza con tu Template ID de EmailJS
          formRef.current,
          "8fG1MVd__D9CQqXHo" // Reemplaza con tu Public Key de EmailJS
        );

        alert("Formulario enviado exitosamente");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          country: "",
          message: "",
        });
      } catch (error) {
        console.error("Error enviando correo:", error);
        alert("Error al enviar el formulario");
      }
    }
  };

  return (
    <section className="flex justify-center items-center min-h-screen bg-blue-500 p-4">
      <Card className="w-full max-w-lg bg-white shadow-lg p-6 rounded-lg">
        <CardContent>
          <h2 className="text-2xl font-bold text-center mb-6">Contáctanos</h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block font-medium">Nombre</label>
                <input
                  type="text"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded relative z-10"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block font-medium">Apellido</label>
                <input
                  type="text"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full p-2 border rounded relative z-10"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block font-medium">Correo Electrónico</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded relative z-10"
              />
            </div>
            <div>
              <label htmlFor="company" className="block font-medium">Empresa</label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full p-2 border rounded relative z-10"
              />
            </div>
            <div>
              <label htmlFor="country" className="block font-medium">País</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="w-full p-2 border rounded relative z-10"
                required
              >
                <option value="">Selecciona un país</option>
                {countries.map((country) => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block font-medium">Mensaje</label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full p-2 border rounded relative z-10"
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" className="w-full relative z-10">Enviar</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
