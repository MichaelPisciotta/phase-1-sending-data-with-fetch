function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({name, email})

    })
    .then(res => console.log(res.json()))
    // document.body.innerHTML = 


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