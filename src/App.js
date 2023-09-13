import { useEffect, useState } from 'react';
import './App.css';
import JsonPosts from './components/JsonPosts/jsonPosts';

export function App() {

  /* const [posts, setPosts] = useState(data);
  const [mode, setMode] = useState("light_mode");

  function doSearch(keyword) {
    setPosts(data.filter(post => post.title.toLocaleLowerCase().includes(keyword.toLocaleLowerCase())));
  }

  function likeClick(post) {
    setPosts(posts.map(p => {
      if (p.id === post.id) {
        return post
      } else {
        return p
      }
    }))
  }

  function changeMode() {
    mode === "light_mode" ? setMode("dark_mode") : setMode("light_mode");
  }
 */
  /*  return (
     <ModeContext.Provider value={mode}>
       <Navbar
         onSearch={doSearch}
         changeMode={changeMode} />
       <Posts posts={posts} handleLikeClick={likeClick} />
     </ModeContext.Provider> 
   );*/
  return (<JsonPosts />)
}

export default App;