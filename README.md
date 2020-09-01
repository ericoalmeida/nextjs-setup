## Setup para projetos com React/NextJs

### Revomendo arquivos desnecessários

- Remover pasta styles
- Remover README.md criado por padrão
- Remover verser.svg e favcon.ico da pasta public
- Remover pasta /pages/api

### Configurando typescript

```
yarn add typescript @types/react @types/node -D
```

- troque as extensões de **.js** para **.tsx**
- remova as importações do css
- Limpe o código do arquivo **index.tsx** e **\_app.tsx**
- Execute o comando abaixo para iniciar o projeto

```
yarn dev
```

> Ao iniciar o projeto, o NextJS criará automaticamente os arquivos **tsconfig.json** e **next-env.d.ts**

### Configurando ESLint

- Comece instalando o ESLint

```
yarn add eslint -D
```

- Inicie o ESLint

```
yarn eslint --init
```

Abaixo o questionário necessário para configuração do **ESLint**

```
√ How would you like to use ESLint? · style
√ What type of modules does your project use? · esm
√ Which framework does your project use? · react
√ Does your project use TypeScript? · No / Yes
√ Where does your code run? · browser, node
√ How would you like to define a style for your project? · guide
√ Which style guide do you want to follow? · standard
√ What format do you want your config file to be in? · JSON
```

> Caso prefira utilizar o **yarn**, após o **npm** instalar todas as dependências do eslint, delete o arquivo **package-lock.json** e execute o comando `yarn` para atualizar as dependências.

### Configurando adicionais para ESLint

Instale as dependencias com o comando abaixo:

```
yarn add prettier eslint-plugin-prettier eslint-config-prettier -D
```

- Abra o arquivo **.eslintrc.json** e configure-o conforme o exemplo abaixo:

```json
{
  "env": {
    "browser": true,
    "es2020": true,
    "node": true,
    "jest": true
  },
  "extends": [
    "plugin:react/recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "prettier/standard",
    "prettier/react"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": 12,
    "sourceType": "module"
  },
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "prettier/prettier": "error",
    "space-before-function-paren": "off",
    "react/prop-types": "off"
  }
}
```

- Crie o arquivo **.eslintignore**
- Adicione os seguinte itens:

```
node_modules
.next
/*.js

```

- Crie o arquivo **prettier.config.js**
- Configure-o conforme o exemplo abaixo:

```js
module.exports = {
  semi: false, // ; no final da linha
  singleQuote: true, // utiliza '' aspas simples
  arrowParens: 'avoid', // coloca () em arrow functions com apenas um parametro
  trailingComma: 'none', // mantem a ultima virgula de objetos
  endOfLine: 'auto' //Caractere de fim de linha
}
```

- Converta os componentes existentes para o formato de constante. segue exemplo:

```tsx
import React from 'react'
import Head from 'next/head'

const Home: React.FC = () => {
  return (
    <div>
      <Head>
        <title>HomePage</title>
      </Head>

      <main>
        <h1>Welcome Next.js!</h1>
      </main>
    </div>
  )
}

export default Home
```

### Configurando Styled-Components

- Instale o **styles-components** utilizando o comando abaixo:

```
yarn add styled-components
```

- Adicione tambem suas tipagens

```
yarn add @types/styled-components -D
```

- Crie um arquivo chamado **babel.config.js**
- Configure-o conforme o modelo abaixo:

```js
module.exports = {
  presets: ['next/babel'],
  plugins: [['styled-components', { ssr: true }]]
}
```

- Crie na pasta pages, um arquivo chamado **\_document.tsx** e coloque nele o conteúdo do arquivo contido em [Nextjs-Styled-components](https://github.com/vercel/next.js/blob/canary/examples/with-styled-components/pages/_document.js)

- Importe o react no escopo
- Adicione as tipagens de contexto e retorno da função
- Após os passos acima, deverá ficar como no modelo abaixo:

```tsx
import React from 'react'
import Document, { DocumentInitialProps, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }
}
```

- Crie uma pasta com o nome **src**
- Mova a pasta **pages** para dentro de **src**
- Crie uma pasta com o nome **styles**
- Crie um arquivo chamado **global.ts**

  > Neste arquivo estará a estilização global do projeto

- Import o estilo global no arquivo **\_app.tsx**

### Configurando tema para a aplicação

- Crie um arquivo chamado **theme.ts** dentro da pasta **/src/styles**. Abaixo um exemplo do conteúdo do arquivo

```ts
const theme = {
  colors: {
    background: '#121214',
    text: '#e1e1e6',
    primary: '#8257e6'
  }
}

export default theme
```

- Crie um arquivo chamado **styled.d.ts** dentro da pasta **/src/styles**.

  > Este arquivo servirá para definição de tipos do tema

- O conteudo do mesmo será como no exemplo abaixo:

```ts
/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components'
import theme from './theme'

export type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
```
