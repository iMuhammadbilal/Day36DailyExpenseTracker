const descriptionInput = document.getElementById('description');
const amountInput = document.getElementById('amount');
const addBtn = document.getElementById('add-btn');
const expensesList = document.getElementById('expenses');
const totalElement = document.getElementById('total');

let totalExpense = 0;  // 💰 Initialize total expense to 0
const budgetLimit = 20000; // 💰 Set your budget limit here

console.log(`Total Expense: ${totalExpense}`);

addBtn.addEventListener('click', addExpense);

function addExpense() { // 💡 Function to add expenses
    const description = descriptionInput.value; // 💡 Get the description from input
    const amount = parseFloat(amountInput.value); // 💡 Get the amount from input and convert to float

    if (description && !isNaN(amount)) { // 💡 Check if description is not empty and amount is a number
        const expenseItem = document.createElement('li'); // 💡 Create a new list item for the expense
        expenseItem.classList.add('expense-item'); // 💡 Add a class for styling
        expenseItem.innerHTML = `
            <span>${description}</span>
            <span>$${amount.toFixed(2)}</span>
            <button class="delete-btn">x</button>
        `;

        expensesList.appendChild(expenseItem); // 💡 Append the new expense item to the list

        totalExpense += amount;
        totalElement.textContent = totalExpense.toFixed(2);

        // 💡 Check budget limit
        if (totalExpense > budgetLimit) { // 💡 If total expense exceeds budget limit
            alert(`⚠️ Warning: You've crossed your budget limit of $${budgetLimit}!`);
        }

        descriptionInput.value = ''; // 💡 Clear the description input
        amountInput.value = ''; // 💡 Clear the amount input

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
