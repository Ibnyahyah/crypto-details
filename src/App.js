import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Posts from './pages/posts/posts';
import PostDetails from './pages/posts/post-details';
import FeedBack from './pages/FeedBack/feedback';
import Aboutus from './pages/about-us/about-us';
import Termscondition from './pages/terms-condition/terms-condition';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/post-detail" element={<PostDetails/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/terms-and-condition" element={<Termscondition/>}/>
        <Route path="/feedback" element={<FeedBack/>}/>
      </Routes>
    </Router>
  );
}

export default App;
