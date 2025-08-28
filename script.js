


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
    
}



    





    



    





document.getElementById("call-btn").addEventListener('click', function(){


     ShowAlert('serviceName', 'serviceNumber')
     decCoin()
    

    
})



document.getElementById("police-btn").addEventListener('click', function(){

    ShowAlert('serviceName1', 'serviceNumber2')


    decCoin()

    
    
})
document.getElementById("fair-btn").addEventListener('click', function(){

    ShowAlert('fire-service', 'fire-number')


    decCoin()

    
    
})
document.getElementById("ambulance-btn").addEventListener('click', function(){

    ShowAlert('ambulance-service', 'ambulance-number')


    decCoin()

    
    
})
document.getElementById("women-btn").addEventListener('click', function(){

    ShowAlert('women-service', 'women-number')


    decCoin()

    
    
})
document.getElementById("corruption-btn").addEventListener('click', function(){

    ShowAlert('electricity-service', 'electricity-number')


    decCoin()

    
    
})
document.getElementById("electricity-btn").addEventListener('click', function(){

    ShowAlert('corruption-service', 'corruption-number')


    decCoin()

    
    
})
document.getElementById("brac-btn").addEventListener('click', function(){

    ShowAlert('brac-service', 'brac-numbber')


    decCoin()

    
    
})
document.getElementById("railway-btn").addEventListener('click', function(){

    ShowAlert('railway-service', 'railway-number')


    decCoin()

    
    
})








