export {processTransactions};

const processTransactions = (transactions) => {

    if(!transactions) {
        throw new Error("Undefined collection of transactions")
    }

    // txCount[transaction] = frequency of transaction in the original transactions array
    const txCount  = transactions.reduce((allTransactions, transaction) => {
        const countTransaction = allTransactions[transaction] ?? 0;
        return { ...allTransactions, [transaction]: countTransaction + 1, };
    }, {});
    
    // sortedKeys = sorted array of keys from txCount
    const sortedKeys = Object.keys(txCount).sort((itemOne, itemTwo) => txCount[itemTwo] - txCount[itemOne] || itemOne > itemTwo || -(itemOne < itemTwo))

    // return array of strings in format '<transaction> <frequency>'
    return sortedKeys.reduce((result, key)=>result = [ ...result, (`${key} ${txCount[key]}`)], []);
}