
import React from 'react';

const App = () => {
  return (
    <div className="bg-white text-gray-800 font-sans">
      {/* A - Atenção */}
      <header className="bg-blue-50 py-16 text-center px-6">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4">Pare de Esperar. Comece Medicina Agora.</h1>
        <p className="text-xl max-w-3xl mx-auto text-gray-700">Entre direto em Medicina no Paraguai, sem vestibular, com mensalidade acessível, carga horária completa e apoio para o Revalida.</p>
      </header>

      {/* I - Interesse */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
          {[
            ['✅', 'Sem Vestibular', 'Ingresso direto, sem ENEM e sem cursinhos.'],
            ['💰', 'Economia Real', 'Até R$ 550.000 a menos comparado a faculdades privadas no Brasil.'],
            ['🩺', 'Internato Garantido', 'Prática clínica desde os anos iniciais com supervisão médica.'],
            ['🌍', 'Diploma Internacional', 'Reconhecimento em diversos países + Revalida no Brasil.'],
            ['⏱️', 'Sem perda de tempo', 'Enquanto no Brasil tentam vestibular, você já está atendendo.'],
            ['📚', 'Conteúdo Completo', 'Carga horária e estrutura compatível com o Brasil.']
          ].map(([icon, title, desc], i) => (
            <div key={i} className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-bold text-xl mb-2">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* D - Desejo */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">Mais de 5.000 alunos já começaram essa jornada</h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">Veja o que dizem estudantes brasileiros que decidiram parar de esperar pelo ENEM e já estão estudando Medicina no Paraguai.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            ["Ana Luiza", "Ribeirão Preto (SP)", "Depois de 3 anos de cursinho, entrei direto. Hoje estou no 5º semestre com prática clínica real."],
            ["Carlos Henrique", "Recife (PE)", "Paguei menos em 1 ano do que pagaria em 3 meses no Brasil. E estou aprendendo mais."],
            ["Mariana Oliveira", "Belo Horizonte (MG)", "Eu duvidei, mas hoje recomendo pra todo mundo. Estrutura e professores excelentes."],
            ["Lucas Nascimento", "Porto Alegre (RS)", "Meus colegas no Brasil ainda estão tentando vestibular. Eu já atendo em hospital."],
            ["Camila Duarte", "São Luís (MA)", "A carga horária é completa, e o suporte para o Revalida é sério. Me sinto preparada."],
            ["Martín Gómez", "Corrientes (AR)", "Estudo com brasileiros, paraguaios e argentinos. A UCP é realmente internacional."]
          ].map(([nome, local, texto], i) => (
            <div key={i} className="bg-white p-6 border rounded-xl shadow text-center">
              <p className="italic text-gray-700 mb-3">“{texto}”</p>
              <div className="font-semibold text-blue-800">{nome}</div>
              <div className="text-sm text-gray-600">{local}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparação visual */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Brasil vs Paraguai</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-blue-100 text-left">
                <th className="py-3 px-4">Item</th>
                <th className="py-3 px-4">Brasil (Privada)</th>
                <th className="py-3 px-4">Paraguai (UCP)</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Mensalidade', 'R$ 9.000', 'R$ 1.500'],
                ['Cursinho (3 anos)', 'R$ 60.000', 'R$ 0'],
                ['Total 6 anos + custos', 'R$ 800.000+', 'R$ 250.000 aprox.'],
                ['Diploma aceito no Brasil?', 'Sim', 'Sim (com Revalida)'],
                ['Carga horária médica?', 'Sim', 'Sim (equivalente)']
              ].map(([item, br, py], i) => (
                <tr key={i} className="border-t">
                  <td className="py-2 px-4 font-medium">{item}</td>
                  <td className="py-2 px-4 text-red-600">{br}</td>
                  <td className="py-2 px-4 text-green-700">{py}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* A - Ação */}
      <section className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Garanta sua vaga com prioridade</h2>
        <p className="text-lg text-gray-800 mb-4">
    Preencha o formulário ou fale diretamente com um consultor via WhatsApp. Vagas limitadas por turma.
  </p>
  <p className="text-md text-gray-700 mb-6 font-medium">
    📌 Nossa equipe te acompanha desde a matrícula até o primeiro dia de aula — onde você estiver no Brasil.
  </p>
        <a href="https://wa.me/5599999999999" target="_blank" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">📲 Falar agora pelo WhatsApp</a>
      </section>

      {/* Formulário */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Pré-Matrícula</h2>
        <p className="text-md mb-6">Receba orientações para matrícula, suporte para Revalida e acompanhe as próximas turmas.</p>
        <form className="max-w-xl mx-auto text-left bg-gray-50 p-6 rounded-xl shadow space-y-4">
          <input type="text" placeholder="Nome completo" className="w-full border px-4 py-2 rounded" required />
          <input type="tel" placeholder="WhatsApp com DDD" className="w-full border px-4 py-2 rounded" required />
          <input type="email" placeholder="E-mail" className="w-full border px-4 py-2 rounded" required />
          <input type="text" placeholder="Cidade / Estado" className="w-full border px-4 py-2 rounded" required />
          <select className="w-full border px-4 py-2 rounded">
            <option>Deseja começar em qual mês?</option>
            <option>Janeiro</option>
            <option>Março</option>
            <option>Agosto</option>
          </select>
          <textarea placeholder="Observações ou dúvidas" className="w-full border px-4 py-2 rounded"></textarea>
          <button type="submit" className="bg-blue-800 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-900 transition">
            Enviar minha inscrição
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4">*Seus dados são usados apenas para atendimento da matrícula.</p>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Quero Ser Médico. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
