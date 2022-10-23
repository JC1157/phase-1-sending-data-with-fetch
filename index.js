// Add your code here

// Headers for 'Content-Type' and 'Accept', both set to 'application/json

function submitData () {
    fetch('http://localhost:3000/users',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        }, 
        body: JSON.stringify({
            "name" : 'Steve',
            'email' : 'steve@steve.com'
        })
    }) 
    .then(response => response.json() )
    .then(returnData => returnData.id)
    .catch(error => error.message)
    
       
       
       
       
       
}
submitData ()