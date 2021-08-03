async function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify(name, email)
    })
    .then(res => res.json())


 }




//  const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json"
//     },
//     body: JSON.stringify({
//       dogName: "Byron",
//       dogBreed: "Poodle"
//     })
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject); 