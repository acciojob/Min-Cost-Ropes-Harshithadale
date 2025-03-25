function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a,b) => a-b);
	while(arr.length > 1){
		let sum = arr[0]+arr[1];
		arr.shift();
		arr.shift()
		arr.push(sum)
		arr.sort()
	}
	return arr[0]
	
}

module.exports=mincost;
