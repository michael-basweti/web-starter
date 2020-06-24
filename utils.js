function showMessage(message){
    document.getElementById('message').textContent = message
}

const button = document.getElementById('see-review')

button.addEventListener('click', function(){
    const review = document.getElementById('review')

    if (review.classList.contains('d-none')){
        review.classList.remove('d-none')
    }else{
        review.classList.add('d-none')
    }
    
    
})