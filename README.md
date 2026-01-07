# 🛒 Carrinho de Compras

Projeto simples de um **carrinho de compras**, desenvolvido com **HTML, CSS e JavaScript**, onde o usuário pode adicionar produtos, definir quantidades e visualizar o valor total em tempo real, com **validações e mensagens de erro estilizadas** para melhorar a experiência do usuário.

---

## 📌 Funcionalidades

- Seleção de produtos disponíveis  
- Inserção de quantidade personalizada  
- Adição de produtos ao carrinho  
- Cálculo automático do valor total  
- Limpeza completa do carrinho  
- Validação de produto selecionado  
- Validação de quantidade maior que zero  
- Exibição de mensagens de erro estilizadas (sem uso de `alert`)  

---

## 🛠️ Tecnologias Utilizadas

- HTML  
- CSS  
- JavaScript  

---

## 🚀 Como Funciona

### ▶️ Ao clicar no botão **"Adicionar"**
- O sistema valida:
  - Se um produto foi selecionado  
  - Se a quantidade informada é válida  
- Caso os dados estejam corretos:
  - O produto é adicionado ao carrinho  
  - O subtotal é calculado (`quantidade × valor unitário`)  
  - O valor total é atualizado automaticamente  

### ⚠️ Em caso de erro
- O produto **não é adicionado ao carrinho**
- Uma **mensagem de erro estilizada** é exibida logo abaixo do campo de seleção  

### 🧹 Ao clicar no botão **"Limpar"**
- Todos os produtos são removidos do carrinho  
- O valor total é resetado para `R$ 0,00`  
- Mensagens de erro são removidas da tela  

---

## 🧪 Observações

- O campo de quantidade aceita apenas valores maiores que zero  
- O sistema impede a adição de produtos inválidos  


