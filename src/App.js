import { useState } from 'react';
import './App.css';
import Posts from './components/posts/posts';
import { data } from "./components/data"
import Navbar from './components/navbar/navbar';
import { ModeContext } from './components/context/modeContext';

export function App() {
  const [posts, setPosts] = useState(data);
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

  return (
    <ModeContext.Provider value={mode}>
      <Navbar
        mode={mode}
        onSearch={doSearch}
        changeMode={changeMode} />
      <Posts posts={posts} handleLikeClick={likeClick} />
    </ModeContext.Provider>
  );
}

export default App;