let user = getUser()

function showDate() {
    const date = document.getElementById('date')
    const dateLogin = document.querySelector('.date')

    const d = new Date()

    currentDay = d.toString().slice(0,3)
    currentDate = d.toString().slice(7,10)
    currentMonth = d.toString().slice(4,7)


    date.textContent = `${currentDay}. ${currentDate}. ${currentMonth}.`
    dateLogin.textContent = `${currentDay}, ${currentDate}. ${currentMonth}`
}

function showTime(){
    const time = document.getElementById('time')
    const timeLogin = document.querySelector('.time')

    const d = new Date()

    currentHours = d.getHours().toString().padStart(2,0)
    currentMinutes = d.getMinutes().toString().padStart(2,0)
    currentSeconds = d.getSeconds().toString().padStart(2,0)

    time.textContent = `${currentHours}:${currentMinutes}:${currentSeconds}`
    timeLogin.textContent = `${currentHours}:${currentMinutes}`

}

function activeSelection(){
    const listItems = document.querySelectorAll('.item')

    listItems.forEach(item =>{
        item.addEventListener('click', () =>{
            listItems.forEach(allItems => {allItems.classList.remove('active')})

            item.classList.add('active')
            displayImage()
            displayImageInformation()
        })
    })
}

activeSelection()
showDate()
showTime()
setInterval(showTime,1000)

const imageSet = {
    folder: [
        {id:1, image: './media/folder.png'}
    ],
    strafe: [
        {id:1, image: './media/strafe.png', created: 'created: 12.07.25 <br>', used: 'used: AI and PS'}
    ],

    archive1: [
        {id:1, image: './media/archives1.png'}
    ],

    archive2: [
        {id:1, image: './media/archives2.png'}
    ],

    cyanide1: [
        {id:1, image: './media/cyanide1.png'}
    ],

    deads1: [
        {id:1, image: './media/deads1.png'}
    ],

    disaster1: [
        {id:1, image: './media/disaster2.png'}
    ],

    disaster2: [
        {id:1, image: './media/disaster3.png'}
    ],

    disaster3: [
        {id:1, image: './media/disaster.png'}
    ],

    disaster4: [
        {id:1, image: './media/disaster4.png'}
    ],

}


function displayImage() {
    const activeItem = document.querySelector('.item.active')

    const itemAttribute = activeItem.getAttribute('item')

    if(imageSet[itemAttribute]){
        const imageSrc = imageSet[itemAttribute][0].image

        const displayArea = document.querySelector('.image__display img')
        displayArea.src = imageSrc
    }
}

function displayImageInformation(){
    const activeItem = document.querySelector('.item.active')

    const itemAttribute = activeItem.getAttribute('item')

    if(imageSet[itemAttribute]){
        const textSrc = imageSet[itemAttribute][0].created
        const textSrc2 = imageSet[itemAttribute][0].used

        const displayTextArea = document.querySelector('.image__content')

        displayTextArea.innerHTML = textSrc + textSrc2

    }
}

function displayOSInformation(){
    const activeItem = document.querySelector('.item.active')

    const itemAttribute = activeItem.getAttribute('item')

    const d = new Date()
    const date = d.toString().slice(0,24)

    const currUser = localStorage.getItem('user');

    if(imageSet[itemAttribute]){
        const osInfo = document.querySelector('.os__content')

        osInfo.innerHTML = 'Last login: ' + date + ' on ttys00 <br>' + currUser +
        '@Air-von-' + currUser + ' ~ % <br><br>'
    }
}

function clearLogin(){
    const loginScreen = document.querySelector('.login__screen')
    const username = document.querySelector('.username')
    const guestLogin = document.querySelector('.guest_login')

    const savedUser = localStorage.getItem('user');
    if (savedUser) {
        loginScreen.classList.add('hidden');
        console.log('User already logged in:', savedUser);
    }

    username.addEventListener('keydown', (event) =>{
        if(event.key === 'Enter'){
            loginScreen.classList.add('hidden')
            user = getUser()
            localStorage.setItem('user', user);
            console.log('user:', user)
            displayOSInformation()
        }
    })

    guestLogin.addEventListener('click', ()=>{
        loginScreen.classList.add('hidden')
    })
}

function getUser(){
    const usernameInput = document.querySelector('.username input')
    if(usernameInput.value !== ''){
        return usernameInput.value
    } else{
        return 'guest'
    }
}

function switchUser(){
    const logOutButton = document.getElementById('userswitch')
    const loginScreen = document.querySelector('.login__screen')

    logOutButton.addEventListener('click',()=>{
        loginScreen.classList.remove('hidden');
        localStorage.removeItem('user');
        user = 'guest'
        console.log('removed user. current user:',user)
        setTimeout(() => {
            displayOSInformation();
        }, 1000);
    })
}

function folderFunction() {
    const folders = document.querySelectorAll('.item[item="folder"]');

    folders.forEach(folder => {
        const folderContent = folder.nextElementSibling;
        const folderCaret = folder.querySelector('.folder_button img');

        folder.addEventListener('dblclick', () => {
            toggleFolder(folderContent, folderCaret);
        });

        folder.querySelector('.folder_button').addEventListener('click', () => {
            toggleFolder(folderContent, folderCaret);
        });
    });

    function toggleFolder(content, caret) {
        if (content) {
            content.classList.toggle('hide_folder');

            if (content.classList.contains('hide_folder')) {
                caret.src = './media/caret-right.svg';
            } else {
                caret.src = './media/caret-down.svg';
            }
        }
    }
}


folderFunction()
clearLogin()
switchUser()
displayOSInformation()
displayImageInformation()
