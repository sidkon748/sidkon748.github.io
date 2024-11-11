// main.js
import { calculatePortfolioValue, getPortfolioAllocation } from './portfolio.js';
import { Transaction } from './transaction.js';

console.log("Initial Portfolio Value:", calculatePortfolioValue());
console.log("Initial Portfolio Allocation:", getPortfolioAllocation());

// Create transactions
try {
    const transaction1 = new Transaction(1, "buy", 5);
    const transaction2 = new Transaction(2, "sell", 2);
    const transaction3 = new Transaction(3, "buy", 3);
    console.log("Transactions executed successfully.");
} catch (error) {
    console.error("Transaction Error:", error.message);
}

// Display updated portfolio value and allocation
console.log("Updated Portfolio Value:", calculatePortfolioValue());
console.log("Updated Portfolio Allocation:", getPortfolioAllocation());
