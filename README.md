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

- Converta os componentes existentes para o formate de constante. segue exemplo:

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
