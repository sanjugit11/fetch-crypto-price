//new WebSocket('wss://stream.binance.com:9443/ws/dotusdt@kline_1m');   //one more calling way

const allTickers = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');

let socketPrice = document.getElementById('cryptoPrice'); 
allTickers.onmessage = (event)=>{
    // console.log(event.data);
    const socketObject = JSON.parse(event.data);
        // console.log(socketObject.k.s);   //symbol
        socketPrice.innerText = socketObject.p;
        socketPrice.style.color ="cyan";
}

const allTickers1 = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
let socketPrice1 = document.getElementById('cryptoPrice2');
allTickers1.onmessage = (event)=>{
    // console.log(event.data.o);
    const socketObject = JSON.parse(event.data);
        // console.log(socketObject.k.o);
        socketPrice1.innerText = socketObject.p;
        socketPrice1.style.color ="blue";
}

const allTickers2 = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');
let socketPrice2 = document.getElementById('cryptoPrice3');
allTickers2.onmessage = (event)=>{
    // console.log(event.data.o);
    const socketObject = JSON.parse(event.data);
        // console.log(socketObject.k.o);
        socketPrice2.innerText = socketObject.p;
        socketPrice2.style.color ="orange";
}

const allTickers3 =  new WebSocket('wss://stream.binance.com:9443/ws/adausdt@trade');
let socketPrice3 = document.getElementById('cryptoPrice4');
allTickers3.onmessage = (event)=>{
    // console.log(event.data.o);
    const socketObject = JSON.parse(event.data);
        // console.log(socketObject.k.o);
        socketPrice3.innerText = socketObject.p;
        socketPrice3.style.color ="green";
}

let ws = new WebSocket('wss://stream.binance.com:9443/ws/xrpusdt@trade');  //bnbbtc //ethusdt //btcusdt //dotusdt
let socketPrice5 = document.getElementById('cryptoPrice5');
ws.onmessage = (event)=>{
    const socketObject = JSON.parse(event.data);
    // console.log(socketObject.p);
    socketPrice5.innerText = socketObject.p;
    socketPrice5.style.color ="red";
  
}









//         let row=`<tr>
//                   <td>${socketObject.k.s}</td>
//                   <td>${socketObject.k.o}</td>

//                   </tr>`
//                   document.getElementById("showData").innerHTML+=row;
      
// }

// const axios = require('axios');

// axios.get('http://localhost:3000/employees')

//     .then(resp => {
//         //console.log(resp)
//         data = resp.data;
//         data.forEach(e => {
//             console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
//         });
//     })
//     .catch(error => {
//         console.log(error);
//     });
    // fetch(url)
    // .then(response => {
    //     // handle the response
    // })
    // .catch(error => {
    //     // handle the error
    // });

			
///fetch the json file data after running the server 
    // fetch('http://localhost:3000/employees')
    // .then(response => response.json())
    // .then((data) => {
    //     console.log(data)
    //     let data1 = "";
       
    // // using map function
    // data.map((records)=>{
    //     //console.log(records.EmployeeID)
    //     let row=`<tr>
    //               <td>${records.id}</td>
    //               <td>${records.first_name}</td>
    //               <td>${records.last_name}</td>
    //               <td>${records.email}</td>
    //               <td>${records.Action}</td>
    //               </tr>`
    //               document.getElementById("showData").innerHTML+=row;
    //   })

        


        
    // }).catch((err) => {
    //     console.log(err);
    // });