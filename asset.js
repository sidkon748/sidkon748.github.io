// asset.js
const assets = [
    { id: 1, name: "Apple Inc.", type: "stock", price: 150, quantity: 10 },
    { id: 2, name: "US Treasury Bond", type: "bond", price: 1000, quantity: 5 },
    { id: 3, name: "Tesla Inc.", type: "stock", price: 600, quantity: 7 },
];

function getAssetById(id) {
    return assets.find(asset => asset.id === id);
}

export { assets, getAssetById };
