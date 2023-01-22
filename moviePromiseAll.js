//without async await 
console.log('person1: shows ticket')
console.log('person2: shows ticket')
const wifebringstickets= new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('ticket')
        }, 3000);
    })
    const getPopcorn= wifebringstickets.then((t)=>{
        console.log('wife: i have tickets')
        console.log('Husband: Lets Go In')
        console.log('Wife: I am Hungry I need Popcorn')
        return new Promise((resovle,reject)=>{resovle(`${t} popcorn`)})
    })
    const getButter = getPopcorn.then((t)=>{
        console.log('Husband: igot popcorn')
        console.log('Husband: Lets Go In')
        console.log('Wife: I need Butter On my PopCorn')
        return new Promise((resolve,reject)=>{ resolve(`${t}  butter`)})
    })
    getButter.then((t)=>console.log(t))
    
console.log('person4: shows ticket')
console.log('person5: shows ticket')


