var div1 = document.getElementById('indoor-class')
var div2 = document.getElementById('alioc-class')
var div3 = document.getElementById('interactive-class')
var div4 = document.getElementById('outdoor-class')
var spin = document.getElementById('spinner-loader')



var display = 0;

function hideshow1() {
    if (display == 1) {
        // div1.style.display='none';
        // spin.style.display='block';
        display= 0;
    }
    else{
        div1.style.display = 'block';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        spin.style.display ='none';
        display = 1 ;
    }
}

function hideshow2() {
    if (display == 1) {
        // div2.style.display='none';
        // spin.style.display='block';
        display= 0;
    }
    else{
        div1.style.display = 'none';
        div2.style.display = 'block';
        div3.style.display = 'none';
        div4.style.display = 'none';
        spin.style.display ='none';
        display = 1 ;
    }
}
function hideshow3() {
    if (display == 1) {
        // div3.style.display='none';
        // spin.style.display='block';
        display= 0;
    }
    else{
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'block';
        div4.style.display = 'none';
        spin.style.display ='none';
        display = 1 ;
    }
}
function hideshow4() {
    if (display == 1) {
        // div4.style.display='none';
        // spin.style.display='block';
        display= 0;
    }
    else{
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'block';
        spin.style.display ='none';
        display = 1 ;
    }
}


function hideshowz() {
    if (display == 1) {
        div1.style.display = 'block';
        div2.style.display = 'block';
        div3.style.display = 'block';
        div4.style.display = 'block';
        spin.style.display = 'none';
        display= 0;
    }
    else{
        div1.style.display = 'none';
        div2.style.display = 'none';
        div3.style.display = 'none';
        div4.style.display = 'none';
        spin.style.display = 'block';
        display = 1 ;
    }
}