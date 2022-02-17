
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import Header from './components/Header';
import { Route, Routes} from "react-router-dom"
import About from "./pages/About";
import AboutLink from "./components/AboutLink";
import {FeedbackProvider} from "./context/FeedbackContext"

function App() {
  // console.log(FeedbackData);
  return (
    <FeedbackProvider>

    <>
      <Header></Header>
      <Routes>
      <Route  path="/"  element={
        <>
          <div className="container">
            <FeedbackForm  ></FeedbackForm>
            <FeedbackStats ></FeedbackStats>
            <FeedbackList />
          </div>  
          <AboutLink></AboutLink>
          </>
        } >

      </Route>

      
        <Route path="/about" element={<About></About>}>

        </Route>
        
      </Routes>
    </>
          </FeedbackProvider>
  );
}

export default App;


//rfce