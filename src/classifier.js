/**
 * This is the entry point to the program
 * Question 1 - Classifier
 *
 * @param {any} input Array of student objects
 */
 function classifier(input) {
    if( input.length == 0){
      return { noOfGroups: 0}
    }
  //add the age property to the students in the input array
  let studentsWithAge = input.map( (student)=>{
      let currentYear = 2019 //new Date(  Date.now()  ).getFullYear();
      let studentYearOfBirth = new Date( student.dob ).getFullYear();
  
      let  studentAge = currentYear - studentYearOfBirth;
      student.age = studentAge;
      return student;
  
  });
  
  let sortedStudentsByAge = studWithAge.sort( (studentA, studentB)=> studentA.age - studentB.age);
  console.log(sortedStudentsByAge)
  let groupedStudent = sortedStudentsByAge.reduce( (groups, student)=>{

      const latestGroup = groups[ groups.length - 1];
        console.log(latestGroup)
      if( latestGroup.length === 3){ //latestGroup is full
  
        const newGroup = []
        newGroup.push( student);
        console.log(newGroup)
        groups.push( newGroup );
        
  
        return groups;
      }
      //latestGroup is not full
  
      if( latestGroup.length > 0){
        //latestGroup is not empty
        const lastStudentInLatestGroup = latestGroup[ latestGroup.length - 1];
        let studentCanEnterGroup = (student.age - lastStudentInLatestGroup.age ) <= 5
        if( studentCanEnterGroup){
          latestGroup.push(student);
          console.log(latestGroup)
        } else{
              const newGroup = [];
              newGroup.push(student)
              console.log(newGroup)
              groups.push(newGroup)
        }
  
      }else{
        //latestGroup empty
        latestGroup.push(student)
      }
  
  
      console.log(groups)

  
      return groups;
  }, [ []  ]);
  
  groupedStudent
  const finalOutput = {};
  //set the the number of groups
  finalOutput.noOfGroups = groupedStudent.length;
  for ( let index = 0; index < groupedStudent.length; index++){
      let currentGroupMembers = groupedStudent[index];
      let currentGroup = {}
  
      let members = currentGroupMembers;
      console.log(currentGroupMembers)
      
      let oldest = currentGroupMembers[ currentGroupMembers.length -1 ].age;
      let sum = currentGroupMembers.reduce( (acc, student)=> acc + student.age, 0)
      let regNos = currentGroupMembers.map( student=> +student.regNo).sort( (a,b)=> a-b)
  console.log(regNos)
  
      currentGroup.members = members;
      currentGroup.oldest = oldest;
      currentGroup.sum = sum;
      currentGroup.regNos = regNos
  
      let groupName = `group${index+1}`;
  
      finalOutput[groupName] = currentGroup;
  }
  
  console.log(finalOutput)
  return finalOutput
  
  }
  
  
  
  const input = [
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
  
  
  
  //   console.log( input.map(person=> {
  // let currentYear = 2021;
  // let personYob = new Date( person.dob ).getFullYear();
  // person.age = currentYear - personYob;
  // return person;
  // }).sort( (persona, personb)=> persona.age - personb.age))
  
  classifier(input);
  
  
  
  
  
  module.exports = classifier;