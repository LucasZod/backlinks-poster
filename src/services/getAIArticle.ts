import axios from 'axios'

export const getAIArticle = async (backlink: string, keywords: string[]) => {
  const prompt = `
    Crie um artigo original de alta qualidade sobre o seguinte tópico:
    - Backlink: ${backlink}
    - Palavras-chave: ${keywords.join(', ')}

    O artigo deve ser relevante e de interesse para o público do backlink, 
    incluindo o backlink como parte do conteúdo de forma natural.
  `

  try {
    // const response = await axios.post(
    //   'https://api.openai.com/v1/completions',
    //   {
    //     model: 'text-davinci-003',
    //     prompt: prompt,
    //     max_tokens: 1000,
    //   },
    //   {
    //     headers: {
    //       Authorization: `Bearer YOUR_OPENAI_API_KEY`,
    //     },
    //   }
    // )

    // return response.data.choices[0].text.trim()
    return getArticleMock()
  } catch (error) {
    console.error('Erro ao gerar artigo com OpenAI:', error)
    throw new Error('Falha na geração do artigo.')
  }
}

const getArticleMock = async () => {
  return `
<!-- wp:paragraph -->
<p>Introdução: Alçando Voos Mais Altos nas Vendas</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Aumentar as vendas é o desejo de qualquer empresa. Seja você um pequeno empreendedor ou um grande empresário, a busca por resultados cada vez melhores é constante. Mas como transformar esse desejo em realidade? Neste artigo, vamos desvendar as principais estratégias para impulsionar suas vendas e alcançar o sucesso que você merece.</p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>A jornada para aumentar as vendas envolve uma combinação de fatores, desde a compreensão profunda do seu público-alvo até a implementação de táticas de marketing eficazes. Ao longo deste guia, vamos explorar cada um desses aspectos e fornecer insights práticos para que você possa aplicar em seu negócio.</p>
<!-- /wp:paragraph -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">1. Conhecendo Seu Cliente: A Chave para Vendas de Sucesso</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>O primeiro passo para aumentar as vendas é conhecer profundamente seu cliente. Ao entender suas necessidades, desejos e dores, você poderá desenvolver produtos e serviços que realmente façam a diferença em sua vida.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Crie personas:</strong> Desenvolva perfis detalhados de seus clientes ideais, incluindo informações demográficas, comportamentais e psicográficas.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Realize pesquisas:</strong> Utilize pesquisas de mercado, entrevistas e análises de dados para obter insights valiosos sobre seu público.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Ouça seus clientes:</strong> Esteja atento às suas necessidades e feedback, tanto online quanto offline.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">2. Construindo uma Marca Forte e Memorável</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Uma marca forte é fundamental para se destacar no mercado e atrair novos clientes. Ao investir em uma identidade visual consistente e em uma comunicação clara e eficaz, você estará construindo uma marca que as pessoas reconhecem e confiam.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Desenvolva uma identidade visual:</strong> Crie um logotipo, paleta de cores e tipografia que transmitam a personalidade da sua marca.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Comunique sua missão e valores:</strong> Seja transparente sobre o que sua empresa representa e o que a motiva.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Construa uma presença online:</strong> Utilize as redes sociais e seu site para se conectar com seu público e compartilhar conteúdo relevante.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">3. Otimizando seu Marketing Digital</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>O marketing digital é uma ferramenta poderosa para alcançar um grande número de pessoas e gerar leads qualificados. Ao investir em estratégias de SEO, marketing de conteúdo e publicidade online, você poderá aumentar sua visibilidade e atrair mais clientes.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Otimize seu site para mecanismos de busca:</strong> Utilize palavras-chave relevantes e crie conteúdo de alta qualidade para melhorar seu ranking nos resultados de pesquisa.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Invista em marketing de conteúdo:</strong> Produza artigos de blog, e-books, vídeos e outros materiais ricos para atrair e engajar seu público.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Utilize as redes sociais:</strong> Crie perfis nas principais redes sociais e compartilhe conteúdo relevante para sua audiência.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">4. Oferecendo uma Experiência de Compra Excepcional</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A experiência do cliente é um fator crucial para fidelizar clientes e aumentar as vendas. Ao oferecer um atendimento personalizado, produtos de qualidade e uma experiência de compra fácil e intuitiva, você estará construindo um relacionamento duradouro com seus clientes.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Treine sua equipe:</strong> Invista no treinamento de sua equipe para que eles possam oferecer um atendimento de excelência.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Simplifique o processo de compra:</strong> Torne a jornada de compra o mais fácil e intuitiva possível.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Ofereça suporte pós-venda:</strong> Demonstre interesse em seus clientes mesmo após a venda, oferecendo suporte e assistência sempre que necessário.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">5. Implementando Estratégias de Venda Eficazes</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Além do marketing, as estratégias de venda também desempenham um papel fundamental no aumento das vendas. Ao implementar técnicas de vendas eficazes, você poderá fechar mais negócios e aumentar seu faturamento.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Utilize técnicas de vendas consultivas:</strong> Foque em entender as necessidades do cliente e em oferecer soluções personalizadas.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Construa relacionamentos:</strong> Seja proativo em construir relacionamentos com seus clientes, oferecendo um atendimento personalizado e humanizado.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Utilize ferramentas de CRM:</strong> Organize e gerencie seus contatos e interações com os clientes para melhorar o desempenho de sua equipe de vendas.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">6. A Importância da Análise de Dados</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A análise de dados é essencial para entender o desempenho de suas estratégias de marketing e vendas. Ao coletar e analisar dados, você poderá identificar oportunidades de melhoria e tomar decisões mais assertivas.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Utilize ferramentas de analytics:</strong> Monitore o desempenho de seu site, campanhas de marketing e vendas.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Identifique os indicadores-chave de desempenho (KPIs):</strong> Defina quais métricas são mais importantes para o seu negócio e acompanhe seu desempenho regularmente.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Tome decisões baseadas em dados:</strong> Utilize os dados coletados para tomar decisões mais informadas e otimizar suas estratégias.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">7. A Inovação como Motor de Crescimento</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>A inovação é fundamental para se manter competitivo em um mercado cada vez mais dinâmico. Ao investir em novas ideias e tecnologias, você poderá criar produtos e serviços diferenciados e conquistar novos mercados.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Incentive a criatividade:</strong> Crie um ambiente de trabalho que estimule a criatividade e a inovação.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Esteja atento às tendências do mercado:</strong> Mantenha-se atualizado sobre as últimas novidades do seu setor.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Invista em pesquisa e desenvolvimento:</strong> Aloque recursos para o desenvolvimento de novos produtos e serviços.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">8. A Importância do Relacionamento com Fornecedores e Parceiros</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>O relacionamento com fornecedores e parceiros é fundamental para o sucesso de qualquer negócio. Ao construir parcerias sólidas, você poderá otimizar sua cadeia de suprimentos, reduzir custos e aumentar sua competitividade.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Escolha seus parceiros com cuidado:</strong> Selecione fornecedores e parceiros que compartilhem seus valores e objetivos.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Construa relacionamentos de longo prazo:</strong> Invista em relacionamentos duradouros com seus parceiros.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Colabore em projetos:</strong> Trabalhe em conjunto com seus parceiros para desenvolver novos produtos e serviços.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:heading {"level":3} -->
<h3 class="wp-block-heading">9. A Cultura Organizacional como Fator Diferencial</h3>
<!-- /wp:heading -->

<!-- wp:paragraph -->
<p>Uma cultura organizacional forte e positiva é fundamental para motivar seus colaboradores e alcançar o sucesso. Ao criar um ambiente de trabalho colaborativo e motivador, você estará mais próximo de alcançar seus objetivos.</p>
<!-- /wp:paragraph -->

<!-- wp:list -->
<ul class="wp-block-list"><!-- wp:list-item -->
<li><strong>Comunique a visão e os valores da empresa:</strong> Seja claro sobre os objetivos da empresa e os valores que a guiam.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Reconheça e recompense seus colaboradores:</strong> Valorize o trabalho de seus colaboradores e ofereça incentivos para que eles se sintam motivados.</li>
<!-- /wp:list-item -->

<!-- wp:list-item -->
<li><strong>Crie um ambiente de trabalho positivo:</strong> Promova a colaboração, a comunicação e o respeito entre os colaboradores.</li>
<!-- /wp:list-item --></ul>
<!-- /wp:list -->

<!-- wp:paragraph -->
<p><strong>Conclusão:</strong></p>
<!-- /wp:paragraph -->

<!-- wp:paragraph -->
<p>Aumentar as vendas é um processo contínuo que exige dedicação, planejamento e adaptação. Ao implementar as estratégias apresentadas neste artigo, você estará dando um passo importante em direção ao sucesso. Lembre-se que o sucesso não acontece da noite para o dia, mas sim através de um trabalho consistente e focado em resultados.</p>
<!-- /wp:paragraph -->
`
}
