// search for a github user handle
//search using the api
//display repo on page
//make multiple searches and display on the result of the current search

'use strict';




$(function() {
    $("#submit").on("click", event => {
        event.preventDefault();
        let userInput = $("#userRequest").val();
        console.log(userInput);

        fetch(`https://api.github.com/users/${userInput}/repos`)
        .then(response => response.json())
        .then(responseJson => { 
            $("#response").empty()
            for ( let i = 0; i < responseJson.length; i++) {
                //the name and the url
                let repoName = responseJson[i].name
                let repoUrl = responseJson[i].html_url
                $("#response").append(`
                <div>
                    <p>${repoName}</p>
                    <a href="${repoUrl}">${repoUrl}</a>
                </div>`)
            }
        }) 
        
        
    });
});


function candy() {

}
