//  $(document).ready(function(){
    setTimeout(function(){
        document.querySelector(".loading").style = 'display : none';
    }, 3000);
   
//  })
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior : "smooth"
        })
    })
})    