let a = '';// первое число
let b = '';//второе число 
let sign = ''; //знак операции
let finish = false;//Состояние выражение 

const gidit = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.' ];
const action = ['-', '+', 'X', '/'];

// ekran 

const out = document.querySelector('.calc-screen p ');

function clearAll (){
    a = ''
    b = ''
    sign = ''
    finish  = false;
    out.textContent = 0;
    

}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {

    //knopka ne nazhata
    if(!event.target.classList.contains('btn')) return;
    //knopka nazhata
    if(event.target.classList.contains('ac'))return;
    
    out.textContent = '';
    //получаю нажатую кнопку
    const key = event.target.textContent;
    //esli nazhata ot 0-9 ili .
    if (gidit.includes(key)) {
        if(b === '' && sign ===''){
            a+=key;
            
            out.textContent = a;
        }
        else if(a!=='' && b !== '' && finish){
            b = key;
            finish = false;
            out.textContent = b;


        }
        else{
            b += key;
            out.textContent = b;
        }
        console.log(a, b, sign);
        return;



    }

    //knopki action
    
    if (action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.log(a, b, sign);
        return;
    }
    
    //knopka ravno

    if (key === '='){
        if (b === '') b = a;
        
        switch(sign){
            case"+":
                a = (+a) + (+b)
                break;
            case"-":
                a = a - b
                break;
            case"X":
                a = a * b
                break;
            case "/":
                if (b === '0'){
                    out.textContent = 'Nelzya na 0 delit';
                    a = '';
                    b = '';
                    sign = '';
                    return;



                }
                a = a / b
                break;
        }
        finish = true;
        out.textContent = a;
        console.table(a, b, sign);

    }






}


