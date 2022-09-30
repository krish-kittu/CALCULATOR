let screen=document.getElementById('screen');
buttons=document.querySelectorAll('button');
document.addEventListener('keydown',(event)=>{
    if(event.key=="Enter"){
        try {
            screenValue=eval(screenValue).toString();
            screen.value=screenValue;
            
        } catch (error) {
            screenValue="";
            screen.value="error!";
            
        }
    }
    else if(event.key=="c" || event.key=="Backspace"){
        screenValue="";
        screen.value=screenValue;
    }
    else if(event.key=="+" || event.key=="-" || event.key=="*" || event.key=="/" || event.key=="." || event.key==")"|| event.key=="("){
        screenValue+=event.key;
        screen.value=screenValue;
    }

    else if (event.key in ["1","2","3","4","5","6","7","8","9","0"]){
        screenValue +=event.key;
        screen.value=screenValue;
    }
})
let screenValue='';
for(item of buttons){
    item.addEventListener('click',(e)=>{
        buttonText=e.target.innerText;
        console.log(buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screenValue +=buttonText;
            screen.value=screenValue;

        }
        else if(buttonText=='sqrt'){
            buttonText=Math.sqrt(screenValue);
            screen.value=buttonText;

        }
        else if(buttonText=='c'){
           screenValue="";
           screen.value=screenValue;
        }
        else if(buttonText=='='){ 
            try {
                
                screenValue=eval(screenValue);
                screen.value=screenValue;
            } 
            catch (error) {
                screenValue="";
                screen.value="error!";
                
            }
        

        
        
        }
        else{
            screenValue+=buttonText;
            screen.value=screenValue;

        }
    })
}