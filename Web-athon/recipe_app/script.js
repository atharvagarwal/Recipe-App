const searchForm = document.querySelector('form')
const searchResultDiv= document.querySelector('.search-result')
const container= document.querySelector('container')
let search_result=""
const api_id='e6fa9585'
const api_key= '351fcc30547194ca6f539190623edee3'

var base_url=`https://api.edamam.com/search?q=pizza&app_id=${api_id}&app_key=${api_key}&to=20`
console.log(base_url)
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    search_result = e.target.querySelector('input').value;
    
    fetchAPI()
})

async function fetchAPI(){
console.log(search_result)    
const baseURL=`https://api.edamam.com/search?q=${search_result}&app_id=${api_id}&app_key=${api_key}&to=20`
console.log(baseURL)
const response=  await fetch(baseURL);
let data = await response.json()
htmlEdit(data.hits)
console.log(data)
}

function htmlEdit(results){
    let htmlText=""
    results.map((result)=>{ htmlText+=
        `<div class="item">
        <img src="${result.recipe.image}">
        <div class="flex-container">
            <h1>${result.recipe.label}</h1>
            <a href="${result.recipe.url}" target="_blank"><button class="btn-1">View Recipe</button></a>
        </div>
        <p class="item-data"> Calories:${Math.floor(result.recipe.calories)}</p>
        </div>`})
searchResultDiv.innerHTML=htmlText

}


