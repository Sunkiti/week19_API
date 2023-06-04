const posts = document.querySelector('posts');
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then((json) => {
        json.forEach ((elem) =>{
            console.log (`${elem.title}`);
            console.log (`${elem.body}`);
            const div = document.createElement('div');
            div.className.add('post__title');
            div.innerHTML = 
                `<p>${elem.title}</p>`;
            const div2 = document.createElement('div');
            div2.className.add('post__body');
            div2.innerHTML = 
                `<p>${elem.body}</p>`;
            posts.append (div, div2);
        })
    }) 
    .catch((err) => {
        posts.innerHTML = `Ошибка. Запрос не выполнен`;
    });
