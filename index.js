


// let books = ['Blossoms of the savannah','Dolls House','Kigogo','My life in prison']
// function handlearray (array) {
//     console.log(array)
// }

// handlearray(book)

// // // CONST

// const loopThroughArray = function(array) {
//     for(let item of array) {
//         console.log(item)
//     }
// }
// // capitalizeArray(books) 

// function handleDrivers(name) {
//     let drivers = ['Wanjaro','Collo','Mavado','Kulio']
//     console.log(name)
    
    
//     // handl(loopThroughArray)
// }

// const capitalizeArray = function(array) {
//     let newarray = []
//     for(let item of array) {
//         newArray.push(item.to.upperCase())
//         console.log(newArray)
//     }
// }
// // handleBooks = (loopThroughArray)
//  handleBooks(capitalizeArray)



// //  FUZZYMATCH
// function  fuzzyMatch(array) {

// const drivers = ['Wanjaro','Babu','Kulio','Mavado','Willie'];
// for(let item of array) {
//     console.log(array)
//     console.log(drivers)
//     drivers.push(item.title)

// }
// return drivers
// };

// function loopThroughAndFind(driver, finder) {
//     let results = null
//     for(let item of drivers) {
//         if(finder(item) === true) {   
//         result = item               
//         break 
//         }
//     }
//     return results
// }




// Will find a given driver

// function isDriver(driver) {
//     return driver.title === 'Erosh'
// }
// loopThroughAndFind(driver, isDriver)



// let foundItem = driver.find(isDriver)
// console.log(foundItem)

// let foundItem = driver.find(driver =>driver.name === `Erosh`)
// console.log(foundItem)




let matchName = [
    { 
        name:'Morgan'
        hometown:'Kanairo'
    },
    {
        name:'Buchi'
        hometown:'Embu'
    },
    {
        name:'Elvis'
        hometown:'Coasto'
    }
]

function printReport(foo) {
    console.log(foo(matchName))
  
}

function totalHometown(array) {
    for(let item of array) { let total = 0}
    total += item.hometown

}
return `Total hometown ${total}items`

prints Report (total hometown)