"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function FormOrcamento() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const res = await fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      });
    } else {
      alert("Erro ao enviar. Tente novamente.");
    }
  };

  return (
    <div className="bg-zinc-900 p-8 rounded-xl">
      <h3 className="text-2xl font-bold mb-6">Solicite um orçamento</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Nome
            </label>
            <Input
              id="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Seu nome completo"
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="seu@email.com"
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/10"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium">
              Telefone
            </label>
            <Input
              id="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/10"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="date" className="text-sm font-medium">
              Data do Casamento
            </label>
            <Input
              id="date"
              type="date"
              value={form.date}
              onChange={handleChange}
              className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/10"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Mensagem
          </label>
          <Textarea
            id="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Conte-nos sobre seu casamento e o que você está buscando..."
            className="bg-zinc-800 border-zinc-700 focus:border-red-500 focus:ring-red-500/10 min-h-[120px]"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-red-600 hover:bg-red-700 text-white py-6 rounded-md text-lg shadow-lg shadow-red-500/20 transition-all hover:shadow-red-500/40"
        >
          {loading ? "Enviando..." : "Enviar solicitação"}
        </Button>

        {success && (
          <p className="text-green-500 text-center text-sm">
            Solicitação enviada com sucesso!
          </p>
        )}

        <p className="text-xs text-gray-400 text-center">
          Ao enviar, você concorda com nossa política de privacidade e
          termos de uso.
        </p>
      </form>
    </div>
  );
}
