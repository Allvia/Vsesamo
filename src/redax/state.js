let state = {
    profilePage:{ 

        posts: [
        { id: 1, message: 'Haw are you?', likesCount: 31 },
        { id: 2, message: 'Be yourself?', likesCount: 22 } 
          ],

         },
      
      dialogsState: {
        Dialoges: [
            { id: 1, name: 'Aleksey' },
            { id: 2, name: 'Matwey' },
            { id: 3, name: 'Armania' },
            { id: 4, name: 'Konstntin' },
            { id: 5, name: 'Mark' },
            { id: 6, name: 'Koraline' }
        ],

        Messages: [
            { id: 1, message: 'You аre perfect!' },
            { id: 2, message: 'You will are happy from now and  to forever!' },
            { id: 3, message: 'You are amasing!' },
            { id: 4, message: 'You can everything!' },
            { id: 5, message: 'You are intoxicating!' },
            { id: 6, message: 'You are clever' }
          ] 
                  
          }

  };

export  let addPost = (postMessage) => {

  let newPost =  {

  id: 4,
  message: postMessage,
  likesCount : 0,
}
    state.profilePage.posts.push(newPost)
  }

  export default state