let btn=document.querySelector('button')
let as=0;
let listItems=document.querySelector('.list-items')
btn.onclick=()=>{
    listItems.innerHTML=''
    // listItems

}
let input=document.querySelector('input')
input.onkeyup=(gh)=>{
    if(gh.key=='Enter' && input.value!=''){
        let inputhrof=input.value;
        let individual=inputhrof.split('')

        individual.forEach((letter,index)=>{
            if(letter!=' '){
                as=10
            }


        })
        if(as==10){
            let p=document.createElement('p')
            p.innerHTML=input.value
            listItems.appendChild(p)
            input.value=''
            as=0;
        }
        if(as==0){
            input.value=''
        }

    }

}