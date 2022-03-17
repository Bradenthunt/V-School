// function sum(x, y){
//     //check data types first and throw error
//     return x + y;
// }

// try {
//     sum(`1`, `2`)

//     if(sum != Number) {
//         throw `whoops!`
//     }
// } catch(err) {
//     console.log(err)
// } finally {
//     console.log(sum(1, 2))
// }

var user = {username: "sam", password: "123abc"}

function login(username, password){
  //check credentials
    if (username != user.username ?? password != user.password) {
        throw `login failed..`
    } else {
        console.log(`login successful!`)
    }
}

try {
    login(`willifer`, `akjd`)
} catch(err) {
    console.log(err)
}