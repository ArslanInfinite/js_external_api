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
            // response will be parsed as a JSON object 
            const response = JSON.parse(this.responseText)

            let output = ''
            if(response.type === 'success'){
                response.value.forEach(function(joke){
                    output += `<li>${joke.joke}</li>`
                })
            } else {
                output += '<li>Something went wrong</li>'
            }
            // putting the list order jokes into the unordered list element while
            // setting the innerHTML to hte value of output
            document.querySelector('.jokes').innerHTML = output 
        }
    }
    xhr.send()

    event.preventDefault()
}