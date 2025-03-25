function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
	let cost = 0;
	while (arr.length > 1) {
		let sum = arr[0] + arr[1];
		cost += sum
		arr = arr.slice(2).concat(sum).sort((a,b) => a-b);
	}
	return cost
}

module.exports=mincost;
