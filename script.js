
const historyData = []


const  clickCopy = document.getElementById('copyCount')

let CopyTotal = 0;

function copyCountTotal(id){

    document.getElementById(id).addEventListener('click',function(){

        

        CopyTotal +=1;
        clickCopy.innerText = CopyTotal
        return

    })

}


copyCountTotal('copy')
copyCountTotal('copy1')
copyCountTotal('copy2')
copyCountTotal('copy3')
copyCountTotal('copy4')
copyCountTotal('copy5')
copyCountTotal('copy6')
copyCountTotal('copy7')
copyCountTotal('copy8')






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

     const alertMessage = '📞Calling'+ ' ' + serviceName + ' ' + serviceNumber;



    alert (alertMessage)

    

    

}



// coin 

function decCoin(){
    const coin2 = document.getElementById('coin-balance')

     let coin1 = parseInt(coin2.innerText);

    let newCoin = coin1 - 20

    coin2.innerText = newCoin


    if(newCoin>=0){


    }

    else{
       alert ('❌ আপনার পর্যাপ্ত কয়েন নেই!কল করতে কমপক্ষে 20 টি কয়েক লাগবে।')
    }
    
}



    





    



    





// document.getElementById("call-btn").addEventListener('click', function(){


//      ShowAlert('serviceName', 'serviceNumber')
//      decCoin()

//      const data = {
//         name : 'জাতীয় জরুরি সেবা',
//         Number: '999',
//         date : new Date().toLocaleTimeString()

//      }

//      historyData.push(data)
     
//      const historyItem = document.createElement('div');
//      historyItem.classList.add('history-item');


    
// })







document.getElementById("call-btn").addEventListener('click', function(){
    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    if(coinBalance >= 20) {
        ShowAlert('serviceName', 'serviceNumber');
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }
});









document.getElementById("police-btn").addEventListener('click', function(){


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    if(coinBalance >= 20) {
        ShowAlert('serviceName1', 'serviceNumber2');
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("fair-btn").addEventListener('click', function(){

    


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
        ShowAlert('fire-service', 'fire-number')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("ambulance-btn").addEventListener('click', function(){

    


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
        ShowAlert('ambulance-service', 'ambulance-number')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("women-btn").addEventListener('click', function(){

    


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
        ShowAlert('women-service', 'women-number')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("corruption-btn").addEventListener('click', function(){

    


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
        ShowAlert('corruption-service', 'corruption-number')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("electricity-btn").addEventListener('click', function(){

   


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
         ShowAlert('electricity-service', 'electricity-number')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("brac-btn").addEventListener('click', function(){

    


   const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
         ShowAlert('brac-service', 'brac-numbber')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})
document.getElementById("railway-btn").addEventListener('click', function(){

   


    const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    
    if(coinBalance >= 20) {
          ShowAlert('railway-service', 'railway-number')
        decCoin();
    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

    
    
})













