const a = "1";

console.log("aaa",a);

let hello:string = "world";
hello = "good";
console.log(hello);

const getFullname = (name:string,surname:string):string=>{
    return name + " " + surname;
}

console.log(getFullname("good","morning"));




type ID = string;
type PopularTag = string;

interface IUser{
   
    name:string;
    age?:number;
}

const PopularTags : PopularTag[]= ["dragon","coffee"];

 const user : IUser = {
     name : "Moster",
     age:30,
 };
 
 const user2 : IUser = {
     name:"jack"
 }
 console.log(user.name)

 let username : string = "alex";

 let pageName: string | null = null;

 let user3: IUser | null = null;

 let someProp : string | number | null | undefined | string[] | object;
