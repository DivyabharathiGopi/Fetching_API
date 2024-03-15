

const dataServices = (function(){
    async function fetchdatas(url){
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error('Failed to fetch the data.....');
            }
            return await response.json();
        }
        catch(error){
            console.log(error);
            throw error;
        }
    }


    return {
        fetchData : async function(){
            return await fetchdatas('https://jsonplaceholder.typicode.com/todos');
        },
        getData : async function(){
            return await fetchdatas('https://jsonplaceholder.typicode.com/posts');
        }
    }
})();

const API=(function(){
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
        
        })
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
        
        })
    }

    return{
        displayData,
        displayPostData
    }
})();


async function wholeTask(){

    try{
    const todo = dataServices.fetchData;
    API.displayData(todo);

    const post = dataServices.getData;
    API.displayPostData(post);
    }catch(error){
        document.getElementById('divContainer').innerHTML = 'Failed to fetch the data........';
        document.getElementById('divContainer2').innerHTML = 'Failed to fetch the data........';
    }
}

wholeTask();