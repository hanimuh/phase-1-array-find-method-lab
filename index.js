// code your solution here
const record = [
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
]




let res = record.find (function superbowlWin (Array){
    if (Array.result === "W"){
        return Array.year;
    }
});
console.log (res)