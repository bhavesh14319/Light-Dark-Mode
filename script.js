const toggleSwitch = document.getElementById('toggleSwitch');
const body= document.body;
const nav = document.getElementById('nav');
const a =  document.getElementsByClassName('link');
const toggleText = document.querySelector('.toggle-Text');
const imageContainer= document.querySelectorAll('.imageContainer')
const textBox = document.getElementById('ProjectsDiv');
const toggleIcon = document.getElementById('toggle-icon');
const fab = document.querySelectorAll('.fab');
console.log(document.styleSheets);


// background-color: #484849;
// background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%232a282d' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");


function setLightBackground(){
   body.style.backgroundColor= '#fcffff';
   body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%23abd1be' fill-opacity='0.33' fill-rule='evenodd'/%3E%3C/svg%3E")`;
   Array.from(a).forEach(element => {
    element.style.color='rgb(255, 92, 92)';
    element.setAttribute("onHoverInLightMode","1");
    });
    nav.style.background='rgb(255 255 255 / 50%)';
    body.style.color = 'rgb(0 0 0)';
    toggleText.textContent='Light Mode';
    toggleText.style.color='Black';
    textBox.style.background = 'rgba(0, 0 ,0 ,0.5)';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    Array.from(fab).forEach(element=>{
        element.style.color='rgb(255, 92, 92)';
    });  
    Array.from(imageContainer).forEach(element=>{
        element.style.boxShadow='0 5px 20px 1px rgba(0,0,0,0.5)';
    });    
    
}


function setDarkBackground(){
    body.style.backgroundColor = '#484849';
    body.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L0 20z' fill='%232a282d' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E") `;
    nav.style.background='rgb(0 0 0 /50%)';
    body.style.color = 'rgb(255 255 255 )';
    Array.from(a).forEach(element => {
        element.style.color='white';
    });
    toggleText.textContent='Dark Mode';
    toggleText.style.color='white';
    Array.from(imageContainer).forEach(element=>{
        element.style.boxShadow='0 5px 20px 1px rgba(255,255,255,0.5)';
    });    
    textBox.style.background = 'rgba(255, 255 ,255 ,0.5)';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    Array.from(fab).forEach(element=>{
        element.style.color='white';
    });    
}


function switchTheme(event){
    console.log(event.target.checked);
    if(event.target.checked){
        setDarkBackground();
        localStorage.setItem('theme','dark');
    }else{
        setLightBackground();
        localStorage.setItem('theme','light');
    }    
}




toggleSwitch.addEventListener('change',switchTheme);

const currentTheme = localStorage.getItem('theme');
console.log(currentTheme);
if(currentTheme==='dark'){
    toggleSwitch.checked=true;
    setDarkBackground();
}