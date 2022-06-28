// Add your code here

//LAB INSTRUCTIONS

function submitData(name, email) {

    return fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
                name,
                email

        })

    })
    .then( response => response.json() )
    .then( response => {
            document.body.innerHTML = `<p>${response.id}</p>`
    })
    .catch(error => {
        document.body.innerHTML = `<p>${error.message}</p>`
    })
}