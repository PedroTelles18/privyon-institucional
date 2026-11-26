export const scoreGeral = 78;

export const kpis = [
  { label: "Score de conformidade", value: "78%", delta: "+6 pts no trimestre", tone: "primary" as const },
  { label: "Riscos abertos", value: "14", delta: "3 críticos", tone: "destructive" as const },
  { label: "Solicitações de titulares", value: "27", delta: "5 fora do prazo", tone: "accent" as const },
  { label: "Bases de dados monitoradas", value: "9", delta: "2 com alerta", tone: "muted" as const },
];

export const evolucao = [
  { mes: "Jan", score: 52, riscos: 31 },
  { mes: "Fev", score: 57, riscos: 28 },
  { mes: "Mar", score: 61, riscos: 26 },
  { mes: "Abr", score: 65, riscos: 22 },
  { mes: "Mai", score: 69, riscos: 19 },
  { mes: "Jun", score: 72, riscos: 17 },
  { mes: "Jul", score: 78, riscos: 14 },
];

export const maturidadePorArea = [
  { area: "RH", score: 84 },
  { area: "Comercial", score: 71 },
  { area: "Marketing", score: 62 },
  { area: "TI", score: 88 },
  { area: "Financeiro", score: 76 },
  { area: "Jurídico", score: 91 },
];

export const riscosPorSeveridade = [
  { nivel: "Crítico", total: 3 },
  { nivel: "Alto", total: 5 },
  { nivel: "Médio", total: 4 },
  { nivel: "Baixo", total: 2 },
];

export const pendencias = [
  { titulo: "Revisar contrato com operador de cloud", area: "Jurídico", prazo: "22/08", severidade: "Crítico" },
  { titulo: "Definir prazo de retenção de currículos", area: "RH", prazo: "27/08", severidade: "Alto" },
  { titulo: "Anonimizar base de leads antiga", area: "Marketing", prazo: "02/09", severidade: "Alto" },
  { titulo: "Publicar aviso de cookies atualizado", area: "Marketing", prazo: "09/09", severidade: "Médio" },
  { titulo: "Treinamento LGPD para novos colaboradores", area: "RH", prazo: "15/09", severidade: "Baixo" },
];

export const auditorias = [
  { id: "AUD-2026-014", nome: "Diagnóstico geral LGPD", responsavel: "Camila Duarte", progresso: 92, status: "Em revisão", atualizado: "hoje" },
  { id: "AUD-2026-013", nome: "Auditoria de RH e recrutamento", responsavel: "Rafael Lima", progresso: 100, status: "Concluída", atualizado: "2 dias" },
  { id: "AUD-2026-012", nome: "Fornecedores e operadores", responsavel: "Bianca Alves", progresso: 46, status: "Em andamento", atualizado: "3 dias" },
  { id: "AUD-2026-011", nome: "Segurança da informação", responsavel: "Tiago Moura", progresso: 18, status: "Em andamento", atualizado: "5 dias" },
  { id: "AUD-2026-010", nome: "Marketing e cookies", responsavel: "Camila Duarte", progresso: 0, status: "Planejada", atualizado: "1 semana" },
];

export const checklist = [
  { artigo: "Art. 7º", item: "Base legal definida para cada tratamento", situacao: "Conforme" },
  { artigo: "Art. 9º", item: "Aviso de privacidade acessível e atualizado", situacao: "Conforme" },
  { artigo: "Art. 11", item: "Controles reforçados para dados sensíveis", situacao: "Parcial" },
  { artigo: "Art. 18", item: "Canal de atendimento ao titular em 15 dias", situacao: "Parcial" },
  { artigo: "Art. 37", item: "Registro das operações de tratamento (ROPA)", situacao: "Conforme" },
  { artigo: "Art. 41", item: "Encarregado (DPO) nomeado e divulgado", situacao: "Não conforme" },
  { artigo: "Art. 46", item: "Medidas técnicas de segurança documentadas", situacao: "Parcial" },
  { artigo: "Art. 48", item: "Plano de resposta a incidentes testado", situacao: "Não conforme" },
];

export const inventario = [
  { processo: "Recrutamento e seleção", area: "RH", dados: "Nome, CPF, currículo", sensivel: false, base: "Legítimo interesse", retencao: "12 meses", risco: "Médio" },
  { processo: "Folha de pagamento", area: "RH", dados: "CPF, dados bancários, dependentes", sensivel: true, base: "Obrigação legal", retencao: "5 anos", risco: "Alto" },
  { processo: "CRM de vendas", area: "Comercial", dados: "Nome, e-mail, telefone", sensivel: false, base: "Execução de contrato", retencao: "24 meses", risco: "Baixo" },
  { processo: "Campanhas de e-mail", area: "Marketing", dados: "E-mail, comportamento de navegação", sensivel: false, base: "Consentimento", retencao: "18 meses", risco: "Médio" },
  { processo: "Plano de saúde", area: "RH", dados: "Dados de saúde de titulares", sensivel: true, base: "Obrigação legal", retencao: "5 anos", risco: "Crítico" },
  { processo: "Suporte ao cliente", area: "Operações", dados: "Nome, e-mail, histórico de tickets", sensivel: false, base: "Execução de contrato", retencao: "36 meses", risco: "Baixo" },
];

export const titulares = [
  { protocolo: "SOL-3841", tipo: "Exclusão de dados", titular: "M. Ferreira", canal: "Portal", prazo: "3 dias", status: "Em análise" },
  { protocolo: "SOL-3840", tipo: "Acesso aos dados", titular: "J. Santana", canal: "E-mail", prazo: "6 dias", status: "Em análise" },
  { protocolo: "SOL-3838", tipo: "Portabilidade", titular: "A. Ribeiro", canal: "Portal", prazo: "atrasada", status: "Atrasada" },
  { protocolo: "SOL-3835", tipo: "Revogação de consentimento", titular: "L. Prado", canal: "Portal", prazo: "concluída", status: "Concluída" },
  { protocolo: "SOL-3829", tipo: "Correção de dados", titular: "R. Nunes", canal: "Telefone", prazo: "concluída", status: "Concluída" },
];

export const incidentes = [
  { id: "INC-021", titulo: "Envio de planilha para destinatário incorreto", severidade: "Alto", titularesAfetados: 148, anpd: "Comunicada", status: "Em contenção", data: "14/08/2026" },
  { id: "INC-020", titulo: "Tentativa de acesso indevido ao CRM", severidade: "Médio", titularesAfetados: 0, anpd: "Não aplicável", status: "Encerrado", data: "02/08/2026" },
  { id: "INC-019", titulo: "Backup sem criptografia em ambiente legado", severidade: "Crítico", titularesAfetados: 2310, anpd: "Comunicada", status: "Plano de ação", data: "21/07/2026" },
  { id: "INC-018", titulo: "Log com dados pessoais em texto claro", severidade: "Baixo", titularesAfetados: 12, anpd: "Não aplicável", status: "Encerrado", data: "05/07/2026" },
];

export const bases = [
  { nome: "prod-postgres-core", tipo: "PostgreSQL", ambiente: "Produção", pii: 42, sensiveis: 8, criptografia: "Ativa", ultimoScan: "há 2 h", status: "Saudável" },
  { nome: "prod-mysql-crm", tipo: "MySQL", ambiente: "Produção", pii: 27, sensiveis: 0, criptografia: "Ativa", ultimoScan: "há 4 h", status: "Atenção" },
  { nome: "analytics-bigquery", tipo: "BigQuery", ambiente: "Analítico", pii: 19, sensiveis: 3, criptografia: "Ativa", ultimoScan: "há 1 dia", status: "Saudável" },
  { nome: "legacy-oracle-rh", tipo: "Oracle", ambiente: "Legado", pii: 36, sensiveis: 14, criptografia: "Parcial", ultimoScan: "há 6 dias", status: "Crítico" },
  { nome: "s3-documentos", tipo: "Object storage", ambiente: "Produção", pii: 11, sensiveis: 2, criptografia: "Ativa", ultimoScan: "há 8 h", status: "Saudável" },
];

export const alertasMonitoramento = [
  { hora: "11:42", texto: "Coluna cpf_cliente detectada sem máscara em legacy-oracle-rh", nivel: "Crítico" },
  { hora: "09:15", texto: "Acesso em massa (12k linhas) na tabela leads por usuário de integração", nivel: "Alto" },
  { hora: "08:03", texto: "Novo campo com dados de saúde identificado em prod-postgres-core", nivel: "Alto" },
  { hora: "ontem", texto: "Retenção excedida: 4.812 registros de currículos com mais de 12 meses", nivel: "Médio" },
];

export const relatorios = [
  { nome: "Relatório de Impacto (RIPD)", descricao: "Documento completo por processo de tratamento de alto risco.", formato: "PDF", atualizado: "18/08/2026" },
  { nome: "Registro de operações (ROPA)", descricao: "Inventário consolidado com bases legais e prazos de retenção.", formato: "XLSX", atualizado: "18/08/2026" },
  { nome: "Evidências de auditoria", descricao: "Pacote com respostas, anexos e trilha de aprovações.", formato: "ZIP", atualizado: "16/08/2026" },
  { nome: "Sumário executivo", descricao: "Visão de score, riscos e plano de ação para a diretoria.", formato: "PDF", atualizado: "12/08/2026" },
];

export const trilha = [
  { quando: "hoje 11:20", quem: "Camila Duarte", acao: "aprovou a evidência do checklist Art. 37" },
  { quando: "hoje 09:58", quem: "Sistema", acao: "executou scan em prod-postgres-core" },
  { quando: "ontem 17:04", quem: "Rafael Lima", acao: "encerrou a auditoria AUD-2026-013" },
  { quando: "ontem 15:31", quem: "Bianca Alves", acao: "registrou o incidente INC-021" },
];