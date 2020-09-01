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
