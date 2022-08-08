
const fetch = require('cross-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }else if(res.status >= 200){
      return res.json();
    }else if(res.status >= 500){
      throw new Error("Internal Server Error")
    }
  })
  .then(data => {
    data.map(item =>{
      console.log(`Nama : ${item.name}`)
    })
  })
  .catch(err => {
    console.error(err.message);
  });