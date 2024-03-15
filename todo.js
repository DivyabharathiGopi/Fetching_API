let mybutton1 = document.getElementById('button1');
let mybutton2 = document.getElementById('button2');




async function fetchData(){
    try{
    const dataColl = await fetch('https://jsonplaceholder.typicode.com/todos');
    if(!dataColl.ok){
        throw new Error("Failed to fetch");
    }
    const data = await dataColl.json();
    displayData(data);
    }

catch(error){
    console.log(error.message);

    document.getElementById('divContainer').innerHTML = `Failed to ffffetch the data`;
}

}

function displayData(data){
    const myDiv = document.getElementById('divContainer');

    data.forEach(post=> {
        const myInDiv = document.createElement('div');


        myInDiv.innerHTML = `
        <p>${post.id}</p>
        <h3>title:${post.title}</h3>
        <p>Completed Status:${post.completed}</p>
        <hr>
        `;

        myDiv.appendChild(myInDiv);
    
    });
}

//posts

async function getData(){
    try{
    const dataColl = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!dataColl.ok){
        throw new Error("Failed to fetch");
    }
    const data = await dataColl.json();
    displayPostData(data);
    }

catch(error){
    console.log(error.message);

    document.getElementById('divContainer').innerHTML = `Failed to ffffetch the data`;
}

}

function displayPostData(data){
    const myDiv = document.getElementById('divContainer');

    data.forEach(post=> {
        const myInDiv = document.createElement('div');


        myInDiv.innerHTML = `
        <p>${post.id}</p>
        <h3>title:${post.title}</h3>
        <p>${post.body}</p>
        <hr>
        `;

        myDiv.appendChild(myInDiv);
    
    });
}

//fetchData();

mybutton1.addEventListener('click',fetchData);
mybutton2.addEventListener('click',getData);

