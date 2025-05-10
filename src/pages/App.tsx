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
},
{
  titulo: 'Acompanhamento Completo',
  descricao: 'Você terá suporte da matrícula até o primeiro dia de aula — incluindo ajuda com documentação, viagem e adaptação.',
  icone: '🧭'
}
    ];
const labImagesSection = (
  <section className="py-16 px-4 md:px-0 bg-gray-50">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-4">Nossa Estrutura Laboratorial</h2>
      <p className="text-md text-gray-700 text-center max-w-2xl mx-auto mb-8">
        Contamos com laboratórios modernos e equipados com as mais recentes tecnologias para sua formação médica.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Lab 1 */}
        <div>
          <img 
            src="https://images.unsplash.com/photo-1581093458791-9acb5c798a1b?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" 
            className="rounded-xl shadow mb-4 w-full h-64 object-cover" 
            alt="Laboratório de Anatomia" 
          />
          <h3 className="text-xl font-semibold mb-1">Laboratório de Anatomia</h3>
          <p className="text-gray-600">Estudos práticos com equipamentos modernos para dissecação e análise.</p>
        </div>

        {/* Lab 2 */}
        <div>
          <img 
            src="https://images.unsplash.com/photo-1616578734656-aa8e614295bc?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" 
            className="rounded-xl shadow mb-4 w-full h-64 object-cover" 
            alt="Laboratório de Microscopia" 
          />
          <h3 className="text-xl font-semibold mb-1">Laboratório de Microscopia</h3>
          <p className="text-gray-600">Equipado com microscópios de alta precisão para análises celulares.</p>
        </div>

        {/* Lab 3 */}
        <div>
          <img 
            src="https://images.unsplash.com/photo-1581093588401-cddd12639ddf?auto=compress&cs=tinysrgb&w=800&h=500&fit=crop" 
            className="rounded-xl shadow mb-4 w-full h-64 object-cover" 
            alt="Centro de Simulação" 
          />
          <h3 className="text-xl font-semibold mb-1">Centro de Simulação</h3>
          <p className="text-gray-600">Simuladores de alta fidelidade para prática de atendimentos médicos.</p>
        </div>
      </div>
    </div>
  </section>
);
 
  const depoimentos = [
    
    {
      nome: 'Carlos Henrique',
      local: 'Ribeirão Preto (SP)',
      texto: 'Tentei vestibular no Brasil por 3 anos sem sucesso. Com a equipe do Quero Ser Médico, em apenas 3 meses já estava matriculado e assistindo aulas. O suporte para documentação e moradia foi essencial.',
      foto: 'https://i.pravatar.cc/150?img=3'
    },
    {
      nome: 'Ana Luiza',
      local: 'Recife (PE)',
      texto: 'Economizei mais de R$ 500 mil em mensalidades e cursinhos. E estou aprendendo MUITO mais.',
      foto: 'https://i.pravatar.cc/150?img=5'
    },
    {
      nome: 'Fernando Oliveira',
      local: 'Belo Horizonte (MG)',
      texto: 'O Revalida parecia um bicho de sete cabeças. Com a preparação aqui, já me sinto pronto!',
      foto: 'https://i.pravatar.cc/150?img=8'
    },
    {
      nome: 'Lucas Nascimento',
      local: 'Porto Alegre (RS)',
      texto: 'Meus amigos ainda estão no cursinho. Eu já estou no 3º ano com prática em hospital.',
      foto: 'https://i.pravatar.cc/150?img=11'
    },
    {
      nome: 'Camilo Duarte',
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
    
  return (
    <div className="bg-white text-gray-800">
      {/* Hero com imagem e emoção */}
      <header className="bg-violet-500 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Pare de tentar! Comece a estudar Medicina agora.</h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto">Entre direto em Medicina no Paraguai, com apoio completo para o Revalida, mensalidade acessível e estrutura moderna.</p>
      </header>

     {/* Imagens motivacionais */}
<section className="py-10 px-6 bg-white">
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
    <img 
      src="https://images.pexels.com/photos/8460158/pexels-photo-8460158.jpeg?auto=compress&cs=tinysrgb&w=800" 
      alt="Laboratório real" 
      className="rounded-xl shadow w-full h-64 object-cover"
    />
    <img 
      src="https://images.pexels.com/photos/4266948/pexels-photo-4266948.jpeg?auto=compress&cs=tinysrgb&w=800" 
      alt="Sala com alunos" 
      className="rounded-xl shadow w-full h-64 object-cover"
    />
    <img 
      src="https://images.pexels.com/photos/5327922/pexels-photo-5327922.jpeg?auto=compress&cs=tinysrgb&w=800" 
      alt="Prática médica" 
      className="rounded-xl shadow w-full h-64 object-cover"
    />
  </div>
</section>

{/* Estrutura Laboratorial */}
{labImagesSection}

{/* Bloco emocional: Você nunca estará sozinho */}
       
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
  <section className="py-16 px-4 sm:px-6 bg-gray-100">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold text-blue-900 mb-4">Você nunca estará sozinho</h2>
      <p className="text-md text-gray-800 mb-4">
        Desde a matrícula até o primeiro dia de aula, nossa equipe estará ao seu lado.
      </p>
      <p className="text-md text-gray-800">
        Suporte completo com documentação, adaptação, viagem e acompanhamento por WhatsApp — onde você estiver no Brasil.
      </p>
    </div>
    <div className="flex justify-center">
      <img 
        src="https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg" 
        alt="Estudantes felizes acolhidos" 
        className="rounded-xl shadow-lg w-full max-w-md h-auto"
      />
    </div>
  </div>
</section>
        {/* Perguntas Frequentes */}
<section className="py-16 px-6 bg-white">
  <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Perguntas Frequentes</h2>
  <div className="max-w-4xl mx-auto space-y-6">
    {[
      {
        pergunta: 'O diploma é válido no Brasil?',
        resposta: 'Sim! Após concluir o curso, o aluno pode realizar o Revalida, exame oficial que valida diplomas estrangeiros. Com apoio e preparação adequada, muitos brasileiros conseguem o CRM com sucesso.'
      },
      {
        pergunta: 'Como é feito o Revalida?',
        resposta: 'O Revalida é aplicado pelo INEP (Ministério da Educação) e ocorre em duas etapas: uma teórica objetiva/dissertativa e outra prática. Nossa equipe auxilia na preparação desde o primeiro ano.'
      },
      {
        pergunta: 'Preciso de visto para estudar no Paraguai?',
        resposta: 'Não. Brasileiros podem estudar no Paraguai apenas com RG e CPF válidos. A documentação de estudante é feita com nosso apoio após a matrícula.'
      },
      {
        pergunta: 'É seguro viver no Paraguai?',
        resposta: 'Sim. As cidades universitárias possuem custo de vida acessível, boa infraestrutura e comunidades estudantis brasileiras ativas, com total suporte local.'
      },
      {
        pergunta: 'Posso trabalhar durante os estudos?',
        resposta: 'Você poderá participar de estágios e programas internos de prática supervisionada, principalmente nos anos avançados. Trabalhos formais dependem da legislação local.'
      },
      {
        pergunta: 'As aulas são em português?',
        resposta: 'Sim. As universidades parceiras possuem aulas em português, além de material adaptado para brasileiros, garantindo aprendizado fluido.'
      },
      {
        pergunta: 'A formação é aceita em outros países?',
        resposta: 'Sim. O diploma pode ser validado também em países como Argentina, Bolívia, Chile e, com processos específicos, até nos EUA e Europa.'
      },
      {
        pergunta: 'É possível parcelar a matrícula e os custos iniciais?',
        resposta: 'Sim. Oferecemos planos acessíveis e facilitados para matrícula, além de opções de moradia com bom custo-benefício.'
      },
      {
        pergunta: 'Tenho suporte para moradia e adaptação?',
        resposta: 'Sim! A equipe acompanha desde a chegada com orientações sobre moradia, transporte, saúde local e adaptação ao novo ambiente.'
      },
      {
        pergunta: 'Como faço para começar?',
        resposta: 'Basta preencher o formulário de pré-matrícula ou falar diretamente com um de nossos consultores via WhatsApp. Todo o processo é rápido e orientado.'
      }
    ].map((item, index) => (
      <div key={index} className="bg-gray-50 p-5 rounded-xl shadow">
        <h3 className="font-semibold text-blue-800 text-lg mb-2">❓ {item.pergunta}</h3>
        <p className="text-gray-700">{item.resposta}</p>
      </div>
    ))}
  </div>
</section>

      
      
      {/* CTA forte */}
      <section className="py-16 px-6 bg-blue-100 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">Comece agora com apoio total da nossa equipe</h2>
        <p className="text-md text-gray-800 mb-4 max-w-xl mx-auto">
          📌 Nossa equipe te acompanha desde a matrícula até o primeiro dia de aula — onde você estiver no Brasil. Suporte, acolhimento e segurança total.
        </p>
       <a 
  href="https://wa.me/5567981432355" 
  target="_blank" 
  rel="noopener noreferrer"
  className="inline-block bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition"
>
  📲 Falar agora com um consultor via WhatsApp
</a>

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
      </div>

export default App;
