import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Posts from './pages/posts/posts';
import BlockchainPosts from './pages/education/blockchain/blockchain-posts';
import PostDetails from './pages/posts/post-details';
import BlockchainPostDetails from './pages/education/blockchain/blockchain-post-details';
import FeedBack from './pages/FeedBack/feedback';
import Aboutus from './pages/about-us/about-us';
import Termscondition from './pages/terms-condition/terms-condition';
import EducationHome from './pages/education/Edu-Home';
import Donations from './pages/Donation/donations';
import CurrenciesPosts from './pages/education/currencies/currencies';
import ProgrammingPosts from './pages/education/Programmmings/programming-posts';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Posts/>}/>
        <Route path="/education" element={<EducationHome/>}/>
        <Route path="/blockchain" element={<BlockchainPosts/>}/>
        <Route path="/cryptocurrency" element={<CurrenciesPosts/>}/>
        <Route path="/programming" element={<ProgrammingPosts/>}/>
        <Route path="/:title/:postId" element={<PostDetails/>}/>
        <Route path="/blockchain/:title/:postId" element={<BlockchainPostDetails/>}/>
        <Route path="/about-us" element={<Aboutus/>}/>
        <Route path="/donation" element={<Donations/>}/>
        <Route path="/terms-and-condition" element={<Termscondition/>}/>
        <Route path="/feedback" element={<FeedBack/>}/>
      </Routes>
    </Router>
  );
}

export default App;
