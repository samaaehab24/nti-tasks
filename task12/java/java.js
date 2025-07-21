let users = [];

function addUser(name, id, balance){
    users.push({name, id, balance});
}

function updateBalance(id, newBalance){
    let user = users.find(user => user.id === id);
    if(user){
        user.balance = newBalance;
        console.log(`Balance updated successfully: ${user.name} now has ${user.balance}`)
    }else{
        console.log("User not found");
    }
}

function deleteUser(id){
    let index = users.findIndex(user => user.id === id);
    if(index !== -1){
        users.splice(index, 1);
        console.log(`User with ID ${id} has been deleted`);
    }else{
        console.log("User not found");
    }
}

let count = Number(prompt("How many users?"));

for( let i = 0; i < count; i++){
    let name = prompt("Enter name for user");
    let id = prompt("Enter id for user");
    let balance = Number( prompt("Enter balance for user"));
    addUser(name, id, balance);
}

console.log("Users after adding: ");
console.table(users);

let updateId = prompt("Enter the ID of the user you want to update balance for:");
let newBalance = Number(prompt("Enter the new balance:"));
updateBalance(updateId, newBalance);

let deleteId = prompt("Enter the ID of the user you want to delete:");
deleteUser(deleteId);

console.log("Users after update and delete:");
console.table(users);
