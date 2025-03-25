function mincost(arr)
{ 
//write your code here
// return the min cost
	while(arr.length > 1){
		arr.sort((a,b) => a-b);
		let sum = arr[0]+arr[1];
		arr.shift();
		arr.shift()
		arr.push(sum)
	}
	return arr[0]
	
}

module.exports=mincost;
