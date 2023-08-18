import {createSlice} from '@reduxjs/toolkit';
import data from '../../containers/TestFeed/dummyDataStorage';

const initialState = data;

const feedSlice = createSlice({
  name: 'feed',
  initialState,
  reducers: {
    addPost: (state, action) => {
      //get the current date and time and store it in the state
      const preId = state.length + 1;

      state.unshift(
        {
          id: preId,
          title: 'Post' + preId,
          content: action.payload,
          likes: 0,
          isLiked: false,
          data: [],
        },
        //     {
        //     date: new Date(),
        //     userID: action.payload.userID,
        //     title: action.payload.title,
        //     content: action.payload.content,
        //     likes: 0,
        // }
      );
    },
    addLike: (state, action) => {
      index = state.findIndex(item => item.id === action.payload);

      state[index].isLiked ? {} : state[index].likes++;
      state[index].isLiked = true;

      // console.log(index);
    },
    addComment: (state, action) => {
      if (action.payload[1] === '') {
        return;
      } else {
        console.log(action.payload);
        index = state.findIndex(item => item.id === action.payload[0]);
        state[index].data.unshift(action.payload[1]);
      }
    },
    removePost: (state, action) => {},
    updatePost: (state, action) => {},
  },
});

export const {addPost, removePost, updatePost, addLike, addComment} =
  feedSlice.actions;
export default feedSlice.reducer;
