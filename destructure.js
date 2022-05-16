const person = { name: 'Biber', age: 27, job: 'facebook', gfName: 'Shelina', address:'NYC', phone:'012874211', friends:['Todo', 'Alex', 'Jecika']};

const {phone, gfName, address, salary} = person;

const complexObject ={
    name: 'abc',
    info:{
        address: 'Dhaka',
        leader: 'Tiger Bhai'
    }
}

const{leader} = complexObject.info;
//const gfName = person.gfName;
// const phone = person.phone;


// console.log(gfName, phone);
// console.log(gfName, phone, salary , address);
// console.log(gfName, phone, salary , address);
// console.log(gfName, phone);

const friends = ['salman',  'Amir', 'Hafiz', 'Mofiz', 'Tofiz'];
const [firstFriend, secondFriend, ...restFriends] = friends;
console.log(firstFriend, secondFriend);
console.log(restFriends);

