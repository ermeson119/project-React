E-commerce MVC

Este projeto é um sistema de e-commerce desenvolvido na arquitetura MVC utilizando tecnologias como Java, Spring Boot, JPA, Thymeleaf, Bootstrap 5, HTML, CSS, com banco de dados H2 para testes e MySQL para produção.
Tecnologias Utilizadas

    Linguagem: Java
    Frontend: HTML, CSS, Bootstrap 5
    Backend: Spring Boot, JPA, Spring Security
    Templates: Thymeleaf
    Banco de Dados: H2 (em memória para testes) e MySQL (produção)
    Validação: Spring Validation

Funcionalidades

    Gerenciamento de Produtos: Adicionar, editar e excluir produtos.
    Gerenciamento de Pessoas: Cadastro de pessoas físicas e jurídicas.
    Sistema de Vendas: Registro e gerenciamento de compras.
    Autenticação e Autorização: Login, cadastro de usuários e controle de acesso.

Visões do Sistema
Visão do Administrador

As funcionalidades acessíveis ao administrador incluem:

    Lista de Produtos: Visualização, edição e exclusão de produtos.
        Botões de "Editar" e "Excluir" para cada produto.
    Gerenciamento de Pessoas Físicas e Jurídicas: Listar, adicionar e editar dados de pessoas.
    Lista de Compras do Sistema: Visualização detalhada de todas as compras realizadas, com acesso aos detalhes de cada compra.
    Acesso Restrito: Página de acesso negado para funcionalidades exclusivas do administrador.

Visão do Usuário Normal

O usuário normal possui as seguintes funcionalidades:

    Visualização de Produtos: Pode visualizar os produtos disponíveis para compra.
    Carrinho de Compras: Visualização do carrinho com a quantidade de itens.
    Sistema de Compras: Acesso à lista de compras realizadas e seus detalhes.
    Formulários de Cadastro e Login: Cadastro de novos usuários e autenticação no sistema.

Estrutura do Projeto

O projeto segue a arquitetura MVC (Model-View-Controller), onde:

    Model: Gerencia a lógica de negócios, validações e interações com o banco de dados.
    View: Responsável pela apresentação dos dados ao usuário utilizando Thymeleaf.
    Controller: Atua como intermediário entre as views e os models, processando as entradas do usuário e retornando as respostas apropriadas.

Considerações Finais

Este projeto foi desenvolvido com o objetivo de aprendizado na disciplina de Programação Web II, aplicando conceitos de desenvolvimento web com foco em e-commerce e controle de acesso.
