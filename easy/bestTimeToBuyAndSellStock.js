// var maxProfit = function(prices) {
//     let maxProf = 0
//     for(let i= 0; i< prices.length; i++){
//         for(let j =i+1; j< prices.length; j++){
//             let profit = prices[j]- prices[i]
//             maxProf = Math.max(maxProf,profit)
//         }
//     }
//     return maxProf
// };

var maxProfit = function(prices) {
    let maxProf = 0
    let minPrice = prices[0]
    
    for(let i = 1; i< prices.length; i++) {
        let sellPrice= prices[i]
        let profit = sellPrice - minPrice
        
        maxProf = Math.max(maxProf, profit)
        if(minPrice > sellPrice) {
            minPrice = sellPrice
        }
    }
    return maxProf
    
};