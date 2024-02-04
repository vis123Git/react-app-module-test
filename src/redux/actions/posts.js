export const fetchPosts = () => {
  return (dispatch) => {
    dispatch({ type: "FETCH_POSTS_REQUEST" });
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json(); 
      })
      .then((data) => {
        console.log("call final===", data);
        dispatch({ type: "FETCH_POSTS_SUCCESS", payload: data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_POSTS_FAILURE", payload: error.message });
      });
  };
};
