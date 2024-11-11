// portfolio.js
import { assets } from './asset.js';

function calculatePortfolioValue() {
    return assets.reduce((total, asset) => total + (asset.price * asset.quantity), 0);
}

function getPortfolioAllocation() {
    const totalValue = calculatePortfolioValue();
    return assets.map(asset => ({
        name: asset.name,
        allocation: ((asset.price * asset.quantity) / totalValue) * 100
    }));
}

export { calculatePortfolioValue, getPortfolioAllocation };
