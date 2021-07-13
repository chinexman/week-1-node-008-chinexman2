

const input1 = [
    {
      name: 'Hendrick',
      dob: '1853-07-18T00:00:00.000Z',
      regNo: '041',
    },
    {
      name: 'Albert',
      dob: '1879-03-14T00:00:00.000Z',
      regNo: '033',
    },
    {
      name: 'Marie',
      dob: '1867-11-07T00:00:00.000Z',
      regNo: '024',
    },
    {
      name: 'Neils',
      dob: '1885-10-07T00:00:00.000Z',
      regNo: '02',
    },
    {
      name: 'Max',
      dob: '1858-04-23T00:00:00.000Z',
      regNo: '014',
    },
    {
      name: 'Erwin',
      dob: '1887-08-12T00:00:00.000Z',
      regNo: '09',
    },
    {
      name: 'Auguste',
      dob: '1884-01-28T00:00:00.000Z',
      regNo: '08',
    },
    {
      name: 'Karl',
      dob: '1901-12-05T00:00:00.000Z',
      regNo: '120',
    },
    {
      name: 'Louis', //
      dob: '1892-08-15T00:00:00.000Z',
      regNo: '022',
    },
    {
      name: 'Arthur',
      dob: '1892-09-10T00:00:00.000Z',
      regNo: '321',
    },
    {
      name: 'Paul',
      dob: '1902-08-08T00:00:00.000Z',
      regNo: '055',
    },
    {
      name: 'William',
      dob: '1890-03-31T00:00:00.000Z',
      regNo: '013',
    },
    {
      name: 'Owen',
      dob: '1879-04-26T00:00:00.000Z',
      regNo: '052',
    },
    {
      name: 'Martin',
      dob: '1871-02-15T00:00:00.000Z',
      regNo: '063',
    },
    {
      name: 'Guye',
      dob: '1866-10-15T00:00:00.000Z',
      regNo: '084',
    },
    {
      name: 'Charles',
      dob: '1868-02-14T00:00:00.000Z',
      regNo: '091',
    },
  ];

function convertToyear(dobitem,index,array){

let date = new Date();
let nowdate = Date.parse(date);
let newdate = Date.parse(dobitem.dob);
function convertmili( mSeconds )
{
    var checkYear = Math.floor(mSeconds / 31536000000);
    return checkYear;
}

let today =convertmili(nowdate);
let givendate = convertmili(newdate);

 dobitem.age = today- givendate;
 //dobitem.age = dobitem.dob
return dobitem;

}
//console.log(convertToyear('1858-04-23T00:00:00.000Z'))
let newimput = [];
console.log(newimput.length-1)

const convertyear = (item,index,arr)=>{
return convertToyear(item);

} 
newimput = input1.map(convertyear);

console.log(newimput)

console.log(newimput.sort((persona,personb)=>persona.age -personb.age));


// function groubBy(objectArray,property){
//     return objectArray.reduce((acc,obj)=>{
//         let key = obj[property];
//          //   if (!acc[key]) {
//     //     acc[key] = [];
//     //   }
//         acc[key]= acc[key]||[];
//         acc[key].push(obj);
//         return acc;
//     },{})
// }
// let groupdob = groubBy(newimput,"dob");

// console.log(groupdob)

let Largegroup = [];
let mingroup = [];



