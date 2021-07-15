const light = document.getElementById("light1");
let activeLight = false;

setInterval( () => {

    activeLight = !activeLight;

    if (activeLight){
        light.classList.add('active1')
    } else{
        light.classList.remove('active1')
    }
}, 10000);


const light1 = document.getElementById("light2");
let activeLigh = false;

setInterval( () => {

    activeLigh = !activeLigh;

    if (activeLigh){
        light1.classList.add('active2')
    } else{
        light1.classList.remove('active2')
    }
}, 5000);


const light2 = document.getElementById("light3");
let activeLigth = false;

setInterval( () => {

    activeLigth = !activeLigth;

    if (activeLigth){
        light2.classList.add('active3')
    } else{
        light2.classList.remove('active3')
    }
}, 15000);
