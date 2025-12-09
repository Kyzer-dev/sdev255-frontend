addEventListener("DOMContentLoaded", function(){
    document.querySelector("#addBtn").addEventListener("click", addSong)
})

// add song. must be async

async function addSong(){
    const song = {
        title: document.querySelector("#title").value,
        artist: document.querySelector("#artist").value,
        popularity: document.querySelector("#popularity").value,
        releaseDate: document.querySelector("#released").value,
        genre: document.querySelector("#genre").value ? document.querySelector("#genre").value.split(",") : []
    }

    console.log(song)
    console.log(JSON.stringify(song))

    const response = await fetch('http://localhost:3000/api/songs', {
        method: 'POST',
        headers:{
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(song)
    })

    if(response.ok){
        const results = await response.json()
        alert("Added song with ID of" + results._id)

        document.querySelector("form").reset()
    }

    else{
        document.querySelector("#error").innerHTML = "Cannot add song"
        console.log(response.err)
    }
}