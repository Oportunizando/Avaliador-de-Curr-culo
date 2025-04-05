import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export default function CurriculoForm() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    area: "",
    mensagem: "",
    arquivo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Currículo enviado com sucesso! Obrigado pelo envio.");
  };

  return (
    <div className="space-y-10 px-4 pb-20 max-w-4xl mx-auto">
      {/* Home */}
      <section className="text-center mt-10">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Avaliador de Currículos</h1>
        <p className="text-lg text-muted-foreground">
          Projeto voluntário para ajudar jovens a melhorarem seus currículos e se prepararem para o mercado de trabalho.
        </p>
      </section>

      {/* Como Funciona */}
      <section className="bg-muted p-6 rounded-2xl shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">Como funciona?</h2>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Preencha o formulário abaixo com seus dados e anexe seu currículo.</li>
          <li>Seu currículo será analisado por um avaliador voluntário.</li>
          <li>Você receberá um feedback por e-mail com sugestões de melhoria.</li>
        </ol>
      </section>

      {/* Formulário */}
      <section>
        <Card className="shadow-xl rounded-2xl">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-2xl font-bold">Envie seu Currículo</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                name="nome"
                placeholder="Nome completo"
                value={form.nome}
                onChange={handleChange}
                required
              />
              <Input
                name="email"
                type="email"
                placeholder="Seu e-mail"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                name="area"
                placeholder="Área de interesse profissional"
                value={form.area}
                onChange={handleChange}
                required
              />
              <Textarea
                name="mensagem"
                placeholder="Quer me contar algo sobre seu currículo ou carreira? (Opcional)"
                value={form.mensagem}
                onChange={handleChange}
              />
              <Input
                name="arquivo"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full">Enviar Currículo</Button>
            </form>
          </CardContent>
        </Card>
      </section>

      {/* Sobre Mim */}
      <section className="text-center mt-10">
        <h2 className="text-xl font-semibold">Sobre mim</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mt-2">
          Sou um avaliador voluntário de currículos com o objetivo de apoiar jovens que estão dando os primeiros passos no mercado de trabalho. Caso tenha dúvidas ou queira entrar em contato, envie um e-mail para: <strong>seuemail@exemplo.com</strong>
        </p>
      </section>
    </div>
  );
}
