alert('yo')

//https://localhost:8000/api/herbs

async function getHerb(){
    //const rapName = document.querySelector('input').value
    try{
        const res = await fetch(`https://franksfirstapi.herokuapp.com/herbs`)
        const data = await res.json()
        console.log(data)
        //document.querySelector('h2').innerText = data.birthName
    }catch(err){
        console.log(err)
    }
} //end getHerb()

getHerb()
