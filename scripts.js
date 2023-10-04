const getHours = () => {
    const clock = document.getElementsByClassName('clock')[0]
    const date = new Date()
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()
    const hour = hours < 10 ? `0${hours}` : hours
    const minute = minutes < 10 ? `0${minutes}` : minutes
    const second = seconds < 1 ? `0${seconds}` : seconds
    clock.innerHTML = `${hour}:${minute}:${second}`
}

setInterval(()=>{
    getHours()
}, 1000)

function search(){
    let input = document.getElementById('searchbar')
    input = input.toLowerCase()
    let x = document.getElementsByClassName('')
    for( i = 0; o < x.length;  i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = 'none'
        }else{
            x[i].style.display = 'list-item '
        }
    }
}