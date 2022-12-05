# Titulo

Teste Full stack Kenzie academy

# Deploy

[front-end](https://teste-tecnico-fullstack-front.vercel.app)

# Importante

para simular uma real empresa eu levei a parte de clientes e contatos um pouco diferente cliente e um super usuario cadastravel apenas por insomnia na rota
/register onde o front end nao tem acesso
e la voce pode criar seu super usuario listando todos contatos e acesso a rota delete

# Repositorio Front-end

[repo:](https://github.com/Leeo-Henrique/teste-tecnico-fullstack-front)

# Sobre a aplicação

um banco de dados relacionados com inserção de clientes com emails e telefones
e superusuarios

# Tecnologias usadas

eu utilizei no back-end `typescript`, `postgres`, `typeorm`, `uuid`, `jsonwebtoken`, `bcrypt` e `cors`

eu utilizei no front-end `ReactJS/templateTS`, `axios`, `react-modal`, `react-icons`,`react-router-dom`, `styled-components` e `react-toastify`

# Rodar localmente a aplicação

execute o comando `yarn install`
crie seu ambiente de desenvolvimento com .env
crie seu banco de dados postgres
rode o comando `yarn typeorm migrate:run src/data-source.ts`
rode o comando `yarn dev`

se tudo estava correto o servidor vai rodar localmente na porta 3001

# Rotas

`/Get /users`
essa rota e necessario ter um superusuario criado no insomnia ou requisição comum pois voce precisa logar na interface para renderizar utilizando o token

`/Patch /users/:id`
essa rota e acessivel para o cliente mudar sua requisição
`request body`

```json
{
  "nome": "nomeuser",
  "telefones": [
    {
      "id": "d7ff24c2-ee08-4d72-a868-c076a44e1774",
      "telefone": "55 31 99999999"
    },
    {
      "id": "0d15079e-af4b-437b-abd6-4ac332cc5c2f",
      "telefone": "99 99999999"
    },
    {
      "id": "c9c3943b-106d-46b2-bd96-81fc32b162e2",
      "telefone": "559999999999"
    }
  ],
  "emails": [
    {
      "id": "5f7a9db8-b9e0-4649-9aa6-9e74538f94d5",
      "email": "email@email.com"
    }
  ]
}
```

`/POST /users`
essa rota cria um contato para a aplicação
Obrigatorio 1 email e 1 numero

```JSON
{
	"nome": "nomeuser",
	"telefones": ["99 99999999", "9999999999", "559999999999"],
	"emails": ["email1@mail.com","email2@mail.com", "email3@mail.com" ]
}
```

`/Delete /users/:id`
essa rota deleta um contato

`/POST /register`
cria um usuario de login

```JSON
{
	"email": "email1@mail.com",
	"password": "12341234"
}
```

`/POST /login`
Loga um usuario retornando um token

```JSON
{
	"email": "email1@mail.com",
	"password": "12341234"
}
```

CRUD de telefones Rota `/telefone`
especifico buscar telefones do usuario
`/GET /telefone/:userID`
retorna todos telefones do usuario

CRUD de telefones Rota `/email`
especifico buscar emails do usuario
`/GET /email/:userID`
retorna todos emails do usuario

`/POST /register`
criação de superusuarios
para listar e excluir contatos

```JSON
{
  "email": "email1@mail.com",
	"password": "12341234"
}
```

qualquer duvida me chame no [linkedIn](https://www.linkedin.com/in/leonardo-henrique-08396922a/)
