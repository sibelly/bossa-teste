# vuttr - api

## Instala as dependências

```bash
yarn
```

## Inicia o app no modo de development

**Antes de iniciar a aplicação é necessário criar um arquivo ```.env``` no diretório /api com as informações do seu banco de dados local, vide arquivo ```.env.example```.**

```bash
yarn dev
```

## Rest Pattern

| HTTP Verb |     URL    | Controller#Action | Retorno                            |
|-----------|:----------:|------------------:|------------------------------------|
| GET       | /tools     |       tools#index | Mostra uma lista de todas as ferramentas |
| POST      | /tools     |      tools#create | Cria uma nova ferramenta                  |
| GET       | /tools/:id |        tools#show | Mostra os atributos de uma ferramenta     |
| PUT       | /tools/:id |      tools#update | Atualiza atributos de uma ferramenta      |
| DELETE    | /tools/:id |     tools#destroy | Remove uma ferramenta                     |
