//const users = ["M", "A", "T"];
const users = [ {name:  "simge",id:5},
{name:"Sıla",id:8}]

//push
/*users.push("S");
console.log(users);*/

//map
/*users.map ((item) => {
    console.log(item);
})*/

const filtered = users.filter (({name,id}) => name ==="simge" && id===8);
console.log(filtered);