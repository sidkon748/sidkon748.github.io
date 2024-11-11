// Task 2: Create the Portfolio Module

// Import named exports
import { assets } from './asset.js'; 

// Exporting fucntion to calculate total portfolio value
export function calculatePortfolioValue () {
    return assets.reduce((total, asset) => {
        return total + (asset.price * asset.quantity);
    }, 0)
}

// Exporting a function to calculate percentage allocation of each asset in the portfolio
export function getPortfolioAllocation () {
    // calling total value to form percentages
    let portfolioValue = calculatePortfolioValue ()

    // using map to create new array for percentage allocations
    return assets.map (asset => ({
      name: asset.name,
      allocation: ((asset.price * asset.quantity) / portfolioValue) * 100, 
    }))
}



