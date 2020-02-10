function cardsNumbers(card){
let value
switch(card)    {
    case 'A':
        value='1'
        break;
        case 'K':
        value='13'
        break;
        case 'Q':
        value='12'
        break;
        case 'J':
        value='11'
        break;
        default:
        value=Number(card);

    }
return value;
}

let output = cardsNumbers('K');
console.log(output)