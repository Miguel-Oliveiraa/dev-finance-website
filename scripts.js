const modalOverlay = document.querySelector("modal-overlay");

const Modal = {
  open() {
    modalOverlay.classList.add("active");
  },
  open() {
    modalOverlay.classList.remove("active");
  },
};

const transactions = [
  {
    id: 1,
    description: "Luz",
    amount: -50000,
    date: "21/07/2021",
  },
  {
    id: 2,
    description: "Criação website",
    amount: 500000,
    date: "21/07/2021",
  },
  {
    id: 3,
    description: "Internet",
    amount: -20000,
    date: "21/07/2021",
  },
  {
    id: 4,
    description: "APP",
    amount: 200000,
    date: "26/07/2021",
  },
];

const Transaction = {
  incomes() {
    let income = 0;

    // pegar todas as transações
    // se ela for maior que 0
    transactions.forEach((transactions) => {
      // se ela for maior que zero
      if (transactions.amount > 0) {
        // somar a uma variavel e retornar ela
        income += transactions.amount;
      }
    });

    return income;
  },
  expenses() {
    let expense = 0;

    // pegar todas as transações
    // se ela for menor que 0
    transactions.forEach((transactions) => {
      // se ela for maior que zero
      if (transactions.amount < 0) {
        // somar a uma variavel e retornar ela
        expense += transactions.amount;
      }
    });

    return expense;
  },

  total() {
    return Transaction.incomes() + Transaction.expenses();
  },
};

const DOM = {
  transactionsContainer: document.querySelector("#data-table tbody"),
  addTransaction(transaction, index) {
    const tr = document.createElement("tr");
    tr.innerHTML = DOM.innerHTMLTransaction(transaction);

    DOM.transactionsContainer.appendChild(tr);
  },
  innerHTMLTransaction(transaction) {
    const CSSclass = transaction.amount > 0 ? "income" : "expense";

    const amount = Utils.formatCurrency(transaction.amount);

    const html = `
  <td class="description">${transaction.description}</td>
  <td class="${CSSclass}">${amount}</td>
  <td class="date">${transaction.date}</td>
  <td>
    <img src="./assets/minus.svg" alt="Remover Transação" />
  </td>
    `;

    return html;
  },

  updateBalance() {
    const income = document.getElementById("incomeDisplay");
    income.innerHTML = Transaction.incomes();
    const expenses = document.getElementById("expenseDisplay");
    expenses.innerHTML = Transaction.expenses();
    const total = document.getElementById("totalDisplay");
    total.innerHTML = Transaction.total();
  },
};

const Utils = {
  formatCurrency(value) {
    const signal = Number(value) < 0 ? "-" : "";

    value = String(value).replace(/\D/g, "");

    value = Number(value) / 100;

    value = value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
    return signal + value;
  },
};

transactions.forEach(function (transaction) {
  DOM.addTransaction(transaction);
});

DOM.updateBalance();
