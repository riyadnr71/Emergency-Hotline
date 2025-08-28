


function heartCount(id){

    document.getElementById(id).addEventListener('click', function(){
        totalHeartCount +=1;
        clickCount.innerHTML= totalHeartCount
        return;
    })
}


const  clickCount = document.getElementById('countheart')


    let totalHeartCount = 0;


heartCount('heart');
heartCount('heart1');
heartCount('heart2');
heartCount('heart3');
heartCount('heart4');
heartCount('heart5');
heartCount('heart6');
heartCount('heart7');
heartCount('heart8');







//   alert function

function ShowAlert (serviceNameId, serviceNumberId){

     const serviceName = document.getElementById(serviceNameId).innerText;

    const serviceNumber = document.getElementById(serviceNumberId).innerText;

     const alertMessage = 'Calling'+ ' ' + serviceName + ' ' + serviceNumber;



    alert(alertMessage)

    return alert


    

}



// coin 

function decCoin(){
    const coin2 = document.getElementById('coin-balance')

     let coin1 = parseInt(coin2.innerText);

    let newCoin = coin1 - 20



    if(newCoin >=0){

        coin2.innerText = newCoin

        ShowAlert('serviceName', 'serviceNumber')

    }

    else{
        alert('আপনার পর্যাপ্ত কয়েন নেই!কল করতে কমপক্ষে 20 টি কয়েক লাগবে।')
    }
    return

}



    





    



    





document.getElementById("call-btn").addEventListener('click', function(){


     ShowAlert('serviceName', 'serviceNumber')
     decCoin()
    
    
    // const coin2 = document.getElementById('coin-balance')

    // let coin1 = parseInt(coin2.innerText);

    // let newCoin = coin1 - 20

    // coin2.innerHTML = newCoin

    // if(newCoin < 0 ){
    //     alert('আপনার পর্যাপ্ত কয়েন নেই!কল করতে কমপক্ষে 20 টি কয়েক লাগবে।')


    // } 
    
    
    

 
    
})



document.getElementById("police-btn").addEventListener('click', function(){

    ShowAlert('serviceName1', 'serviceNumber2')


    if(coin1 =0 ){
        alert('আপনার পর্যাপ্ত কয়েন নেই!কল করতে কমপক্ষে 20 টি কয়েক লাগবে।')
    }
   

    let coin1 = parseInt(coin2.innerText);

    let newCoin = coin1 -20

    coin2.innerHTML = newCoin

    


    


    
    

 
    
})








