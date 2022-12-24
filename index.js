const btnToTop = document.querySelector('.btn-top')
const btnLike = document.querySelectorAll('.btn-like')
// console.log(btnLike)
const likeList = document.querySelectorAll('.like')
const likedList = document.querySelectorAll('.liked')
const authorList = document.querySelectorAll('.author')
const btnReplise = document.querySelectorAll('.btn-replise')
// console.log(authorList)

// Scroll to top
btnToTop.addEventListener('click', function(){
    // for safari
    document.body.scrollTop = 0;
    // for ggchrome
    document.documentElement.scrollTop = 0;
    
})

// Handle Like and unlike

btnLike.forEach((bt,index) => {
    bt.addEventListener('click', function(){
       
        const like = likeList[index]
        const liked = likedList[index]
       

        like.classList.toggle('dsNone')
        liked.classList.toggle('dsNone')

        
    })
})

// Handle Replise
btnReplise.forEach((bt,index) => {
    bt.addEventListener('click', function(){
        const author = authorList[index]
        author.classList.toggle('dsNone')
    })
})