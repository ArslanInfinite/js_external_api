document.querySelector('.get-jokes').addEventListener('click', getJokes)

function getJokes(event){

    // grabbing the value of the number in number input field
    const number = document.querySelector('input[type="number"]').value

    // creating new xhr variable with a value of a new XMLHttpRequest
    xhr = new XMLHttpRequest()
    // the template literal will be the number of jokes requested from the api
    xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true)

    xhr.onload = function(){
        if(this.status === 200) {
            const response = this.responseText
            console.log(response)
        }
    }
    xhr.send()

    event.preventDefault()
}