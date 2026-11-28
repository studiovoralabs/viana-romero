# V24 — Posição do seletor, CTA e preloader

- Desktop: seletor alinhado acima da categoria e da descrição, na coluna direita; galeria preservada à esquerda.
- Mobile: seletor centralizado acima das fotografias.
- CTA Informações de contato centralizado na coluna de texto em todas as larguras; preservado o preenchimento automático do assunto.
- Preloader de 5,2 segundos em toda abertura ou recarregamento da página inicial, inclusive com âncoras. Sem bloqueio por sessão; opção de pular e preferência de movimento reduzido preservadas. A contagem é decorativa.
- Preserve suas fontes licenciadas localmente; não redistribuídas. Demais configurações de publicação continuam conforme PUBLICACAO.md.

---

# Viana & Romero — V23 | Categorias e abertura integradas

Projeto completo baseado em codigo.zip. O seletor centralizado aparece entre o texto introdutório e o carrossel, inicialmente em Todos os serviços (21). Seis categorias existentes, mais Todos os serviços; a contagem e as fotos são limitadas à seleção. Não há botão Próximo: clique na imagem, use a roda sobre o carrossel ou arraste; também funciona por teclado. Os CTAs preenchem o assunto exato no formulário; os atalhos do menu usam o assunto geral correspondente. Planejamento previdenciário adicionado ao menu desktop e mobile. A logo clara/escura fornecida no ZIP foi preservada; favicon adaptado do topo do símbolo e imagem OG renovada.

Abertura conforme a prévia de 5,2 segundos, com cinco símbolos, contagem decorativa e saída ascendente. Uma vez por sessão, pode ser pulada, não aparece com preferência por movimento reduzido ou em links diretos para seções. Sem novas dependências. Abra index.html no Live Server. Mantenha seus arquivos de fontes localmente: não estão incluídos neste pacote. A publicação e pendências da V19 continuam em PUBLICACAO.md e AUDITORIA.md; as imagens remotas dos benefícios dependem de internet.

---

# Viana & Romero — V19 | Finalização técnica

Esta versão parte diretamente do arquivo atualizado.zip enviado pelo usuário. As seções e o visual foram preservados. Novidades: políticas de privacidade e cookies, página 404, imagem de compartilhamento, SEO estrutural, ajustes de acessibilidade no FAQ, preferências com validade de 180 dias e integração opcional de GA4 (desligada). 

**Prévia:** abra index.html pelo Live Server. Mantenha sua pasta original de fontes localmente; arquivos binários de fontes não são redistribuídos. Para publicação, utilize exclusivamente fontes licenciadas ou alternativas de sistema. O noindex da prévia é intencional. 

**Publicação:** consulte PUBLICACAO.md antes de executar publicar.py com o domínio definitivo. O script gera dist/ com sitemap.xml, robots.txt, canônicas e metadados completos; não modifica os arquivos da prévia. Não publique o ZIP inteiro. 

**Checklist:** AUDITORIA.md documenta os 34 itens originais, os testes e o que depende de domínio, hospedagem, contas, licenças e confirmação profissional. O Instagram ainda não foi confirmado. As políticas precisam ser validadas pelos responsáveis do escritório antes da publicação. 

---
## Histórico das versões anteriores (referência; as instruções V19 prevalecem)

# Viana & Romero — V13 | Como atendemos

- Seção clara com título editorial e quatro cards informativos (2 × 2 no desktop, uma coluna até 650 px). Texturas abstratas locais da Hero, adaptadas em bordô e cobre, sem novos downloads. Sombras difusas reproduzem o fundo de cada card; hover suave e animações de entrada de 1,95 s, respeitando movimento reduzido.
- Links “Como atendemos” dos menus desktop e mobile navegam para a nova seção. CTA direciona ao WhatsApp de Dália, conforme o CTA de contato já utilizado nos benefícios, até a seção Contato.
- Não há novas dependências. Abra index.html pelo Live Server; mantenha os arquivos de fontes que já possui em assets/fonts/ (não redistribuídos). As fotos externas dos benefícios e suas reservas locais permanecem como na V12.
- Validação: HTML e sintaxe JS conferidos; layout verificado no Chromium em 1440, 768, 390 e 320 px, com CSS/JS e imagens locais inseridos diretamente, fontes alternativas e armazenamento simulado. Navegação HTTP bloqueada pelo ambiente; teste Live Server pendente.
- Próxima etapa: FAQ por categorias. Ainda pendentes: contato, footer, revisão jurídica e técnica, políticas definitivas, SEO e publicação. O noindex provisório permanece.

---

# Viana & Romero — V12 | Entrada sincronizada da equipe

- As duas fotos e seus textos entram juntos, em um único bloco com animação de escala de 91% a 100% durante 1,95 s, sem atraso individual. Preto e branco, cor no hover/toque e zoom individual preservados.
- Removidas as linhas abaixo das apresentações e a instrução de passar o mouse/tocar.
- A indicação “Imagens ilustrativas” aparece somente abaixo do carrossel; mantida a informação sobre requisitos legais e o link oficial do INSS.
- Abra index.html pelo Live Server, preservando os arquivos de fontes já existentes em assets/fonts. As pendências de publicação da V11 permanecem, inclusive fontes licenciadas, fotos externas e noindex provisório.
- Próxima etapa: Como atendemos.

## Histórico V11 (substituído pela V12 onde aplicável)

# Viana & Romero — V11 | Equipe refinada

- Duas profissionais, com as fotografias fornecidas na ordem indicada: Eduarda e Dália. Marcos foi retirado desta seção por enquanto.
- Imagens locais WebP, preservando a resolução original de 735 × 1103; enquadramento 4:3 compacto, sem distorção.
- Retratos e textos revelados separadamente por escala de 91% a 100%, com transição de 1,95 s. Mantidos preto e branco, cor ao hover/toque, zoom e oscilação suave.
- Escala moderada dos títulos, textos complementares, faixa editorial e carrossel de benefícios. A Hero mantém sua composição de marca, com logo em escala moderada. A faixa Direito Previdenciário usa uma única família (FH Total Display Light, com fallback local) e peso.
- Abra o index.html pelo Live Server e mantenha seus arquivos de fonte licenciados em assets/fonts/. O noindex provisório, fotos remotas dos benefícios e demais pendências de publicação continuam.
- Próxima etapa: Como atendemos. Confirmar autorização das fotografias e informações profissionais antes da publicação.

## Histórico V10 e anteriores (algumas instruções antigas foram superadas)

# Viana & Romero — V10 | Nossa equipe

- Seção editorial Nossa equipe, com fundo bordô escuro, divisórias douradas, textos off-white e três retratos verticais.
- **Fotos da equipe pendentes:** os três SVGs em `assets/images/equipe/` são marcadores abstratos identificados, não retratos reais. Para instalar as fotos autorizadas, coloque os arquivos WebP (recomendado 900 × 1125 ou superior) nessa pasta e troque os `src` e `alt` dos três elementos `.team-portrait img` no index.html. Não é necessário alterar o CSS. O efeito de cor, zoom e oscilação suave se aplica às fotos definitivas.
- Hover no desktop, toque no mobile, clique e teclado para alternar o efeito. Animação reduzida conforme preferência do sistema.
- Faixa editorial atualizada para “Direito Previdenciário”, com o círculo separador e o movimento por scroll preservados.
- Header translúcido durante a rolagem, adaptando as cores ao fundo escuro da equipe. Mega menus permanecem claros e legíveis. Links para equipe agora funcionam.
- Mantenha seus arquivos de fonte licenciados em `assets/fonts/`; não foram incluídos. As fotos dos benefícios continuam com alternativa remota e reserva local, conforme V09.
- Abra o index.html no Live Server. A seção Como atendemos será a próxima. Prévia ainda com noindex. Confirmar nomes e funções antes da publicação.

---

# Viana & Romero — V09 | Fotografias

Extraia o ZIP e abra `index.html` no Live Server. Não é necessário executar comandos para visualizar as fotografias alternativas.

- As 21 páginas de fotos do Pexels foram conferidas e suas referências constam em FONTES_DAS_FOTOS.md.
- O navegador tenta carregar automaticamente as imagens de 1600 px de largura, apenas quando o carrossel se aproxima da área visível, e conforme a seleção. Requisições anônimas, sem credenciais e sem referrer. As fotos da V08 continuam como reserva local.
- **Limitação:** o ambiente de criação não permitiu baixar os arquivos externos nem verificar o CDN ao vivo. As novas fotos não estão fisicamente incorporadas no ZIP; dependem de conexão e da disponibilidade do CDN. A visualização offline mantém as imagens antigas. A V09 ainda é uma prévia.
- Para publicação, recomendamos hospedar as fotos localmente após conferir direitos de imagem, autorização e licenciamento; não apresentar as pessoas retratadas como clientes ou beneficiários reais. O script opcional `atualizar_fotos.py` pode auxiliar na localização dos arquivos, mas não é obrigatório para abrir a prévia.
- Header, Hero, Sobre nós, carrossel, animações e cookies da V08 preservados. Mantenha seus arquivos de fontes em assets/fonts; não foram redistribuídos.
- Nenhuma seção nova foi implementada. Próxima etapa: Nossa equipe.

---

# Viana & Romero — V07 | Benefícios do INSS

## Atualização V07

- Faixa editorial “Direitos que transformam vidas” vinculada ao scroll: para baixo, desloca-se à esquerda; para cima, à direita. Sem autoplay.
- Carrossel vertical com 21 itens, fotos em camadas, imagem central colorida e adjacentes em preto e branco. Sem setas.
- Desktop: role sobre a área das fotos; fora dela, a página rola normalmente. Gestos prolongados e limites também liberam a rolagem.
- Celular: arraste horizontalmente as imagens, mantendo livre o scroll vertical. Também há seleção direta por lista e navegação pelo teclado.
- As 18 fotos foram extraídas das capturas de referência fornecidas e três itens adicionais reutilizam fotos relacionadas. Imagens provisórias de baixa resolução; substituir por originais autorizados antes da publicação.
- Animações de entrada de textos/CTAs entre 1,55 e 1,65 s, transição das fotos em 1,25 s e drawer em 1,25 s. Respeita preferência de movimento reduzido.
- Textos dos benefícios em HTML; sem JavaScript permanecem visíveis como lista. Links do menu de benefícios selecionam os itens.
- Testes isolados em Chromium a 1440, 390 e 320 px, com HTML/CSS/JS inseridos diretamente e armazenamento simulado. A política do ambiente bloqueia navegação direta por arquivo e URL; Live Server ainda deve ser validado localmente.
- Fontes: preserve os arquivos OTF originais já existentes em assets/fonts. Nenhum arquivo de fonte é redistribuído neste pacote. O Instagram ainda não tem URL oficial.
- Próxima etapa: Nossa equipe. Depois: Como atendemos, FAQ por categoria, contato/formulário, footer, políticas definitivas, SEO e publicação. O noindex provisório permanece até a publicação.

---

# Viana & Romero — V06 | Refinamento editorial

Abra index.html pelo Live Server. Não há dependências.

## Fontes (V06)
A referência Wordstone combina FH Total Display, Suisse Int’l e Times Now. A V06 aplica FH Total Display Light à composição editorial e títulos grandes, Times Now (itálico) aos rótulos editoriais e Suisse Intl aos textos menores e CTAs. Para títulos, a alternativa local é FH Total Display Test (arquivos que você já possui); textos menores usam Helvetica Neue/Arial quando Suisse não está disponível.

**Para testar com os OTF que você já possui:** mantenha/copie o conteúdo da pasta assets/fonts da sua versão atual para a mesma pasta da V06, sem subpastas ou alteração dos nomes dos OTF. Preserve os novos arquivos CSS da V06. Ou extraia diretamente para assets/fonts o ZIP original que você enviou. Nenhum arquivo de fonte é distribuído no ZIP do site. Os nomes exatos já estão configurados. Os OTF Test têm apenas 71 caracteres, não incluem acentos e vários sinais do português, e não são equivalentes à edição comercial completa. O CSS restringe o uso dos Test aos caracteres presentes, usando uma fonte substituta para os demais. Não publique usando fontes de teste sem autorização.

**Para produção, com licenças web próprias:** coloque as fontes completas na pasta assets/fonts com os nomes FH-Total-Display-Light.woff2, FH-Total-Display-Regular.woff2, Times-Now-Italic.woff2, Suisse-Intl-Regular.woff2 e Suisse-Intl-Medium.woff2, ou ajuste os nomes no CSS. Ative `assets/fonts/fontes-licenciadas.css` no head, antes de fontes-opcionais.css. Se preferir desativar os Test, retire o link fontes-opcionais.css. As fontes licenciadas não foram fornecidas e não estão incorporadas. O layout funciona também com as alternativas de sistema. Ctrl+F5; DevTools > Network > Font e Computed > Rendered Fonts para verificar a fonte real.

## V03
Menu mobile entra da direita em 1,05 s, apenas ícone de três traços, títulos leves, sem contatos repetidos; Escritório sem artigo. Mega menu sem imagens, abertura mais suave. Ícone de cookies fixo à esquerda, inclusive no menu mobile; painel com escolha de aceitar, rejeitar e salvar e política provisória; guarda opção localmente. Não há GA4 ou rastreadores nesta prévia.

O noindex é intencional na prévia, seções futuras ainda não existem, Instagram não informado. Antes de publicação, revisar política e dados profissionais, SEO e domínio, licenciamento de fontes, integrações e logo.

## V04 — Hero
Arte abstrata original em bordô/cobre, criada para esta versão; fundo e quadrado central em WebP. Logo original recortada da V02, sem deformação. A máscara CSS abre simetricamente do centro às bordas em 2,35 s, após 0,3 s; a imagem não muda de tamanho nem posição. A animação é desativada pela preferência de movimento reduzido. Header, cookies e menu mobile da V03 preservados. O fundo é uma proposta visual substituível. A Hero não utiliza os arquivos de fontes para desenhar a logo (imagem original).

## V04 — Painel de cookies atualizado
Ícone fixo no canto inferior esquerdo. Caixa central no desktop, tela inteira no mobile/tablet, animação de baixo para cima de 1,05 s (e saída inversa); conteúdo interno rolável e ações fixas. Categorias expansíveis, toggle de análise inicialmente desligado, preferências salvas em localStorage, foco e Escape tratados por dialog nativo. Não há rastreadores; o painel abre sob demanda. O consentimento deverá ser solicitado novamente se houver integrações opcionais futuras. A política é provisória e não substitui revisão jurídica.

Veja TEXTOS_E_ETAPAS.md para a nova ordem e copy proposta. As próximas seções ainda não estão implementadas; seus links exibem um aviso na prévia. O noindex permanece nesta etapa de desenvolvimento.

## V05 — Sobre nós e controle de cookies único
Seção Sobre nós com linha divisória, texto editorial à esquerda, parágrafos e CTAs à direita; em telas menores, leitura em uma coluna. O link Sobre nós dos menus navega até a seção. Os botões Benefícios do INSS e Nossa equipe apontam para as etapas futuras e mostram o aviso provisório.
Existe apenas um botão de cookies no DOM. Durante a abertura do menu modal, o mesmo elemento é movido para dentro do diálogo, fora do painel animado, para continuar fixo e acessível acima do menu. Ao fechar, volta ao seu ponto original. O diálogo de cookies abre acima do menu, e preserva o retorno de foco. Não há novos rastreadores.

## V06 — Tipografia, escala e movimento
Textos principais menores (32–54 px desktop, 28–35 px mobile), texto complementar menor e sem serifa, espaçamentos revistos, CTAs de contorno e cantos retos que se arredondam no hover/foco, sem preenchimento. Chevron fino somente nos CTAs da seção. Entrada progressiva por bloco com IntersectionObserver, sem animação quando o usuário prefere movimento reduzido. A estrutura das seções e os menus/cookies V05 permanecem. Os links das seções futuras ainda exibem aviso provisório.


## V08 — Ajustes
- Faixa Previdenciário com círculos CSS.
- Retirados seletor e instrução anterior. Nota discreta sob o carrossel; clique na foto ativa avança e clique nas laterais seleciona. Roda do mouse em qualquer largura, gestos verticais/horizontais sobre fotos e teclado. A página continua rolando fora da área das imagens.
- Fotos originais de captura tratadas com interpolação e nitidez leve; não constituem alta resolução real. O ambiente bloqueou downloads externos. Há uma seleção de alternativas de banco de imagens em FONTES_DAS_FOTOS.md. Após verificar licença e autorização, execute `python atualizar_fotos.py` para tentar baixar e trocar as imagens localmente. Em caso de falha a foto anterior é preservada. O script não é necessário para abrir o site e não é executado no navegador.
- Fontes originais não distribuídas; mantenha os arquivos licenciados/teste que já possui em assets/fonts.


## V14 — FAQ
- Nova seção de perguntas frequentes com filtro por categorias.
- Layout editorial integrado ao restante do site.
- Accordion com abertura suave.
- Em telas menores, as categorias rolam horizontalmente e as perguntas ficam bem legíveis.


## V15 — Ajuste da FAQ
- Filtro por categoria convertido para select centralizado.
- Visual sem border-radius no seletor.
- Perguntas com tipografia menor e mais elegante.


## V16 — Contato
Seção de fundo bordô, campos com linhas finas e layout responsivo. Nome completo, e-mail opcional, assunto, destinatário e mensagem. O botão abre o WhatsApp escolhido com o texto preenchido; o visitante confirma o envio no WhatsApp. Não há backend, armazenamento de formulário, coleta de documentos ou envio automático. Os dados passam ao WhatsApp na abertura do link. Instagram e políticas definitivas continuam pendentes. Preserve os arquivos licenciados das fontes locais.


## V17 — Contatos diretos
Os links de Eduarda e Dália exibem apenas os nomes e possuem transição suave de letter-spacing no hover, foco e toque. Os destinos de WhatsApp foram preservados.


## V18 — Rodapé
Footer off-white, logo à esquerda, três colunas de navegação e copyright. No celular, logo acima das colunas. Links internos e WhatsApp individuais preservados; preferências de cookies abrem o painel existente. Instagram e política de privacidade definitiva aguardam a próxima etapa. Não foi incluída nenhuma URL fictícia.


## V20 — Ajustes mobile e WhatsApp
- Mensagem do formulário identificada pelo prefixo `Mensagem:`.
- Eduarda e Dália lado a lado em telas menores, preservando a animação de espaçamento.
- Copyright, políticas e preferências de cookies centralizados na base do rodapé mobile.
- Configurações de publicação e demais seções preservadas.


## V25 — Alinhamento do CTA dos benefícios
O botão Informações de contato fica centralizado no eixo do conjunto contador/barra de progresso em todas as larguras. Mantidos o filtro, o preenchimento do assunto e o preloader da V24.


## V26 — Seletor centralizado e martelo
O seletor e sua legenda ficam centralizados no mesmo eixo do CTA e da barra de progresso em desktop e celular. O martelo jurídico foi redesenhado em SVG, com cabeça simétrica, cabo conectado e base independente. A duração, os demais símbolos e a exibição do preloader em cada abertura permanecem inalterados.


## V27 — Alinhamento e martelo
Seletor, legenda, barra de progresso e CTA centralizados no eixo da coluna inteira (desktop) e da área útil (mobile). Martelo original em SVG sólido dourado, com cabo diagonal e base de dois níveis, inspirado na referência. Duração, outros símbolos e repetição do preloader preservados.


## V29 — Ícones aprovados do preloader
Substituição exclusiva dos cinco símbolos da abertura por contornos SVG derivados dos modelos aprovados: escudo, balança, maleta, martelo e tribunal. Dourado sólido #D9BF78, detalhe claro #F8F3EB no escudo, sem gradientes, sombras ou 3D. Duração, sequência, transições, recarregamento e demais funcionalidades preservados.


## V30 — Favicon
Logo completa oficial (versão clara, com fundo bordô), sem recorte do símbolo. ICO em cinco tamanhos, PNG de 192 px e ícone Apple de 180 px. Referências atualizadas nas quatro páginas com versão de cache. As demais funções e o preloader não foram alterados.


## V31 — Favicon legível e logo no preloader
Favicon compacto V/R recortado das letras originais da marca, dourado e marfim sobre bordô, com versões 16, 32 e ICO multirresolução. Apple Touch mantém a marca completa. O preloader usa o arquivo original logo-light.png em vez de texto digitado; cinco símbolos, duração e transições preservados.


## V32 — Favicon
Logo oficial completa, sem monograma, ocupando a largura disponível, sobre fundo bordô. O preloader permanece como na V31.


## V33 — Favicon quadrado com a logo completa
Composição quadrada 1:1 da identidade original: símbolo dourado na parte superior, nome “Viana & Romero” em marfim e “ADVOCACIA” em dourado abaixo. A composição foi extraída da logo oficial em alta resolução, sem redesenhar o lettering. Arquivos PNG 16, 32, 180, 192 e 512 px e ICO multirresolução; referências com cache-busting atualizadas nas quatro páginas. O preloader e o restante do site não foram alterados.
