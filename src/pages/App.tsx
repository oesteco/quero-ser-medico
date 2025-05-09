
import React from 'react';

const App = () => {
  const beneficios = [
    {
      titulo: 'Sem Vestibular',
      descricao: 'Entrada direta no curso, sem ENEM, sem cursinho e sem concorrência.',
      icone: '✅'
    },
    {
      titulo: 'Mensalidade Acessível',
      descricao: 'A partir de R$ 1.500/mês. Até 70% mais barato que faculdades no Brasil.',
      icone: '💰'
    },
    {
      titulo: 'Internato Incluso',
      descricao: 'Prática garantida nos últimos anos com supervisão clínica.',
      icone: '🩺'
    },
    {
      titulo: 'Diploma com Reconhecimento',
      descricao: 'Faculdade listada no World Directory of Medical Schools.',
      icone: '🌍'
    },
    {
      titulo: 'Preparação para Revalida',
      descricao: 'Você estuda focado já para validar seu diploma no Brasil.',
      icone: '🎯'
    }
  ];

  const depoimentos = [
    {
      nome: 'Ana Paula Silva',
      local: 'Estudante de Medicina – 4º ano',
      texto: 'Depois de tentar medicina por 3 anos no Brasil, vim para o Paraguai e foi a melhor decisão da minha vida. Estou no 4º ano, economizei muito dinheiro e recebo suporte completo para o Revalida. A qualidade do ensino é excelente!',
      foto: 'https://i.pravatar.cc/150?img=3'
    },
    {
      nome: 'Lucas Nascimento',
      local: 'Porto Alegre (RS)',
      texto: 'Gastei mais de R$ 60 mil só em cursinho no Brasil. Hoje estou no 3º ano aqui e já fiz mais clínica do que muitos amigos formados no Brasil.',
      foto: 'https://i.pravatar.cc/150?img=8'
    },
    {
      nome: 'Carlos Henrique',
      local: 'Recife (PE)',
      texto: 'Só de mensalidade no Brasil eu pagaria 8 a 10 mil por mês. Aqui pago menos que um cursinho e estudo de verdade.',
      foto: 'https://i.pravatar.cc/150?img=5'
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="text-center py-16 bg-blue-50 px-4">
        <h1 className="text-5xl font-bold text-blue-900 mb-4">Quero Ser Médico</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto">
          Estude Medicina no Paraguai com entrada facilitada, mensalidade acessível e estrutura moderna. Chega de esperar o ENEM!
        </p>
      </header>

      <section className="py-10 px-6 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <img src="https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg" className="rounded-xl shadow" alt="Laboratório 1" />
          <img src="https://images.pexels.com/photos/4266948/pexels-photo-4266948.jpeg" className="rounded-xl shadow" alt="Laboratório 2" />
          <img src="https://images.pexels.com/photos/5327922/pexels-photo-5327922.jpeg" className="rounded-xl shadow" alt="Sala de Aula" />
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Por que estudar no Paraguai?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((b, i) => (
            <div key={i} className="bg-blue-50 rounded-xl p-6 shadow hover:shadow-md transition">
              <div className="text-4xl mb-4">{b.icone}</div>
              <h3 className="font-bold text-xl mb-2">{b.titulo}</h3>
              <p>{b.descricao}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Comparativo Brasil x Paraguai</h2>
        <div className="overflow-x-auto">
          <table className="w-full max-w-5xl mx-auto border border-gray-300 text-sm md:text-base">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-3 px-4 text-left">Item</th>
                <th className="py-3 px-4 text-left">Brasil (Privada)</th>
                <th className="py-3 px-4 text-left">Paraguai (UCP)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="py-2 px-4">Mensalidade</td>
                <td className="py-2 px-4">R$ 9.000</td>
                <td className="py-2 px-4">R$ 1.500</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Cursinho (3 anos)</td>
                <td className="py-2 px-4">R$ 60.000</td>
                <td className="py-2 px-4">R$ 0</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Total 6 anos + custos</td>
                <td className="py-2 px-4 font-bold text-red-600">R$ 800.000+</td>
                <td className="py-2 px-4 font-bold text-green-700">R$ 250.000 aprox.</td>
              </tr>
              <tr className="border-t">
                <td className="py-2 px-4">Diploma aceito no Brasil?</td>
                <td className="py-2 px-4">Sim</td>
                <td className="py-2 px-4">Sim (via Revalida)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Depoimentos Reais</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {depoimentos.map((d, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 border border-gray-200">
              <img src={d.foto} alt={d.nome} className="w-16 h-16 rounded-full object-cover mb-4 mx-auto border-2 border-blue-500" />
              <p className="italic text-gray-700 mb-4">“{d.texto}”</p>
              <div className="text-sm font-semibold text-center">{d.nome} <br /><span className="text-blue-600">{d.local}</span></div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Pré-Matrícula: Comece Agora</h2>
        <p className="text-lg mb-6">Preencha os dados abaixo para receber as instruções de matrícula diretamente no seu WhatsApp.</p>
        <form className="max-w-xl mx-auto bg-white rounded-xl shadow p-6 space-y-4">
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
          <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition">
            Enviar minha inscrição
          </button>
        </form>
        <p className="text-sm text-gray-700 mt-4">*Todos os dados são confidenciais e usados apenas para atendimento da matrícula.</p>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Quero Ser Médico. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default App;
