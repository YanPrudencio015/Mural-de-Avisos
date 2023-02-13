module.exports = {
     posts: [
        // {id: "abc", 
        // title: "teste do mural",
        // description:"Descrição teste "
        // },
    ],

    getall(){
        return this.posts
    },

    newPost(title,description){
        this.posts.push({id:generateId(),title,description})
    }
    

}

function generateId(){
    return Math.random().toString(36).substring(2,9)
}