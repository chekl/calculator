let calcInput = $('.calc-input');
let pressBtn;
let currentId = 0;

$('document').ready(function(){  

    $('.calc-btn').on('click', show);
    $('.equal-btn').on('click', answer)

});

function displayScreen(el){
    calcInput.append(el);
}

function show() {
    let operation, u =/[^0-9]/g, k = /[^0-9]{2}/g;

    if(calcInput.html().charAt(0) === '0'){
        calcInput.html('')
    } 

    let result = $(this).html();
   
    displayScreen(result);
    
    if(u.test(result)){
        operation = $(this).html();
    }

    if(result === $('.delete-btn').html()) {
        calcInput.html(0);
    }
    
    let str = calcInput.html();
    if(k.test(str)) {
        calcInput.html('');
        displayScreen(str.replace(k, operation));
    }
}

 function answer() {
    let str = calcInput.html();
    let answer = '';
    let arr = [];
    let second;
    
    switch(true) {
        case str.includes('+'): 
            arr = str.split('+');
            second = arr[1];
            answer = +arr[0] + +second;
            input();
        break;

        case str.includes('-'): 
            arr = str.split('-');
            second = arr[1];
            answer = +arr[0] - +second;
            input();
        break;

        case str.includes('*'): 
            arr = str.split('*');
            second = arr[1];
            answer = +arr[0] * +second;
            input();
        break;

        case str.includes('/0'):
            calcInput.html('ERROR')
        break;

        case str.includes('/'): 
            arr = str.split('/');
            second = arr[1];
            answer = +arr[0] / +second;
            input()
        break;

        case str.includes('ERROR'): 
            calcInput.html(0);
        break;

        default: null;
    }

function input() {
        
        calcInput.html(0)  
        $('.log')
        .prepend('<div id='+currentId +' class=log-block><div onclick=markLog('
        + currentId + ') class=circle></div><p>'+
        str + '=' + answer
        +'</p><div onclick=deleteLog('+ currentId + ') class=remove-log>&#215;</div></div>');
        
        // eslint-disable-next-line no-magic-numbers
        if(answer === 48||str.includes(48)){
            $('#'+currentId+'>p').addClass('log-text')
        }
        currentId++
    }
}

function markLog(id) {
    $('.log').find('#' + id).find('.circle').toggleClass('circle-click');
}

function deleteLog(id) {
    $('.log').find('#' + id).remove();
}