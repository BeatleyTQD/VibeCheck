const URL = "http://localhost:8088"

export default {
    GetAll(str){
        return fetch(`${URL}/${str}`)
        .then(res =>res.json())
    },

    GetById(str, id){
        return fetch(`${URL}/${str}/${id}`)
        .then(res => res.json())
    },

    GetColorPlaylist(id){
        return fetch(`${URL}/tracks?colorId=${id}`)
        .then(result => result.json())
    },

    GetUserTracks(){
        return fetch(`${URL}/tracks?userId=${sessionStorage.activeUserID}`)
        .then(res => res.json())
    },
    
    Save(str, obj){
        return fetch(`${URL}/${str}`, {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
    },

    Update(str, id, data){
        return fetch(`${URL}/${str}/${id}`, {
            method:"PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    },

    Delete(str, id){
        return fetch(`${URL}/${str}/${id}`, {
            method: "DELETE"
        }).then(result => result.json())
    }

}