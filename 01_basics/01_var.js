const accountId = 144553
let accountEmail ="abhay@proton.mail"
var accountPassword ='1234'
accountCity='ldh'

let accountState;


// accountId = 2 //not allowed
console.log(accountId);

accountEmail ='hellokitty@me'
accountPassword = '232323'
accountCity ="Can"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

// prefer not to use var 
// because of issue in block scope and functional scope 