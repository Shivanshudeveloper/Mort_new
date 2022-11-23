const PostReducer = (
  state = { posts: [], loading: false, error: false, uploading: false },
  action
) => {
  switch (action.type) {
    case "RETRIEVING_START":
      return { ...state, uploading: true, error: false };
    case "RETRIEVING_SUCCESS":
      console.log(action.data);
      return {
        ...state,
        posts: [...action.data],
        uploading: false,
        error: false,
      };
    case "RETRIEVING_FAIL":
      return { ...state, uploading: false, error: true };
    default:
      return state;
  }
};

export default PostReducer;
