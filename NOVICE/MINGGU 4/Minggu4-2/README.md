REACT JS 

adalah sebuah javascript library yang digunakan untuk pembuatan interface.
Cara install reactjs:

1. Buat folder untyk menyimpan file react.
2. Buka terminal pada folder
3. Masukan " sudo npm install -g create-react-app"
4. Masukan " create-react-app react-my-website "
5. jalankan " npm start "

---- Dynamic Value -----

			File App.js

			function App() {
			  const title = "Welcome to My Web ";
			  const angka = 40;
			  const link = " https://www.w3schools.com/js/ "
			  return (
			 

			    <div>
			       <h1> {title} </h1>
			       <h1> {angka * 2 }</h1>
			       <a href={link}> Ayo mampir!! </a>
			    </div>
			  );
			}

			export default App;
			



Index.js 

			import React from 'react';
			import ReactDOM from 'react-dom/client';
			import App from './App';


			const root = ReactDOM.createRoot(document.getElementById('root'));
			root.render(
			  <React.StrictMode>
			    <App />
			  </React.StrictMode>
			);




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
		
* FUNCIONAL COMPONENT 


		function myButton(){
		    const klik = () => {
			alert ("Terimakasih");
			console.log("klik disini");
		    };
		    return(
			<div>
			    <button onClick={() => klik ()}> Klik Disini </button>
			</div>
		    );
		}

		export default myButton; 

* CLASS COMPONENT

 Membuat component dengan class :

		 import React from "react";

		class  Footer extends React.Component{
		    render(){
			return (
			    <div>
				<h1> MASLAKUL HUDA </h1>
			    </div>
			)
		    }
		}

		export default Footer;
		
Disambungkan dengan :

		import Footer from './Component/ClassComponent';




* NAVBAR

Navigasi Bar atau NavBar adalah nama yang disematkan untuk mendefenisikan sistem
navigasi yang dikumpulkkan pada satu bagian pada tampilan website. 
Caranya adalah membuat file dengan nama Navbar dan memasukan kode seperti berikut  dibuat dengan menggunakan class Component:

		function Navbar(){
		    return (
			<div>
			    <ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Contact</a></li>
				<li><a href="#">Profil</a></li>
			    </ul>
			</div>

			)
		}


		export default Navbar;


Disambungkan menggunakan :

		import Navbar from './Component/Navbar';
		
		
--- STATE REACT ---

State adalah sebuah object untuk menyimpan data pada React dan akan 
di render atau muat ulang ketika data mengalami perubahan.

--- PROPS REACT ---

Mengirim komponen anak ke komponen induk atau sebaliknya :

contoh mengirim komponen Induk ke komponen anak, membuat file app.js seperti berikut :


			import { useState } from "react"; // Pertama Import useStatenya
			import Header from "./Component/Header";
			import Produk from "./Component/Produk";

			function App() {
			 
			  const [ produk, setProduk] = useState ([
			    { id : 1, title: 'Produk 1', peice: 899},
			    { id : 2, title: 'Produk 2', peice: 769},
			    { id : 3, title: 'Produk 3', peice: 989},
			    { id : 4, title: 'Produk 4', peice: 871},
			    { id : 5, title: 'Produk 5', peice: 459},
			  ]);

			 
			     
			  
			  return (
			 

			    <div>
			      <Header/>
			     <Produk produk = {produk}/>
			 
			       
			    </div>
			  );
			}

			export default App;
			
			
Membuat file baru bernama Produk.js seperti ini dan menghubungkannya :


			const Produk = (props) => {
			    return (
				<div>
				     <ul>
					{ props.produk.map(( produk ) => (
				<li key = { produk.id }>{ produk.title } - { produk.peice}</li>
			      )
			)} 


			      </ul>
				</div>
			    )
			}


			export default Produk;



Mengirim komponen anak ke komponen induk :

Membuaut code di App.js seperti berikut :

			import { useState } from "react"; // Pertama Import useStatenya
			import Header from "./Component/Header";
			import Produk from "./Component/Produk";

			function App() {
			 
			  const [ produk, setProduk] = useState ([
			    { id : 1, title: 'Produk 1', peice: 899},
			    { id : 2, title: 'Produk 2', peice: 769},
			    { id : 3, title: 'Produk 3', peice: 989},
			    { id : 4, title: 'Produk 4', peice: 871},
			    { id : 5, title: 'Produk 5', peice: 459},
			  ]);
			  const deleteProduk = ( produkId) => {
			    const newProduk = produk.filter ( produk => produk.id !== produkId);// Menggukan fungsi filter
			    //mencari element didalam array 
			    setProduk(newProduk);
			  }

			 
			     
			  
			  return (
			 

			    <div>
			      <Header/>
			     <Produk produk = {produk}deleteProduk= {deleteProduk}/>
			 
			       
			    </div>
			  );
			}

			export default App;
			
			
Lalu membuat kode di folder Produk.js seperti ini :


			const Produk = ({produk, deleteProduk}) => {
			    return (
				<div>
				     <ul>
					{ produk.map(( produk ) => (
				<li key = { produk.id }>{ produk.title } - { produk.peice}
				<button onClick={() => deleteProduk(produk.id)}> Delete </button>
				</li>
			      )
			)} 


			      </ul>
				</div>
			    )
			}


			export default Produk;
			
Contoh pembuatan navbar dengan props : 



			import logo from './logo.svg';
			import './App.css';
			import MyButton from './Component/MyButton';
			import Navbar from './Component/Navbar';
			import Footer from './Component/ClassComponent';

			const App = () => {
			  const navHeading = "Navigation Bar";
			  const navText = "Sosmed" // Membuat variabel yang akan dimasukan ke Navbar

			  return (
			    <div className="App">
			      <header className="App-header">
				<Navbar navText={navText} navHeading={navHeading}/> 
				{/* memasukan variable kedalam element */}
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
			
			
			
			
Lalu cara memanggil props dengan cara :
di file Navbar.js :

			function Navbar(props){ //Memanggil Props dengan cara memasukan props pada parameter
			   
			    return (
				<div>
				    <h1>{props.navHeading}</h1>
				    <ul>
					<li>
					    <a href="#">Home</a>
					</li>
					<li>
					    <a href="#">Profil</a>
					</li>
					<li>
					    <a href="#">Contact</a>
					</li>
					<li>
					    <a href="#">{props.navText}</a>
					    {/* cara memanggil props dari variable App */}
					</li>
				    </ul>
				</div>

				)
			}


			export default Navbar;


Pembuatan Props Untuk Button :

			import logo from './logo.svg';
			import './App.css';
			import MyButton from './Component/MyButton';
			import Navbar from './Component/Navbar';
			import Footer from './Component/ClassComponent';

			const App = () => {
			  const navHeading = "Navigation Bar";
			  const navText = "Sosmed" // Membuat variabel yang akan dimasukan ke Navbar


			  const click = () =>{
			    return alert (" tombol merah! tombol merah! ");
			  }


			  return (
			    <div className="App">
			      <header className="App-header">
				<Navbar navText={navText} navHeading={navHeading}/> 
				{/* memasukan variable kedalam element */}
				<img src={logo} className="App-logo" alt="logo" />
				<p>
				  First Proyek Dong.
				</p>
				<a>
				  
				    Website
				</a>
				<MyButton click={click}/>
				<Footer/>
			       
				
			      </header>
			    </div>
			  );
			}

			export default App;



Dipanggil melalui file MyButton.js

			//PROPS
			const MyButton = (porps) => {
			    return (
				<div>
				     <button onClick ={() => porps.click()}>Click Disini</button>
				 </div>
			    )
			}

			export default MyButton;
					

* Mengirim Parameter melalui event klik :


			import Header from "./Component/Header";

			function App() {
			  const title = "Welcome to My Web ";
			  const angka = 40;
			  const link = " https://www.w3schools.com/js/ "


			  const clickme = (name) => { //Menangkap parameter name 
			    alert ("Hello " + name);
			  }
			  return (
			 

			    <div>
			      <Header/>
			       <h1> {title} </h1>
			       <h1> {angka * 2 }</h1>
			       <a href={link}> Ayo mampir!! </a>
			       <button onClick={ () => clickme('Chami')}> Click Me</button>
			    </div>
			  );
			}

			export default App;


		


---- Usestate Hook ---
 
Digunakan untuk mengubah variable. Saya mencoba mengubah title pada file berikut :

			import Header from "./Component/Header";

			function App() {
			  const title = "Welcome to My Web ";
			  const angka = 40;
			  const link = " https://www.w3schools.com/js/ "


			  const clickme = (name) => { //Menangkap parameter name 
			    alert ("Hello " + name);
			  }
			  return (
			 

			    <div>
			      <Header/>
			       <h1> {title} </h1>
			       <h1> {angka * 2 }</h1>
			       <a href={link}> Ayo mampir!! </a>
			       <button onClick={ () => clickme('Chami')}> Click Me</button>
			    </div>
			  );
			}

			export default App;
			
			
Perubahan :
  
			  
			  import { useState } from "react"; // Pertama Import useStatenya
			import Header from "./Component/Header";

			function App() {
			  const [title, setTitle] = useState ("Welcome to My Web ");
			  const [angka, setAngka] = useState (40);
			  


			  const ubahJudul = () => {  
			    setTitle (" Merubah Dunia ");
			    setAngka(20);
			  }
			  return (
			 

			    <div>
			      <Header/>
			       <h1> {title} </h1>
			       <h1> {angka * 2 }</h1>
			   
			       <button onClick={ ubahJudul }> Click Me</button> 
			       {/* Hpus bagian anonyus function */}
			    </div>
			  );
			}

			export default App;
			
			
			
--- Looping List --- 


			import { useState } from "react"; // Pertama Import useStatenya
			import Header from "./Component/Header";

			function App() {
			 
			  const [ produk, setProduk] = useState ([
			    { id : 1, title: 'Produk 1', peice: 899},
			    { id : 2, title: 'Produk 2', peice: 769},
			    { id : 3, title: 'Produk 3', peice: 989},
			    { id : 4, title: 'Produk 4', peice: 871},
			    { id : 5, title: 'Produk 5', peice: 459},
			  ]);

			 
			     
			  
			  return (
			 

			    <div>
			      <Header/>
			      <ul>
			      { produk.map(( produk ) => (
				<li key = { produk.id }>{ produk.title } - { produk.peice}</li>
			      )
			)} 


			      </ul>
			       
			    </div>
			  );
			}

			export default App;


--- useEffect Hook ----
























