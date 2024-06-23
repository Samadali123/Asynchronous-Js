// asynchronous JavaScript
// topics:
// 1: sync and async kya hota hai js mein?
// 2: async js kya hai
// 3: is Javascript is single threaded or multi threaded
// 4:callbacks
// 5: Promises 
// 6:then and catch
// 7: fetch
// '8: async and await
// 9: concurrency and parallelism 
// 10: throttling in js



//1: sync and async kya hota hai js mein
// sync mtlb koi bhi kaam jo ek baad ek ho , kehskte hai jab ek kam khtm hojaye phir doosra ho ishe kehte hai syncronlusly kaam ko krne ka tareeka

// synchronous js mein jab tk ek command yah code nhi chalge tb tk uske aghe ka code nhi chalega kyoki woh synchronous code hai


// asynchronous mtlb sab kaam ko ek sath start krdo , jab answer pehle ajaye uska answer pehla dedena output mein


// eg: taska - 2
// taskb - 3
// taskc - 15
// taskd - 1

// ab in task ko synchrounouly krenge toh ek ke baad ek task compete hoga toh 21s lageneg poore task ko complete krne mein 

// agar in kam apn asynchronous way me krenge toh sab task ko ek sath start krdenge toh jo total time lagea woh hoga max 15s kyoki apn ne in tasks ko asynchronouly kra hai jiske wajah se jo kaam hota jayega uska answer hame milta jayega


// jab async code likhoge toh woh kabhi future me jake chalega or hame nhi pata ki woh code kab chalega toh uskeo ham asynchrounluly likhte hai

// async code kese likhte hai

// settimeout
// setInterval
// fetch
// axios
// XMLHttpRequest
// Promises

// console.log("hey1")
// console.log("hey2")
// console.log("hey3")
// console.log("hey4")

// yeb sab console sync code hai toh yeh ek ke baad ek chal jayenge

// console.log("hey1")
// console.log("hey2")
// setTimeout(function(){
//     console.log("hey3")
// }, 1000)
// console.log("hey4")


// ab is consloe me jo third wala hey hai woh hai ek async code woh hame pata hai kab chalge kuch time baad chalega is case me hame pata hai ki 1s baad chalega pr jab kaam facebbok  se data layenge yah kahi or request marenge toh hame exact time nhi pata hota hai kab tk asnwer ayega toh ham use jagah use krete hai async js ka ki jab bhi asnwer aye toh kuch particular code ko chala dena

// do stacks hote hai ek hota hai main stack or doosra hota hai side stack jo main stack hota hai usme ek baad ek sync  code jata hai or line bhi line jesa likha hai wesa exute hojata hai  or usi time side stack me jata hai jo async code likha hai  js mein woh  yeh code sath sath behind the scene apni processing krta rehta hai jab sync code poora chal jata hai uske baad main stack side stack se poocha hai hogyi processing yah jo bho request mari ho apn ne kahi pr uska answer agya ho toh woh async code ajata hai ab main stack mein or exexute hojate hai sabse last mein toh yeh jo communication  hoti hai side stack ke code ko main stack me lane me uske kehte hai EVENT LOOP IN JS 


// by default ham kehte hai js asynchronous hoti hai pr esa nhi hai asynchronous ka mtlb hota hai do kaam ko ek sath krna pr esa toh hota hi nhgi hai js hai single thredded language yeh ek bar mei  ek hi computation krskti hai or yeh main stack or side wala kaam itne tez hota hai hame lgta hai async way me horha hai pr hota nhi hai behind the scene processing hoti hai or main stack mein exuctiton pr dono ka exexution ek sath nhi hota  hai islye js async nhi hai 




// yeh sab async code ko likhne ka tareeka hota hai

// or in async code ko chalane ke liye ham use krte hai kyoki async code hame nhi pata kab tk asnwer milega toh yeh sab code jab chalta hai jab asnwer ajate hai toh us asnwer ko output ke liye yeh sab ka use hota hai callbacks, then catch, async and await.


// callbacks
// then catch
// async  await


//callbacks : callback hamesha ek function hota hai jo async code ka asnwer ane pr chalta hai jo exexution krna haina code ka woh callback function me ata hai

// callback ek function hota hai yeh hamesh async code ke comletion pe chalta hai...


// console.log("helllo")
// console.log("heyyyy")
// console.log("bye")
// setTimeout(function(){
//     console.log("me async code ho or mujhe chalabe wala kaam callback fucntion ka hota hai")
// }, 1000)

// promises in JavaScript
// promise ek async code ko likhne ka tareeka hai, yeh jab use hota hai jab hame koi esa code likhna jo future me kabhi jake chalge toh hame nhi pata kab chalega chalega yah error ayega toh promises mein yah toh code resolve hoga yah error reject hoga agar resolve hoga toh then chalega or reject yah error aya toh catch chalega or pending state me rehta haui hame nhi pata kb tk chalge toh promise teen hi stage me rehta hai pending state , yah resoolve, yah reject



// var ans = new Promise(function(res, rej){
//   if(true){
//     return res();
//   }

//   else{
//     return rej();
//   }
// })


// ans.then(function(){
//     console.log("resolve hua hai");
// })

// .catch(function(){
//     console.log("rejct hau haiu")
// })



// var ans = new Promise(function(res, rej){
//     var rn = Math.floor(Math.random() * 10);
//     if(rn<5){
//         return res("number is lesser than 5");
//     }
//     else{
//         return rej("number is greater than 5");
//     }
// })


// ans.then(function(data){
//     console.log(data);
// })
// .catch(function(data){
//     console.log(data);
// })



// promise chain ek promise chalo us then chalge toh then mein ek or promis return krdo woh chalge toh uska then chalge toh uske then me ek or promise return krdo


// var ans = new Promise(function(res, rej){
//     return res("pehela task");
// })

// var p2= ans.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("doosra task");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise(function(res, rej){
//         return res("third task");
//     })
// })

// p3.then(function(data)
// {
//     console.log(data);
// })




// then 


function  requests(){
   fetch(`https://randomuser.me/api/`);
   .then(function (raw){
    return raw.json();
})

.then(function (data){
    console.log(data);
})
}
requests();
// .then se bachne ke liye or code ko simplify krne ke liye ham use  hai async  await ka


// async function requests(){
//   let raw = await fetch(`https://randomuser.me/api/'`);
//   let  data =   await raw.json();
//     console.log(data)
// }

// requests();



// concurrency and parallelism : 
// concurrency: js mein sync code and async code dono ek sath side by side horha tha ise kehte hai concurrency.

// parallelism: focus zyada krta hai  differenct processor or unke cores pr kaam ko chalane pr 

// throttling: throttling ki madad se kam kisi bhi code ke exexution ko kam krskte hai apne hisab se..

