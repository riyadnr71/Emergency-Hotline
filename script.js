
const historyData= []


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





// history function?

function historyShow(){

    const historyContainer = document.getElementById('history-btn');


    


historyContainer.innerHTML = '';


    for (const historyItemData of historyData) {
        const historyItem = document.createElement('div');
        historyItem.innerHTML = `
            <div class="bg-white shadow-lg shadow-black-100 rounded-xl p-3 my-5 flex justify-between items-center">
                <div>
                    <h1 class="font-bold">${historyItemData.name}</h1>
                    <p>${historyItemData.Number}</p> 
                </div>
                <div>
                    <p>${historyItemData.date}</p>
                    
                </div>
            </div>
        `;

        historyContainer.appendChild(historyItem); 
    }
        
}


    


function Calling(id1, id2){

     const coinBalance = parseInt(document.getElementById('coin-balance').innerText);
    if(coinBalance >= 20) {
        decCoin();
        const data = {
        name : id1,
        Number: id2,
        date : new Date().toLocaleTimeString()

     }

     historyData.push(data)

    } else {
        alert('❌ আপনার পর্যাপ্ত কয়েন নেই! কল করতে কমপক্ষে 20 টি কয়েন লাগবে।');
    }

}

document.getElementById("call-btn").addEventListener('click', function(){

    ShowAlert('serviceName', 'serviceNumber');
     
    
    Calling('জাতীয় জরুরি সেবা', '999')
     
     historyShow()
  

});







document.getElementById("police-btn").addEventListener('click', function(){

    ShowAlert('serviceName1', 'serviceNumber2');
     
    
    Calling('পুলিশ', '999')
     
     historyShow()
  

});




document.getElementById("fair-btn").addEventListener('click', function(){

    ShowAlert('fire-service', 'fire-number');
     
    
    Calling('ফায়ার সার্ভিস', '999')
     
     historyShow()
  

});


document.getElementById("ambulance-btn").addEventListener('click', function(){

    ShowAlert('ambulance-service', 'ambulance-number');
     
    
    Calling('অ্যাম্বুলেন্স', '1994-999999')
     
     historyShow()
  

});



document.getElementById('women').addEventListener('click', function(){
    

    ShowAlert('corruption-service','women-number');
     
    
    Calling('নারী ও শিশু সহায়তা', '109')
     
     historyShow()
  

});


document.getElementById("corruption").addEventListener('click', function(){


    ShowAlert('corruption-service','corruption-number');
     
    Calling('দুদক', '106')
     
     historyShow()
  

});












    
 







document.getElementById("electricity-btn").addEventListener('click', function(){


    
         ShowAlert('electricity-service', 'electricity-number')

          Calling('বিদ্যুৎ বিভ্রাট', '16216')
     
     historyShow()
       
  
    
    
})





document.getElementById("brac-btn").addEventListener('click', function(){

    


   

         ShowAlert('brac-service', 'brac-numbber')


         Calling('ব্র্যাক', '16445')
     
     historyShow()
    
    
    
})



document.getElementById("railway-btn").addEventListener('click', function(){

   


    
          ShowAlert('railway-service', 'railway-number')

           Calling('বাংলাদেশ রেলওয়ে', '163')
     
     historyShow()


    
    
})






















