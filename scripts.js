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
];

const Transaction = {
  incomes() {
    // somar as entradas
  },
  expenses() {
    // somar as saidas
  },
  total() {
    // entradas - saidas
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
    const html = `
  <td class="description">${transaction.description}</td>
  <td class="expense">${transaction.amount}</td>
  <td class="date">${transaction.date}</td>
  <td>
    <img src="./assets/minus.svg" alt="Remover Transação" />
  </td>
    `;

    return html;
  },
};

DOM.addTransaction(transactions[1]);
DOM.addTransaction(transactions[0]);
DOM.addTransaction(transactions[2]);
