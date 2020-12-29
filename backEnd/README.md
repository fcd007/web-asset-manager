# ams-projeto descrição RN, RF, RNF

# Recuperação de senha
**RF: Requisitos Funcionais**

- O usuário poderá recuperar sua senha informando o e-mail válido, previamente cadastrado no sistema;
- O usuário deve receber um e-mail com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF: Requisitos Não Funcionais**

- Utilizar Mailtrap para testar envio de e-mail em ambientes de desenvolvimento;
- Utilizar o Amazon SES para envios em produção;
- O envio de e-mail deve acontecer em segundo plano (background job);

**RN: Regras de Negócio**

- O link enviado por e-mail para resetar senha, deve expirar em até 1 hora/60 minutos;
- O usuário precisa confirmar a nova senha ao resetar sua senha;

# Atualização de perfil
**RF: Requisitos Funcionais**
- O usuário deve poder atualizar seu perfil: nome, email e senha;

**RN: Regras de Negócio**
- O usuário não poder alterar seu e-mail para um e-mail já utilizado;
- Para atualizar sua senhao usuário deve informar a senha antiga;
- Para atualizar sua senha, o usuário precisa confirmar a nova senha;

# Painel do funcionário
**RF: Requisitos Funcionais**

- O usuário deve poder listar seus assets específico;
- O funcionário deve receber uma notificação sempre que ocorrer um novo asset atribuído;
- O funcionário deve poder visualizar as notificações não lidas;

**RNF: Requisitos Não Funcionais**

- Os agendamentos do prestador no dia devem ser amazenados em cache;
- A notificações do prestador devem ser amazenadas no mongoDB;
- As notifições do prestador devem ser enviadas em tempo-real usando Socket.io;

**RN: Regras de Negócio**

- O notificação deve ter um status lida ou não-lida para o controle do prestador;

# Asset Manager
**RF: Requisitos Funcionais**

- O usuário deve poder listar todos os ativos cadastrados;
- O usuário deve poder listar os itens disponível para mudança;
- O usuário deve poder listar disponíveis por id, nome;
- O usuário deve poder realizar um cadastro de funcionários ou movimentações;

**RNF: Requisitos Não Funcionais**

- A listagens deve ser armazenadas em cache;

**RN: Regras de Negócio**
