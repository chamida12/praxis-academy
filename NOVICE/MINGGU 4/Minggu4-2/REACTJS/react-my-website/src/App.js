import logo from './logo.svg';
import './App.css';
import MyButton from './Component/MyButton';
import Navbar from './Component/Navbar';
import Footer from './Component/ClassComponent';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          First Proyek Dong.
        </p>
        <a>
          
            Website
        </a>
        <MyButton/>
        <Footer/>
       
        
      </header>
    </div>
  );
}

export default App;





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> First Proyek.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
