# vuttr - api

## Instala as dependências

```bash
yarn
```

## Inicia o app no modo de development

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
