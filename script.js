const toggle=document.getElementById('menu-icon')
const header=document.getElementById('header')
const search = document.getElementById('second')
const div = document.getElementById('searchactive')
const divout= document.getElementById('imageclose')
const searching = document.querySelector('.searching')
const smallbtn= document.getElementById('smallbtn')



toggle.addEventListener('click',function(){
    header.classList.toggle('active')
})

search.addEventListener('click',function(){
    const ele=window.getComputedStyle(searching).display
    if(ele=='none'){
    searching.style.display = "block"
}
})
smallbtn.addEventListener('click',function(){
    const ele=window.getComputedStyle(searching).display
    if(ele=='none'){
    searching.style.display = "block"
}
})

divout.addEventListener('click',function(){
    const ele=window.getComputedStyle(searching).display
    if(ele=='block')
    {
        searching.style.display = "none"
    }
   
    
})

//  function toggleMenuList() {
//     const menuList = document.getElementById('menuList');
//     if (menuList.style.display === 'block') {
//       menuList.style.display = 'none';
//     } else {
//       menuList.style.display = 'block';
//     }
//   }