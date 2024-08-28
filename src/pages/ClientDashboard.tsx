import React from 'react';

const ClientDashboard: React.FC = () => {
  return (
    <div>
      <h1>Client Dashboard</h1>
      <p>Bem-vindo ao painel do cliente.</p>
      {/* Adicione componentes e funcionalidades específicas para o cliente aqui */}
      <section>
        <h2>Meus Planos</h2>
        {/* Lista de planos assinados, opções para alterar planos, etc. */}
      </section>
      <section>
        <h2>Histórico de Pagamentos</h2>
        {/* Componentes para exibir o histórico de pagamentos */}
      </section>
    </div>
  );
};

export default ClientDashboard;
