/* eslint-disable no-unused-vars */
/* eslint-disable */
const { LimitedArray, getIndexBelowMax } = require('./hash-table-helpers.js'); //'./hash-table-helpers'

class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  // Adds the given key, value pair to the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // If no bucket has been created for that index, instantiate a new bucket and add the key, value pair to that new bucket
  // If the key already exists in the bucket, the newer value should overwrite the older value associated with that key
  insert(key, value) {
    const index = getIndexBelowMax(key, this.limit);
    // let bucket = this.storage[index];
    if (!this.storage.hasOwnProperty(index)) {
      this.storage.storage[index] = [];
    }
    if(!this.storage.storage[index].hasOwnProperty(key)){
      this.limit++;
      this.storage.limit++;
    }
      this.storage.storage[index] = [key, value];
      //this.storage.set(key, index);
      // return this.storage[index][key];
      // return this.storage[index];
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {

    // getIndexBelowMax(this.storage[key]);
  }
  
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    
  }
}

let hashTable = new HashTable();
console.log(hashTable);
hashTable.insert(1, 'Lisa');
hashTable.insert(2, 'Jorge');
hashTable.insert(3, 'Jorges');
console.log(hashTable.storage);

module.exports = HashTable;
