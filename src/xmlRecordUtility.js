
const record = ['Eldon	20	2	2	1',
'Sin 	20	2	2	1']


//const formatRecord = record.replace(/\t/g, ' ').trim().replace(" ", "");

//const words = formatRecord.split(' ')

var resultArray = []

for (let i=0; i<record.length; i++){
    var formatString  = `createData(${i},`
    var wordsIncurrentRecord = record[i].replace(/\t/g, ' ').trim().replace(" ", "").split(' ');

    wordsIncurrentRecord.forEach((item) =>{
        formatString += item + ','
    })

    formatString = formatString.slice(0, -1) + ')'

    resultArray.push (formatString)
}
// var formatString  = 'createData(1,'

// words.forEach((item) =>{
//     formatString += item + ','
// })

// formatString = formatString.slice(0, -1) + ')'

//console.log(words);

console.log(resultArray);


