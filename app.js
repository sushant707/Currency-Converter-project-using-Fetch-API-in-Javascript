const URL = "http://localhost"

const getFact = async ()=>{
    let promise = await fetch(URL)
console.log(promise)
}