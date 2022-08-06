const menuToggle = document.querySelector('.menu-toggle');

const navigation = document.querySelector('.navigation');

menuToggle.onclick = () => {
    navigation.classList.toggle('open')
}

const listItems = document.querySelector('list-item')
listItems.forEach(items => {
    items.onclick = () => {
        listItems.forEach(items=> 
    items.classList.remove("active"))
        items.classList.add('active')  
    }
});