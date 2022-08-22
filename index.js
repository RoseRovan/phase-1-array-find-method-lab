// code your solution here
const record = [{
    year: "2015",
    result: "L"
},
{
    year: "2014",
    result: "N/A"
},
{
    year: "2013",
    result: "L"
},

]



function superbowlWin(Array) {

const record = Array.find(element => element.result === "W");
if (typeof record === 'object') {
    return record.year;
}
}