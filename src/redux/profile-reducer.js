const ADD_POST = "ADD_POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Rostislav222", likesCount: 43 },
    { id: 2, message: "34433434", likesCount: 15 },
    { id: 3, message: "blabla", likesCount: 2323 },
  ],
  newPostText: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      let stateCopy = {...state};
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost)
      stateCopy.newPostText = "";
      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      let copyState = {...state}
      copyState.newPostText = action.newText;
      return copyState;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => {
    return {
      type: ADD_POST,
    };
  };
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT,
      newText: text,
    };
  };
export default profileReducer;
