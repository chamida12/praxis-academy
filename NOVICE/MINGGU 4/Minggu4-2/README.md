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
					




		

