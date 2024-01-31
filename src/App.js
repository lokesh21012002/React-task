import Top from './components/Top';
import Mid from './components/Mid';
import Bottom from './components/Bottom';
import './App.css';

function App() {
  return (
    <div className="App">

      <Top/>
     
      <Mid/>
       <Bottom output={"text"}/>


      {/* <div>
        Translator App

      </div>
      <div>
        Mid
      </div>
      <div>

        Lower
      </div> */}
      
    </div>
  );
}

export default App;
