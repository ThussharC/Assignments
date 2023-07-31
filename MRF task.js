// Task 1
// Using map function

// Input declaration
// const scores = [
//     {
//       marks: 32,
//       name: "Yvette Merritt"
//     },
//     {
//       marks: 57,
//       name: "Lillian Ellis"
//     },
//     {
//       marks: 22,
//       name: "Mccall Carter"
//     },
//     {
//       marks: 21,
//       name: "Pate Collier"
//     },
//     {
//       marks: 91,
//       name: "Debra Beard"
//     },
//     {
//       marks: 75,
//       name: "Nettie Hancock"
//     },
//     {
//       marks: 20,
//       name: "Hatfield Hodge"
//     }
//   ];
// Object destructring
    // const names = scores.map((stu) =>{ 
    //     const {name} = stu;
    //     return name;
    // })
    // console.log(names);

//Box syntax
    // const names = scores.map((stu) => stu["name"]    
    // );
    // console.log(names);

//Task 2

    // Input declaration
// const scores = [
//     {
//       marks: 32,
//       name: "Yvette Merritt"
//     },
//     {
//       marks: 57,
//       name: "Lillian Ellis"
//     },
//     {
//       marks: 22,
//       name: "Mccall Carter"
//     },
//     {
//       marks: 21,
//       name: "Pate Collier"
//     },
//     {
//       marks: 91,
//       name: "Debra Beard"
//     },
//     {
//       marks: 75,
//       name: "Nettie Hancock"
//     },
//     {
//       marks: 20,
//       name: "Hatfield Hodge"
//     }
//   ];
//Filtering all objects with marks above (or) equal to 40
//   const res = scores.filter(funct => funct.marks >= 40);

//   console.log(res);

//Object destructring

// const resu = scores.filter(({marks}) => marks >=40);
// console.log(resu);

// Task 3

// Input declaration
// const scores = [
//     {
//       marks: 32,
//       name: "Yvette Merritt"
//     },
//     {
//       marks: 57,
//       name: "Lillian Ellis"
//     },
//     {
//       marks: 22,
//       name: "Mccall Carter"
//     },
//     {
//       marks: 21,
//       name: "Pate Collier"
//     },
//     {
//       marks: 91,
//       name: "Debra Beard"
//     },
//     {
//       marks: 75,
//       name: "Nettie Hancock"
//     },
//     {
//       marks: 20,
//       name: "Hatfield Hodge"
//     }
//   ];

// // Filters all objects with marks less than 40
// const res = scores.filter(({marks}) => marks < 40);

// // Function to get values (names) of failed students
// function getName(arr, key) {

//     let extractValue = arr.map(vals => vals[key]);
    
//     return extractValue;
    
// }
// // Function call
//     const result = getName(res, 'name');
//     console.log(result);

// Task 4
// Input declaration
// const scores = [
//     {
//       marks: 32,
//       name: "Yvette Merritt"
//     },
//     {
//       marks: 57,
//       name: "Lillian Ellis"
//     },
//     {
//       marks: 22,
//       name: "Mccall Carter"
//     },
//     {
//       marks: 21,
//       name: "Pate Collier"
//     },
//     {
//       marks: 91,
//       name: "Debra Beard"
//     },
//     {
//       marks: 75,
//       name: "Nettie Hancock"
//     },
//     {
//       marks: 20,
//       name: "Hatfield Hodge"
//     }
//   ];

// Function for obtaining marks of students
// function avgValue (arr,fld){
//     var output = [];
//     var sumArr = 0;
//     for (var i = 0; i < arr.length ; i++){
//         output.push(arr[i][fld]);       
//     }
//     console.log("The marks of the students are " + output);

//     addinArray(output);
// // Function for getting the average value of all marks
//     function addinArray(new_arr){
//         for (var i = 0; i< new_arr.length; i++){
//             sumArr += new_arr[i];
//             avgMarks = Math.floor((sumArr/(new_arr.length)));
//         }
//     console.log("The average marks are " + avgMarks);
//     }
// }

// // Function call
// avgValue(scores, "marks");