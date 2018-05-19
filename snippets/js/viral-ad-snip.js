//https://www.hackerrank.com/challenges/strange-advertising/problem
//The easiest way to see the results is to goto View => Integrated Terminal (VSCode) and type: node <myfile>.js 
var day = 1;
var shares = 5;
var likes = 0;
var total_likes = 0;

// likes = Math.floor(shares/2)
// as day++, shares = (likes*3)
// where day = 1, shares = 5, likes = 2, total_likes = 2

for (;day <= 5; day++) {
    console.log("Day: "+day);
    console.log("Shares: "+shares);
    likes = Math.floor(shares/2);
    console.log("Likes: "+likes);
    total_likes += likes;
    console.log("Total Likes: "+total_likes);
    shares = likes * 3;
}