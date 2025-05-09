import React from 'react';

const App = () => {
  const beneficios = [
    {
      titulo: 'Sem Vestibular',
      descricao: 'Entrada direta, sem ENEM, sem cursinho e sem concorrência.',
      icone: '✅'
    },
    {
      titulo: 'Mensalidade Acessível',
      descricao: 'A partir de R$ 1.500/mês — até 70% mais barato que faculdades no Brasil.',
      icone: '💰'
    },
    {
      titulo: 'Internato Garantido',
      descricao: 'Prática clínica desde os anos iniciais, com estrutura hospitalar completa.',
      icone: '🩺'
    },
    {
      titulo: 'Alta Aprovação no Revalida',
      descricao: 'Com apoio certo, 7 em cada 10 alunos retornam com CRM em mãos.',
      icone: '📈'
    },
    {
      titulo: 'Carga Horária Equivalente',
      descricao: 'Você estuda com a mesma base exigida no Brasil, sem burocracia.',
      icone: '📚'
    }
  ];

  const depoimentos = [
    {
      nome: 'Ana Luiza',
      local: 'Ribeirão Preto (SP)',
      texto: 'Fiz 3 anos de cursinho no Brasil. Aqui entrei direto, já estou no 4º semestre com estágio e prática.',
      foto: 'https://i.pravatar.cc/150?img=3'
    },
    {
      nome: 'Carlos Henrique',
      local: 'Recife (PE)',
      texto: 'Economizei mais de R$ 500 mil em mensalidades e cursinhos. E estou aprendendo MUITO mais.',
      foto: 'https://i.pravatar.cc/150?img=5'
    },
    {
      nome: 'Fernanda Oliveira',
      local: 'Belo Horizonte (MG)',
      texto: 'O Revalida parecia um bicho de sete cabeças. Com a preparação aqui, já me sinto pronta!',
      foto: 'https://i.pravatar.cc/150?img=8'
    },
    {
      nome: 'Lucas Nascimento',
      local: 'Porto Alegre (RS)',
      texto: 'Meus amigos ainda estão no cursinho. Eu já estou no 3º ano com prática em hospital.',
      foto: 'https://i.pravatar.cc/150?img=11'
    },
    {
      nome: 'Camila Duarte',
      local: 'São Luís (MA)',
      texto: 'Achei que ia ser complicado estudar fora, mas aqui me sinto em casa. A estrutura é excelente.',
      foto: 'https://i.pravatar.cc/150?img=14'
    },
    {
      nome: 'Martín Gómez',
      local: 'Corrientes (Argentina)',
      texto: 'Estudo com brasileiros e paraguaios. Já faço parte do internato e o ensino é muito bom.',
      foto: 'https://i.pravatar.cc/150?img=17'
    }
  ];
  
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero com imagem e emoção */}
      <header className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pare de tentar. Comece a estudar Medicina agora.</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Entre direto em Medicina no Paraguai, com apoio completo para o Revalida, mensalidade acessível e estrutura moderna.</p>
      </header>

      {/* Imagens motivacionais */}
      <section className="py-10 px-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg" className="rounded-xl shadow" alt="Laboratório real" />
          <img src="https://images.pexels.com/photos/4266948/pexels-photo-4266948.jpeg" className="rounded-xl shadow" alt="Sala com alunos" />
          <img src="https://images.pexels.com/photos/5327922/pexels-photo-5327922.jpeg" className="rounded-xl shadow" alt="Prática médica" />
        </div>
      </section>

      {/* Benefícios com ícones */}
      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Por que brasileiros estão migrando para o Paraguai?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((b, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition text-center">
              <div className="text-4xl mb-4">{b.icone}</div>
              <h3 className="font-bold text-xl mb-2">{b.titulo}</h3>
              <p>{b.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparativo visual */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-6">Vestibular no Brasil vs Revalida no Paraguai</h2>
        <p className="text-md text-gray-700 mb-10 max-w-2xl mx-auto">Enquanto a concorrência para uma vaga de Medicina no Brasil passa de 300 candidatos por vaga, o Revalida é um processo direto e possível com preparação focada.</p>
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-3 px-4">Critério</th>
                <th className="py-3 px-4">Brasil (Vestibular)</th>
                <th className="py-3 px-4">Paraguai + Revalida</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">Concorrência</td>
                <td className="py-2 px-4 text-red-600">+300 candidatos por vaga</td>
                <td className="py-2 px-4 text-green-700">Prova técnica objetiva</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Tempo até formar</td>
                <td className="py-2 px-4">+8 anos (cursinho incluso)</td>
                <td className="py-2 px-4">6 anos (direto)</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Investimento total</td>
                <td className="py-2 px-4 text-red-600">R$ 800.000+</td>
                <td className="py-2 px-4 text-green-700">R$ 250.000 aprox.</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Chance de entrar</td>
                <td className="py-2 px-4">Muito baixa</td>
                <td className="py-2 px-4">100% se você decidir</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Depoimentos com foto real */}
      <section className="py-16 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Depoimentos Reais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-gray-200 text-center">
              <img src={d.foto} alt={d.nome} className="w-16 h-16 rounded-full object-cover mb-4 mx-auto border-2 border-blue-500" />
              <p className="italic text-gray-700 mb-4">“{d.texto}”</p>
              <div className="text-sm font-semibold text-blue-800">{d.nome}</div>
              <div className="text-xs text-gray-600">{d.local}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA forte */}
      <section className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Você não estará sozinho nessa jornada</h2>
        <p className="text-md text-gray-800 mb-4 max-w-xl mx-auto">
          📌 Nossa equipe te acompanha desde a matrícula até o primeiro dia de aula — onde você estiver no Brasil. Suporte, acolhimento e segurança total.
        </p>
        <a href="https://wa.me/5599999999999" target="_blank" className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
          📲 Falar agora com um consultor via WhatsApp
        </a>
      </section>

      {/* Formulário final */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-2xl font-bold mb-4">Pré-Matrícula Rápida</h2>
        <p className="text-md mb-6">Preencha os dados e receba orientação completa agora mesmo.</p>
        <form className="max-w-xl mx-auto bg-gray-50 rounded-xl shadow p-6 space-y-4 text-left">
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
