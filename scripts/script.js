function showDate() {
    const date = document.getElementById('date')

    const d = new Date()

    currentDay = d.toString().slice(0,3)
    currentDate = d.toString().slice(7,10)
    currentMonth = d.toString().slice(4,7)


    date.textContent = `${currentDay}. ${currentDate}. ${currentMonth}.`
}

function showTime(){
    const time = document.getElementById('time')

    const d = new Date()

    currentHours = d.getHours().toString().padStart(2,0)
    currentMinutes = d.getMinutes().toString().padStart(2,0)
    currentSeconds = d.getSeconds().toString().padStart(2,0)

    time.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`
    
}

function activeSelection(){
    const listItems = document.querySelectorAll('.item')

    listItems.forEach(item =>{
        item.addEventListener('click', () =>{
            listItems.forEach(allItems => {allItems.classList.remove('active')})

            item.classList.add('active')
        })
    })
}

activeSelection()
showDate()
setInterval(showTime,1000)