# Cardápio Digital — frontend

Base Angular 20 com AppModule e páginas em src/app/views, seguindo a organização do projeto de referência. Esta etapa prepara instalação e build; o atendimento e a integração com a API serão implementados em seguida.

## Onde mexer: organização em blocos

```text
src/
  app/
    views/                         telas separadas por funcionalidade
      inicio/
        inicio.module.ts           reúne as peças deste bloco
        inicio-routing.module.ts   define as rotas deste bloco
        inicio.component.ts        lógica da tela
        inicio.component.html      conteúdo da tela
        inicio.component.scss      aparência da tela
    shared/                        peças utilizadas por vários blocos
      components/                  componentes reutilizáveis
      models/                      formatos dos dados compartilhados
      services/                    serviços compartilhados e acesso à API
      enums/                       opções fixas, como formas de pagamento
      helpers/                     pequenas funções auxiliares
      guards/                      verificações de acesso às rotas
      interceptors/                tratamento comum das requisições HTTP
      shared.module.ts             recursos Angular comuns aos blocos
    app.routing.ts                 liga cada endereço ao seu bloco
    app.module.ts                  módulo principal
    app.component.ts/html/scss     estrutura principal da aplicação
  main.ts                          inicialização do Angular
  index.html                       documento HTML que carrega a aplicação
  styles.scss                      estilos globais
```

Para mudar textos, edite o `.html` do bloco. Para mudar cores e espaçamentos daquela tela, edite seu `.scss`. Para mudar o comportamento, edite seu `.ts`.

O bloco inicio é carregado pelas rotas quando acessado. Atendimento, produtos, categorias, histórico e configurações deverão ser novos blocos em views quando forem implementados, seguindo o mesmo conjunto de arquivos. Serviços e models exclusivos de um bloco ficam dentro dele, como no projeto de atendimento; shared recebe apenas o que é usado por mais de um bloco.

As pastas compartilhadas ainda sem implementação contêm `.gitkeep` para serem preservadas no Git. Esse arquivo não executa código.

Os próximos componentes gerados pelo Angular CLI usam módulos e arquivos HTML/SCSS separados por padrão.

## Para que servem os arquivos da raiz

| Arquivo/pasta | Função |
| --- | --- |
| package.json | Lista dependências e comandos como start e build. |
| package-lock.json | Guarda as versões exatas instaladas. Gerado pelo npm. |
| angular.json | Configura o build, estilos, caminhos e geração de componentes. |
| tsconfig.json / tsconfig.app.json | Configuram a compilação do TypeScript. |
| .nvmrc | Indica a versão do Node usada pelo projeto. |
| .gitignore | Define arquivos gerados que não devem ir para o Git. |
| node_modules/ | Bibliotecas instaladas pelo npm. Não edite manualmente. |
| dist/ | Resultado gerado pelo build para publicação. |
| .angular/ | Cache gerado pelo Angular. |

Esses arquivos de configuração ficam na raiz porque as ferramentas os utilizam ali. No desenvolvimento das telas, o trabalho fica principalmente dentro de src/app/views e src/app/shared.

## Executar

Use Node 24 e execute na raiz do repositório (não em node_modules/.bin):

```sh
npm ci
npm start
```

## Build / hospedagem

- Diretório raiz: pasta que contém package.json e angular.json.
- Instalação: `npm ci --include=dev`.
- Build: `npm run build`.
- Diretório de saída: `dist/catalogo-front/browser`.

Angular CLI é uma dependência local; não é necessário instalar globalmente. O package-lock.json deve ser versionado.

node_modules, dist e .angular não devem ser versionados. Caso node_modules já esteja no Git, remova somente do índice com `git rm -r --cached node_modules` antes do próximo commit.
