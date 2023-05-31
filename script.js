const posts = document.querySelector('posts');
posts.forEach (elem => {
    console.log(elem)
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
    const div = document.createElement('div');
    div.className = "post__title";
    div.innerHTML = 
    posts.append (div);
})
    .catch((err) => {
        console.log(`Ошибка. Запрос не выполнен` + err);
});

btn.addEventListener ('click', function (){

})