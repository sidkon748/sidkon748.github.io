// importing data
import { assets, getAssetbyId } from './asset.js';

// creating transaction class
export class Transaction {
    constructor (assetID, type, quantity) {
        this.assetID = assetID;
        this.type = type;
        this.quantity = quantity;
        this.asset = getAssetbyId(assetID);

        // logging error if asset does not exist
if (!this.asset) {
    throw new Error (`Asset with ID ${assetID} not found`)
}};

processTransaction () {
    // adding quantity if transaction inolves buying
    if (this.type === 'buy') {
        this.asset.quantity += this.quantity;
    }
    // subtracting buying if transaction involves selling 
    else if (this.type === 'sell') {
        if (this.asset.quantity < this.quantity) {
            // logging new error if there is not enough quantity for a proper sale
            throw new Error (`Insufficient quantity for sale of ${this.asset.name}`);
        }
        this.asset.quantity -= this.quantity
    } else {
        // logging new error if type of transaction is not buying or selling,
        throw new Error (`ERROR: ${this.type} is not a valid type of transaction.`);
    }
    
}


}
