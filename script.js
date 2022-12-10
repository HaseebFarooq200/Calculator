let ans=document.getElementById('ans');
let span=document.querySelectorAll('span');
let val='';
let sol;
for(item of span){
    item.addEventListener('click',(num)=>{
        spantext=num.target.innerText;
        // console.log(spantext)
        if(spantext == '=')
        {
            sol=eval(val)
            ans.innerHTML=sol
            val='';
            console.log(sol)
        }
        else if (spantext == 'AC')
        {
            val = "";
            ans.innerHTML = val;
        }
        else if (spantext == 'ANS') 
        {
            localStorage.setItem('savetext',JSON.stringify(sol));
            store=localStorage.getItem('savetext');
            ans.innerHTML=store;
            // console.log('Local Storage',store)
            
        }
        else if (spantext == 'BACK') 
        {
            val = "";
            ans.innerHTML = val;
        }
        else
        {
            val=val+spantext;
            ans.innerHTML=val;
        }
    })
}