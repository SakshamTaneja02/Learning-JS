 // spread
 let arr = [1,2,3]
 let obj = {...arr}
 console.log(obj)

 function sum(a,b,c){
    return a+b+c
 }
 console.log(sum(...arr))
 let obj2 = {
    name: "Saksham",
    age:23,
 }
 console.log({...obj2,name:"Sak"})

// destructuring
// let arr = [3,5,9,8,7,10,32,43]
// let [a,b,c,...rest] = arr
// console.log(a,b,c,rest)
// let [a, , ,...rest] = arr
// console.log(a,rest)
// let {a,b} = {b:1,a:5}
// console.log(a,b)

// class Complex{
//     constructor(real,imag){
//         this.real = real
//         this.imag = imag
//     }
//     add(num){
//         this.real = this.real + num.real
//         this.imag = this.imag + num.imag
//     }
// }

// let a = new Complex(2,4)
// let b = new Complex(6,4)
// a.add(b)
// console.log(a.real,a.imag)


// class Animal {
//     constructor(name){
//         this.name = name
//     }
//     get Name(){
//         return this.name
//     }
//     set newName(newname ){
//         this.name = newname
//     }
// }

// let a = new Animal("Dog")
// console.log(a.name)
// a.name = "Cat "
// console.log(a.name)
// console.log(a instanceof Animal)


// class Animal{
//     constructor(name){
//         this.name = name
//     }
//     walk(){
//         alert("Animal " + Animal.capitalize(this.name) + " is walking")
//     }
//     static capitalize(name){
//         return name.charAt(0).toUpperCase()+name.substr(1,name.length)
//     }
// }

// let p = new Animal("dog")
// p.walk()


// class Employee{
//     constructor(name){
//         this.name = name
//         console.log("Constructor Called")
//     }
//     login(){
//         console.log(`Employee has logged int`)
//     }
//     logout(){
//         console.log(`Employee has logged out`)
//     }
//     request(leaves){
//         console.log(`Employee has requested ${leaves} leaves`)
//     }
// }

// class Progammer extends Employee{
//     // constructor(...args){
//     //     super(...args)
//     // }
//     constructor(name){
//         super(name)
//         this.name = name
//         console.log("Programmers constructor is here")
//     }
//     requestCoffee(){
//         console.log(`Employee has requested ${x} coffees`)
//     }
//     request(leaves){
//         super.request(leaves+1)
//         // console.log(`Employee has requested ${leaves+1} leaves`)
//     }
// }

// let e = new Progammer()
// e.login()
// e.request(3)


// class Animal{
//     constructor(name,shout){
//         this.name = name
//         this.shout = shout
//     }
//     run(){
//         alert(this.name+" run")
//     }
//     shout(){
//         alert(this.name+ " is "+ this.shout)
//     }
// }

// class Monkey extends Animal{
//     constructor(banana){
//         this.banana = banana
//     }
//     ban(){
//         alert("no of banana: "+this.banana)
//     }
// }

// let monkey = new Animal("")
// monkey.run()
// monkey.shout()
// monkey.ban()


// class Railway{
//     constructor(name){
//         console.log("Constructor")
//         this.name = name
//     }
//     submit(){
//         alert("Form Submitted")
//     }
//     cancel(){
//         alert(this.name + " Form Canceled")
//     }
// }

// let a = new Railway("Saksham")
// let b = new Railway("Taneja")
// a.submit()
// b.submit()
// a.cancel()


// let a = {
//     name: "Saksham",
//     lang: "JS",
//     // run: () => {
//     //     alert("Self Run")
//     // }
// }

// let p  = {
//     run: () => {
//         alert("Run")
//     }
// }

// p.__proto__ = {
//     name2: "Taneja"
// }

// a.__proto__ = p
// a.run()
// console.log(a.name2)


// let a = prompt("Enter your Note")
// localStorage.setItem("note",a)
// console.log(localStorage.getItem("note"))
// localStorage.removeItem("node")



// let url = "https://kontests.net/api/v1/all"
// let response = fetch(url)
// let cardContainer = document.getElementById("cardContainer")

// response.then((value)=>{
//     return value.json()
// }).then((value)=>{
//     console.log(value)
//     ihtml = ""
//     for(items in value)
//     {
//         console.log(value[items])
//         ihtml+=`
//             <div class="card" style="width: 18rem;">
//                 <img src="..." class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">${value[items].name}</h5>
//                 <p class="card-text"><a href="${value[items].url}"> Visit Here </a></p>
//                 <p>Starts At: ${value[items].start_time}</p>
//                 <p>Starts At: ${value[items].end_time}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//         `
//     }
//     cardContainer.innerHTML = ihtml 
// })


// let key = prompt("Write the value of key")
// let value = prompt("Write the value of value")
// localStorage.setItem(key,value)
// console.log(localStorage.getItem(key))


// console.log(document.cookie)
// document.cookie = "name=saksham"
// console.log(document.cookie)
// document.cookie = "name=Saksham"
// let key = prompt("Write key")
// let value = prompt("Write value")
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)


// const help = async (text) => {
//     let options = {
//         method: 'POST',
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//         body: JSON.stringify(text)
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts',options)
//     let response = await p.json()
//     return response
// }

// const getTo = async (id) => {
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts/'+id)
//     let response = await p.json()
//     return response
// }

// const mainFunc = async () => {
//     let todo = {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }
//     let yoo = await help(todo)
//     console.log(yoo)
//     let k = await getTo(100)
//     console.log(k)
// }

// mainFunc()


// let p = fetch("https://goweather.herokuapp.com/weather/Delhi")
// p.then((value1)=>{
//     console.log(value1.status)
//     console.log(value1.ok)
//     console.log(value1.headers)
//     return value1.json()
// }).then((value2)=>{
//     console.log(value2)
// })


// let p1 = async () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve(1)
//         },1000)
//     })
// }

// let p2 = async () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve(1)
//         },2000)
//     })
// }

// let p3 = async () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             resolve(1)
//         },3000)
//     })
// }

// const help = async () => {
//     console.time("run")
//     let a =  p1()
//     let b =  p2()
//     let c =  p3()
//     let promise_all = await Promise.all([a,b,c])
//     console.log(promise_all)
//     console.timeEnd("run")
// }
// help()


// const help = async () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             reject(new Error("Rejected"))
//         },3000)
//     })
// }

// const main2 = async () => {
//     try{
//         await help()
//     }
//     catch(err){
//         console.log(err)
//     }
// }

// main2()


// const loadScript = async (src) => {
//     return new Promise((resolve,reject) => {
//         let script = document.createElement("script")
//         script.type = 'text/javascript'
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = () => {
//             console.log("Loaded")
//             resolve("Script Loaded")
//         }
//         script.onerror = () => {
//             console.log("Error")
//             reject(new Error("Not valid Scipt"))
//         }
//     })
// } 

// const main2 = async () => {
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
//     console.log(a)
// }

// main2()


// const f = () => {
//     try{
//         console.log("No error")
//         return 
//     }
//     catch{
//         console.log("Error")
//     }
//     finally{
//         console.log("finally")
//     }
// }
// f()


// try{
//     let age = prompt("Enter you age")
//     age = Number.parseInt(age)
//     if(age<0){
//         throw new Error("Negative age")
//     }
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }


// try{
//     setTimeout(()=>{
//         try{
//             console.log(saksham)
//         }
//         catch(error){
//             console.log(error)
//         }
//     },3000)
// }
// catch(error){
//     console.log(error)
// }


// try{
//     console.log(saksham)
// }
// catch(error){
//     console.log(error)
// }


// async function weather(){
//     let delhiWeather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("27Deg")},5000)
//     })
//     let bangaloreW = new Promise((resolve,reject)=>{
//         setTimeout(()=>{resolve("21Deg")},7000)
//     })
//     console.log("fetching Delhi Weather")
//     let delW = await delhiWeather
//     console.log("fetching Bangalore Weather")
//     let bangW = await bangaloreW
//     console.log("Fetched All")
//     return [delW,bangW]
// }

// let a = weather()
// a.then(()=>{
//     console.log(a)
// })


// async function saksham(){
//     return 7
// }

// saksham().then((value)=>{
//     console.log(value)
// })


// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//         // reject(new Error("error"))
//     },1000)
// })

// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         // reject(new Error("error"))
//         resolve(2)
//     },2000)
// })

// let p3 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(3)
//     },3000)
// })

// let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })

// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



// let loadScript = (src) => {
//     return new Promise((resolve,reject)=> {
//         let script = document.createElement("script")
//         script.type = 'text/javascipt'
//         script.src = src
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve(1)
//         }
//         script.onerror = () => {
//             reject(0)
//         }
//     })
// }

// let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
// p1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log('Error')
// })

// let p1 = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         console.log("resolved after 2 seconds")
//         resolve(56)
//     },2000)
// })

// p1.then((value)=>{
//     console.log(value)
//     let p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("P2")
//         },2000)
//     })
//     return p2
// }).then((value)=>{
//     console.log(value)
//     return 2
// }).then((value)=>{console.log(value)})


// let p1 = new Promise((resolve,reject) => {
//     console.log("Promise pending")
//     setTimeout(()=>{
//         console.log("Promise fulfiled")
//         resolve(true)
//         // reject(new Error("I am an error"))
//     },5000)
// })

// let p2 = new Promise((resolve,reject) => {
//     console.log("Promise pending")
//     setTimeout(()=>{
//         console.log("Promise fulfiled")
//         // resolve(true)
//         reject(new Error("I am an error"))
//     },5000)
// })

// p1.then((value) => {
//     console.log(value)
// })

// p2.then((value)=>{console.log(value)},
// (error)=>{console.log(error)})

// p2.catch((error) => {
//     console.log(error)
// })

// console.log(p1, p2)



// function loadScript(src, callback){
//     var script = document.createElement("script")
//     script.src = src;
//     script.onload = function(){
//         console.log("SRC: " + src)
//         callback(null)
//     }
//     script.onerror = function(){
//         console.log("Error")
//         callback(new Error('Cannot load script'))
//     }
//     document.body.appendChild(script)
// }

// function hello(err){
//     if(err){
//         alert("Error")
//         return 
//     }
//     alert("No error!")
// }

// loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js",hello)


// setInterval(function(){
//     document.querySelector("#bulb").classList.toggle("bulb")
// },3000)


// const getA = () => {
//     prompt("Write the Value of A")
// }
// setInterval(getA,3000)


// let g = document.getElementById("g")
// g.addEventListener('click', function(){
//     window.location = "https://google.com"
// })
// let y= document.getElementById("y")
// y.addEventListener('click', function(){
//     window.location = "https://youtube.com"
// })
// let t = document.getElementById("t")
// t.addEventListener('click', function(){
//     window.location = "https://twitter.com"
// })


// let button = document.getElementById("button")
// let x = function(e){
//     alert('Hello1')
// }
// let y = function(e){
//     alert('Hello2')
// }
// button.addEventListener('click', x)
// button.addEventListener('click', y)
// let a = prompt('Write a Number')
// if(a==2){
//     button.removeEventListener('click', x)
// }


// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//     console.log('Fuck')
// }


// const sum = (a,b) => {
//     console.log("yes i am running "+(a+b))
//     a+b
// }
// setTimeout(sum,1000,1,2)
// setInterval(sum,1000,2,7)

// let a = setInterval(function(){
//     alert("Whats up mofo")
// },2000)
// clearTimeout(a)
// console.log(a)



// let first = document.getElementById("first")
// first.className = "yellow text-black"


// let first = document.getElementById("first")
// first.remove()
// first.insertAdjacentHTML("beforebegin",'<div>beforebegin</div>')
// first.insertAdjacentHTML("beforeend",'<div>beforeend</div>')
// first.insertAdjacentHTML("afterbegin",'<div>afterbegin</div>')
// first.insertAdjacentHTML("afterend",'<div>afterend</div>')


// let a = document.getElementsByTagName("div")[0]
// let div = document.createElement('div')
// div.innerHTML = "<h1>Hello</h1>"
// a.append(div)
// a.prepend(div)
// a.before(div)
// a.after(div)
// a.replaceWith(div)

// let a = document.getElementsByTagName("div")[0]
// a.innerHTML = a.innerHTML + "<h1>Fuck</h1>"


// let first = document.getElementById("first")
// // console.log(first.attributes)
// console.log(first.dataset)
// first.setAttribute("hidden", "true")


// let parent = document.getElementsByTagName("nav")
// for(let i=0;i<parent.length;i++)
// {
//     parent[i].style.background = "cyan"
// }
// // let id1 = document.getElementById("1")
// let id3 = document.getElementById("3")
// id1.style.color = "green"
// id3.style.color = 'green'


// let id1 = document.getElementById("id1")
// let sp1 = document.getElementById("sp1")
// console.log(id1.matches(".class"))
// console.log(id1.matches(".box"))
// console.log(sp1.closest(".box"))
// console.log(id1.contains(sp1))


// let ctitle = document.getElementById("first")
// ctitle.style.color = "red"

// let ctitle = document.getElementsByClassName("card-title")[0]
// ctitle.style.color = "red"


// let a = document.body.firstElementChild.firstElementChild
// console.log(a)
// console.log(a.rows)
// console.log(a.caption)
// console.log(a.tHead.firstElementChild)
// console.log(a.tFoot)
// console.log(a.tBodies)

// const changeBodyColor = () => {
//     document.body.firstElementChild.style.background = "red"
// }

// let b = document.body
// console.log("First child of b is:", b.firstChild)
// console.log("First element child of b is:", b.firstElementChild)

// console.log(document.body.firstChild)
// a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(a.firstChild.nextSibling)


// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// let arr = Array.from(document.body.childNodes)
// console.log(arr)

// let color = prompt("Enter color")
// document.body.style.background = color
// let run = true
// while(run)
// {
//     let a = prompt("What is your age")
//     age=Number.parseInt(a)
//     if(age>=4){
//         location.href = "https://google.com"
//     }
//     else{
//         run = confirm("Do you wnat to see prompt again")
//     }
// }

// alert, prompt, code
// alert("hello write the value a")
// let a = prompt("write the value of a:","0")
// a=Number.parseInt(a)
// let write = confirm("do you want to write it to the page:" )
// alert("Type of a: "+(typeof a))
// if(write){
//     document.write(a)
// }
// else
// {
//     document.write("NO")
// }


// Console objects
// console.log("console")
// console.info("info")
// console.error("err")
// console.warn("warn")
// console.assert("err"!=false)
// console.assert("err"==false)
// obj={a:1,b:2,c:3}
// console.table(obj)

// console.time("for")
// for(let i=0;i<5;i++) 
// {
//     console.log(533)
// }
// console.timeEnd("for")
// console.time("while")
// let i=0;
// while(i<5)
// {
//     i++;
//     console.log(533)
// }
// console.timeEnd("while")