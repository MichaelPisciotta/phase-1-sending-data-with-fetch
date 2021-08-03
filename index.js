function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body:JSON.stringify({name, email})

    })
    .then(res => () =>{
        return res.json()
    })
    .then(data => renderId(data))
    


 }

function renderId(user){
    console.log(user)

}

