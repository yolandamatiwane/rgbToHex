let inpR = document.querySelector('#inpR')
let inpG = document.querySelector('#inpG')
let inpB = document.querySelector('#inpB')
let btn = document.querySelector('button')
let ansHex = document.querySelector('#hex')

function cal(m){
    result = Math.floor(eval(`${m}/${16}`))
    switch (true) {
        case result<10:
            return result
            break;
        case result==10:
            return 'A'
            break;
        case result==11:
            return 'B'
            break;
        case result==12:
            return 'C'
            break;
        case result==13:
            return 'D'
            break;
        case result==14:
            return 'E'
            break;
        case result==15:
            return 'F'
            break;
    
        default:
            break;
    }
}

function rem(m){
    result = Math.floor(eval(`${m}/${16}`))
    remainder = eval(`((${m}/${16})-${result})*${16}`)
    switch (true) {
        case remainder<10:
            return remainder
            break;
        case remainder==10:
            return 'A'
            break;
        case remainder==11:
            return 'B'
            break;
        case remainder==12:
            return 'C'
            break;
        case remainder==13:
            return 'D'
            break;
        case remainder==14:
            return 'E'
            break;
        case remainder==15:
            return 'F'
            break;
    
        default:
            break;
    }
}

btn.addEventListener('click',()=>{
    ansHex.value += '#'+ cal(inpR.value).toString() + rem(inpR.value).toString() + cal(inpG.value).toString() +rem(inpG.value).toString() + cal(inpB.value).toString() + rem(inpB.value).toString()
})
