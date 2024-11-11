// Creating the Main Application: 

// importing required data 
import { calculatePortfolioValue, getPortfolioAllocation} from './portfolio.js';
import { Transaction } from './transaction.js';

// code to display portfolio value, both on the page and in the console
const totalPortfolioValue = calculatePortfolioValue();
const totalValueHTML = document.getElementById("portfolio-value")

console.log (`Portfolio Value: $${totalPortfolioValue}`)
totalValueHTML.innerHTML = `<h3> Portfolio Value: $${totalPortfolioValue} </h3>`

// code to display portfolio allocations (page & console)
const portfolioAllocation = getPortfolioAllocation (); // getting DOM elements
const allocationsHTML = document.getElementById("allocation-percentages");

console.log ("|| Portfolio Allocations: ||")
portfolioAllocation.forEach(asset => {
    console.log (`${asset.name}: ${asset.allocation.toFixed(2)}%`);
    const assetDiv = document.createElement("div");
    assetDiv.textContent = `${asset.name}: ${asset.allocation.toFixed(2)}%`;
    allocationsHTML.appendChild(assetDiv);    

});

// code to display transactions:
// using a function here to call it for each transaction 
function createTransactionReceipt (transaction) {
    console.log (`Successfully made a transaction for ${transaction.quantity} of ${transaction.asset.name}. Transaction type: ${transaction.type} `);
    const transactionsHTML = document.getElementById('transactions');
    const transactionDiv = document.createElement('div');
    transactionDiv.textContent = `Successfully made a transaction for ${transaction.quantity} of ${transaction.asset.name} (Transaction type: ${transaction.type})`
    transactionsHTML.appendChild(transactionDiv);
}
// initializing transactions using class, then calling function for each transaction
try {
console.log ("|| Transaction Receipts: ||")
const transaction1 = new Transaction(31, 'buy', 123);
createTransactionReceipt (transaction1);

const transaction2 = new Transaction(1998, 'sell', 8);
createTransactionReceipt (transaction2);

const transaction3 = new Transaction(2009, 'buy', 10);
createTransactionReceipt (transaction3);

} catch (error) {
    console.error(error.message)
}

// updating portfolio value and allocations after transactions (had some trouble with this one)
console.log("Updated Portfolio Value:", calculatePortfolioValue())
console.log("Updated Portfolio Allocations:", getPortfolioAllocation())




