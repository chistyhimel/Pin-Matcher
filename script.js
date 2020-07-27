const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click',function(){
    const generateRandomNum = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('generate-display').value = generateRandomNum;
})

const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener('click',function(){
    var displayGenNum =parseFloat(document.getElementById('generate-display').value);
    var displaySubNum =parseFloat(document.getElementById('submit-display').value);
    if ( displayGenNum == displaySubNum){
        document.getElementById('notify-didnotmatched').style.display="block";
        document.getElementById('notify-matched').style.display="none";
        document.getElementsByClassName('action-left')[0].style.display="none";
    }
    else{
        document.getElementById('notify-matched').style.display="block";
        document.getElementById('notify-didnotmatched').style.display="none";
        var tryLeft = parseFloat(document.getElementById('try-left').innerText);
        document.getElementsByClassName('action-left')[0].style.display="block";
       var tryLeft= document.getElementById('try-left').innerText = tryLeft-1;
        if (tryLeft<=0){
            document.getElementById('submit-btn').style.display="none";
        }
    }
    
}) 