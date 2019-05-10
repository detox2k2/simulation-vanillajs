document.getElementsByClassName('add-button').addEventlistener('click', function(e){
    let name = document.getElementById('name').value
    let amount = document.getElementById('amount').value
    let li = document.createElement('li')
    li.innerText = ('name', '','amount')
    document.querySelector('ul').append(li)
})