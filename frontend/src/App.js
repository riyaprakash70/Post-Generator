import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostGenerator from './pages/PostGenerator';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/post-generator" element={<PostGenerator />} />
        <Route path="/" element={<PostGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
