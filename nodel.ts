let displayName:string= "Jess's standing desk";
let inventoryType :string= "furniture";
let trackingNumber:string = "FD123455";
let createDate:Date = new Date();
let originalCost :number= 425;
interface inventoryItem{
    displayName:string;
    inventoryType :string;
    trackingNumber:string; 
   createDate:Date;
    originalCost :number;
}

function getInventoryItem(trackingNumber:string):inventoryItem{
    return null;   
    
}

function saveInventoryItem(item:inventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);


saveInventoryItem(inventoryItem);