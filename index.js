console.log("hello world");
let x=13;
console.log(typeof x);
const number=new Array(1,2,3);
console.log(number);
console.log(Array.isArray(x));
const person={
     name: "石锦文",
     score: 100,
     arr:[1,2,3,4,5]

};
console.log(person.arr[1]);
person.all=1;
console.log(person);
const todo=[
    {id:1,
        is:false,
        name:"learn"
    },{
        id:2,
        is:true,
        name:"make money"
    }
];
const toJson=JSON.stringify(todo);
console.log(toJson);