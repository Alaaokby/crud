var request=new XMLHttpRequest();
request.open("GET","https://jsonplaceholder.typicode.com/posts");
request.send();
var posts=[];
request.addEventListener("readystatechange",function(){
    if(request.readyState==4&&request.status==200)
    {
        posts=JSON.parse(request.response);
        displayPosts();
        
    }
})
function displayPosts()
{
    var cols=``;
    for(var i=0;i<posts.length;i++){
        cols+=`
        <div class="col-md-3">
        <div>
            <h3>${posts[i].title}</h3>
            <p>${posts[i].body}</p>
        </div>
         </div>
        
        `
    }
    document.getElementById("postDisplay").innerHTML=cols;
}