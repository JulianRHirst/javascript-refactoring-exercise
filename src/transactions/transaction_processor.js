export {processTransactions};

const processTransactions = (transactions) => {

    if(!transactions) {
        throw new Error("Undefined collection of transactions")
    }

    // txCounter[transaction] = frequency of transaction in the original transactions array
    const txCounter  = transactions.reduce((allTransactions, transaction) => { return {...allTransactions, [transaction]: (allTransactions[transaction] ?? 0) + 1}}, {});
    
    // sortedKeys = sorted array of keys from txCounter
    const sortedKeys = Object.entries(txCounter).sort(([transaction1, frequency1], [transaction2, frequency2]) => frequency2 - frequency1 || transaction1 > transaction2 || -(transaction1 < transaction2)  );

    // return array of strings in format '<transaction> <frequency>'
    return sortedKeys.map(([key, frequency])=> `${key} ${frequency}`);
}