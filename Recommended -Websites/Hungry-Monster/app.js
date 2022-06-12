// const searchfoods = async () => {
//     const searchText = document.getElementById('search-field').value;
//     const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
//     const res = await fetch(url)
//     const data = await res.json()
//     .catch(error => console.log(error))
//     displayfoods(data.meals)

// }
const searchfoods = () => {
    const searchText = document.getElementById('search-field').value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayfoods(data.meals))
        .catch(error => errormass('Something went wrong!!!!😴😴'))
}
const displayfoods = foods => {
    const foodContainer = document.getElementById('food-container')
    foodContainer.innerHTML = "";
    errormass('')
    // console.log(foodContainer)

    foods.forEach(food => {
        const foodDiv = document.createElement('div')
        foodDiv.className = 'single-result row align-items-center my-3 p-3'
        foodDiv.innerHTML = `
        <div class="single-result row align-items-center my-3 p-3">
                    <div class="food-items d-flex">
                    <img class="food-img" src="${food.strMealThumb}">
                    <div>                       
                        <h3 class="lyrics-name">${food.strMeal}</h3>
                        <h3>$92</h3>
                        <button  onclick="alert('✔ ${food.strMeasure1}')"class="btn btn-success">Get Details</button></div>
                        
                       
                       </div>

                   
                </div>`
        foodContainer.appendChild(foodDiv)
    });

}
const errormass = error => {
    const errortag = document.getElementById('error-message');
    errortag.innerText = error
};
