REACT JS 

adalah sebuah javascript library yang digunakan untuk pembuatan interface.
Cara install reactjs:

1. Buat folder untyk menyimpan file react.
2. Buka terminal pada folder
3. Masukan " sudo npm install -g create-react-app"
4. Masukan " create-react-app react-my-website "
5. jalankan " npm start "



--COMPONENT REACTJS ---

Pada folder REACTJS saya membuat komponen pada folder Compenent dengan nama file MyButton dengan code berikut :

		const myButton = () => {
		    return (
			<div>
			     <button>Click Disini</button>
			 </div>
		    )
		}

		export default myButton;
		

Dan disambungkan dengan App.js di folder yang sama dengan code berikut :

		import logo from './logo.svg';
		import './App.css';
		import MyButton from './Component/MyButton'; //import untuk menyambungkan ke file mybutton

		const App = () => {
		  return (
		    <div className="App">
		      <header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
			  First Proyek Dong.
			</p>
			<a>
			  
			    Website
			</a>
			<MyButton/>
		       
			
		      </header>
		    </div>
		  );
		}

		export default App;









