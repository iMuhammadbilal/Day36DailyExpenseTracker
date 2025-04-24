const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('add-btn');
const expensesList = document.getElementById('expenses');
const totalElement = document.getElementById('total');

let totalExpense = 0;
const budgetLimit = 20000; // 💰 Set your budget limit here

console.log(`Total Expense: ${totalExpense}`);

addBtn.addEventListener('click', addExpense);

function addExpense() {
    const description = descriptionInput.value;
    const amount = parseFloat(amountInput.value);

    if (description && !isNaN(amount)) {
        const expenseItem = document.createElement('li');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <span>${description}</span>
            <span>$${amount.toFixed(2)}</span>
            <button class="delete-btn">x</button>
        `;

        expensesList.appendChild(expenseItem);

        totalExpense += amount;
        totalElement.textContent = totalExpense.toFixed(2);

        // 💡 Check budget limit
        if (totalExpense > budgetLimit) {
            alert(`⚠️ Warning: You've crossed your budget limit of $${budgetLimit}!`);
        }

        descriptionInput.value = '';
        amountInput.value = '';

        const deleteBtn = expenseItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            totalExpense -= amount;
            totalElement.textContent = totalExpense.toFixed(2);
            expensesList.removeChild(expenseItem);
        });

    } else {
        alert('Please enter a valid description and amount.');
    }
}
