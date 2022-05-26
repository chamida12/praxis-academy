REACT JS 

adalah sebuah javascript library yang digunakan untuk pembuatan interface.
Cara install reactjs:

1. Buat folder untyk menyimpan file react.
2. Buka terminal pada folder
3. Masukan " sudo npm install -g create-react-app"
4. Masukan " create-react-app react-my-website "
5. jalankan " npm start "

Jika node.js dan npm belum versi baru maka harus di update dengan cara:

1. sudo npm cache clean -f
2. sudo npm install -g n
3. sudo n stable

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


			import { useState } from "react";
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

			import { useState } from "react"; 
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
  
			  
			  import { useState } from "react";  // Pertama Import useStatenya
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


			import { useState } from "react"; 
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

Contoh menggunakan dua file. Satu file di isi dengan kode berikut :

			import { useState, useEffect } from "react";
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
			    const newProduk = produk.filter ( produk => produk.id !== produkId);
			    setProduk(newProduk);
			  }

			  const [name, setName] = useState('Chami') //membuat  state bernama name


			  useEffect(()=> {
			    console.log ('efect berjalan');//membuat  funtion untuk effect 

			  },[name]);
			 
			     
			  
			  return (
			 

			    <div>
			      <Header/>
			     <Produk produk = {produk}deleteProduk= {deleteProduk}/>
			     <button onClick={() => setName('Umami')}> Ubah Nama </button>
			     <p>{name}</p>
			    </div>
			  );
			}

			export default App;


Satunya lagi dengan kode berikut :

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




-----Mengubah Component menjadi Dinamis pada props---

Hasil Proyek ini terdapat pada folder NOVICE/MINGGU 4/Minggu4-2/REACTJS/react-my-proyek/src/Component/YouTube



--- Component Mengubah Nilai Pada Perent ----



Membuat file index.js :

						import React from 'react';
						import ReactDOM from 'react-dom/client';
						import './index.css';
						import reportWebVitals from './reportWebVitals';
						import Home from './Component/YouTube/Home';

						const root = ReactDOM.createRoot(document.getElementById('root'));
						root.render(
						  <React.StrictMode>
						    <Home/>
						  </React.StrictMode>
						);

						reportWebVitals();

Membuat File Home.jsx :



			import React, { Component } from "react";
			import Product from "../../Container/Product";
			import YouTubeCom from "./YouTube";

			class Home extends Component{
			    render(){
			     return (
				<div>
				    <p> <h1> Pengen Makan  </h1> </p>
				    {/* <YouTubeCom 
				     time="3.19" 
				     title=" Tutorial Reactjs Part 1"
				     desc="100rb x ditonton, 3 hari yang lalu"/>
				    <YouTubeCom 
				     time="4.10"
				     title=" Tutorial Reactjs Part 2"
				     desc="10rb x ditonton, 1 hari yang lalu"/>
				    <YouTubeCom 
				     time="7.30" 
				     title=" Tutorial Reactjs Part 3"
				     desc="20rb x ditonton, 5 jam yang lalu"/>  
				    <YouTubeCom 
				     time="9.03" 
				     title=" Tutorial Reactjs Part 4"
				     desc="500rb x ditonton, 10 hari yang lalu"/>
				    <YouTubeCom/>   */}
				    <p><h4> Cobain !!! </h4></p>
				    <hr/>
				    <Product/>




				</div>

			     )
			    }
			}


			export default Home;
			
			
			
Membuat file Product.jsx :

				import React, {Component,Fragment} from "react";
				import'./Product.css';

				class Product extends Component {
				    render(){
					return(
					    <Fragment>
					    <div className="header">
						<div className="logo">
						    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQUAAABhCAMAAADoWkRbAAAAnFBMVEX///8rOY5lxz4AAABfaqqIiIjKzeOVnMa7u7tFUZxERETy8/jk5vERERE3RZV6g7ivtNRSXaOL1W7MzMzX2uoiIiJtdrHu7u5mZmaiqM2Hj78zMzN3d3eZmZmx457Y8c6qqqpVVVWe3Ib1+/Nuykq8wdzd3d3i9Nrs+Od3zlWC0mLP7sPF6rao35K85quV2Hp8fHykpKRPT08nJyfIf89SAAAMoUlEQVR4nO1bB3fjOA5WYsmyZcmWi9x7SzJpe3f//78dwS4ClJzsZvR213jz3nhEkAQ+orFMEPx56rUF/QVD/S2pHU/DB0XDpqVphPLpQ4kGTQvUBPUeHMqblqgJurgoTJqWqAlauig0LVAjNHRACJsWqAlKXVOIm5aoCcpdFC5NS9QEDVwUUtP29tScXL+Xug4Ifd1y2j7uGhTsdxIKCzI4nt6Oj4//GhTybjiNgRZ8CwHu8LTbHn89cjo1Ld5vo6fdbitpNBpJ9SU1Ldtvod129PJYQb+aFvDn6fl4rkIA6LNpGX+aTsc6CBh9NC3lD9NTpScoem5azD9Pz2/v2utfRttS0jtVgyBdRYSFXj4VNUU/jPkxVBqGLK/kVUdSqTi0snankziEUfpT/759shjoo57hdFGxtU3zQdi/gfP08Qup9m6WduRHYPT5fpQYvcGE5dqyG6em2gzj8vxpO16GoV2GyTo0XVofh2lAUIlFzrXokZwx5owpzucjreFW5v9XW+vjdvu6k3TaMQNSLS8Bse1+eCjB0h8ok0gHSLiHhwW0tJ2zrD6GoR3ivsCJDSdFFb/gXLiMrPL10S+xMZBrff6EjQIrkrbHEZDDvAtSd9dNUVdsv9BhDRArRCdYQfdgM50SXQUNyovcozHgU5U5KwPfGWB4EkbADP713e8b22DS985pk0CBZqbFLi9xXjXN0FbucjPnWwUGYObMKcBWfu1qCobjrSCo7VebbCS7dG0Q/MvLaWo4Cfe0yToeeq8GAbSD2Lj1xg5JH0HvFnewxawR0iYTVetn0ecdNXDJKATkqnbe7j6cT8/BmUX/j8rCccQcx++sZdLm3SPCY20fF4Ru3na07XpA6CNOZZWuxjwMODnzI2B/Kg1h9BpQ0W7YDnoXHOtMxF/cjII+1XOhBud2N/sTGoQJvkQQZrNz9QF13OJgFIwqQDh/fvCyooc8WkSf2P1s+fjkyyi4o/W5xs7HBYkw53Ssjw+LKsJRQKDwEjzZ9cJ5pOi4/djpwgppK7M8sgX7JutmFKQHo4AaU8PAx9RdlCXndL7y+Igio6gO3AgQnM4vR1YpOYeKk3bbZDB0BKWWz6eQD4VunhLJQ5ZablDo9yiTCgnwBacrJXA+I/+m3SR4kvrn5XLXzkooHotpiXRoFdEYOlH84VgiOqHj7yVphlNi2gE5AKCAnF1sjN3PIy01ygI6aOGoMPA4in2ThSEShoJREPwop0zIzzExwoW0JYbXCeU+7uTIQo5aaiSF3iaiVVJZGwFn32RhiNr0PEMatC49d04YGT1ATBSNL5z10/38phccja1rUFzKyAZkI0sLBVxhiO/oszAs5HVT2gxTXI+FXltC6nLTf3W/nvW5MoJS73Iw9kNfgx0ckVRhpaMgdblDIo2nxKLEpOmBkMghtgHlJlu/Aeukhx1i6QHuwTprwbYl4gwuprj/4+qi7ZmBxh73v6iNoqPvCZ21WMfKyIAX3hZV8n4xOF6qHAWD06Z2pkuqjG1T9fqUMv3HHQHC2TpK9AdHvCFoe+Cxd4cYol6Vo+DNEQXCkBy4TezCeG2Lj1Z2OwyCVSl5Ai9p2qoJTW2nCATR0DOPcBQif+KTBq4aYUweTmJLjXeNL3a5iJxfB0ei2JMt6LudIjw1BmnPpMHhw4hpj8YL95VnLBUHqoqOpWtHZJEVwTH0mY+VInCjCCb42MGDKCJ1mHjDQYeq92pRGDkX0AhPrRH2w9BnJFaKwNhNaB3C21DoD9SevY7zQXPWoGAfw/uWTmvkRQErah0ne9bclz9rdLOP4Ws4Y0uIKhQ+3wJEWCPdhKP3LbsIz5r7wkKVbuZ8v56z/ADJh8L5+Ea+QkBLZ5IejkaxBwU7UaJO9A7RH2klDZfuyyofZ3eA3mBhFM6j4/bVe9VYkfQwClNPg5UocczI6T4qFRFahcu4Tdwy4YzAOak7riNCofr1ARrZvPDDKIT1KOA1F8HRt0cndLPTrk1YHu9TbeJCqurKGS+dQcEbHauO2zx1svfQitDN9xgfD931cBIVtLVxEhwv7+YfODia4zaMgpSP3tsJunlDqQIfcb3gXIPH/bZHHvdR5kLdaKLTlPKmIdhB4DAlg+9EhI+JZxXeij6bIzqcEAc18+B1KD8+zrvqnI+4Au3a4aM9VKfX+gq2FBl0dngVwdMcLmAr49LlMbl+XCXiUhXETvML2UfYCa4iYJ7JgvIVy8N6i67BhdjXmGvcXi4sVJordTd33rKN5e7NXEjqQ0fslctgAm8IUnrWbkherufLofBScp9Mz5MP+tz/qMK4m0+CtL0weMf0kkFZ5XCK2IoPGAjS1kE/GHgQy3H7VZugCbXmk8p5pjdeZQ08zoNJGsMN+ynjIl4UwBi+cO/Kaek/Z/bO0yNOGDFJF7lhWabSReqN4dNUkX4UBl+5ahPUJ+Ts18yzIGO/QyoH1RuDqTXqbu3tzOlf7rwSI5K6KU4fMt57r9tB7Jotc9/kwxqBSk9/0NmSTS+lnTX55gLG40HNYwweqZkx4g7ebaiYhm/j0e1jeQSrRK5+FTAsvTLD54yG3p09Fa2RSkCkscbkknTpo2NZSlD50ExT8VzGea818cPQd/93z+noiwiomqYECE3lhC0ZlgYr2809pqVEo17JmUWeeMyrj97u9XxOMSB2Va9E8XQ+UjuKtgtDeVPvSC8Bcgw8VP6Isp4G1D0sdt8mxsRq0C8dFxRnTL6eDIK38iXVy/GV5is/HRyiia03iP2BdryLsczu0khgeVAYLhc2nvYzN+JEQJeJWpKl7y1rbzG8kRPo9CofMFadL3Ac8kHIaEDu6qHOnfLHvuVNzmUJfeK8tAhp1f9TT/k4rItP6DSPOYfnfMHmvNzKeac73elOd7rTne50pzt9g9ZZljQtQ+M0bzHKmpaiaToACq2kRFfdOk5aglaz2pGiZG/+MWMmtua/9kUrGXs7jefRV6SdJa3NV/hvpj+UohbpRtNWK2zH7idMLJKfW4W3V+IbeUYiF5Um+Usp86IwM586daOUBLy2lPIr/strDD58r1lrTnye/5z3wroVmuwwAQs5j4CuVQNwOtgCRgrNcTWGMMGeavAsOjOdnwrlV1sUkEu73sZWYBYxhFayrQNKzwU2szVrOBS2gEzaFddjzQCWg0TsY3bgVnGdZ+LnRtjJuMj2fNCsVUSzsroz6FfIqZjZrstDsfaVFus6L7RUXyaIfup3YS+CvSLXQizrXDWA0YAgY+1RkT2i6Ms6rQUKa+Nas0w5jGCCERIZS2QgLtT4anQ+1UxMYg0VXFeyl1w0xfp1WhllwS4OuiGxAttK6cpg36vfhd1gbAjaebRkw2UybEodQVypRSaXfJ9xY4zUMHMBI9Ba5jDgnglD7ZSGMvE7EoFYSfV1+g9I0eH0X/bTWFTR0tKAYqtoLuYGxdfgIEx4aCiiSNk9J1ATFAHN5nuBwiyKOp05/826Z9EaLJr1mm8kgAyL1RW6ZoFSqBhz3jUYPTgtADUrDSXEWvO1Ayft8C/fM4aWTQX1nUs3E8ugDPPK/5INpXC2giWGD+zHXrWMo2gz58O3hHebHAQ2vBcwCssxowle4wpZeSg5+6aV7SVP0LohoZFUypVmCG1ibP0T4SlcvI6Em08rG2znEfCAVYHU0veVXSVWYlATjIPAOASEiLUabWxUi1TMtIZSs5el/WZJMbNgsDIR2GrEHUUn9gMwyJUac8hkQ2HFE5FaEh4h54J7ZoXQjbbZSH8LTAAAhLRy0kLEVCJF2EPZ9YaBcf09FApwKE5zOzjaVi4tk8sh3VP8VTJZQQfeL+FJciwWUAADXBtrWPBnVmFzj4DkyhGHsJSp0SSvmGqmQVRDKeeaM6mBhw/wvajA46wwgbGyT/W9lCJUlDIhSURKFr6SllVzZMpYef9Emc+MuwqHZaUnEA7CsiOUhZvOfp5sBOZJJ2KlAwA6V0FZpAh7KCkWcM2k5a6Tb5qCFJcRpAiT8OxCaKPMbRVYuWNvNWj0xtqJ+UJxVeFblgifNc6T8V/rVinPrQKdfedWGt4Li7iWhjKzF5an1O/8KILu/+O/otIgmV0IySSdgcGqUmZtNZi6XwbPSHInvElxrW1fFhPMihKH3oPJEGtGj0SKsIYyYo0NIt+sscdm63Jo8VpW0CazN9QbcJC1+AClauuwtxrmVnZKuIBsF7yCj52sGEuuFeeK9D59kyXwixXQwLHndbEYp3MoMuYbsO68NudTXVfZJigNpWfnNc74AL74M1vvJqm0kfnX0g+eJ/yNKLmfBga88jjUc/3TaVwU36yB7nSnWvo//OzO1YkvGtcAAAAASUVORK5CYII=" alt=""/>
						    </div>
						<div className="troley">
						    <img src=" https://w7.pngwing.com/pngs/164/964/png-transparent-shopping-cart-computer-icons-bag-shopping-cart-angle-text-service.png" alt=""/>
						    <div className=" count "> 3 </div>
						</div>

					    </div>

					    <div className=" card">
						<div className="img-thumb-prod">
						    <img src="https://cdn1-production-images-kly.akamaized.net/WtODOvnlFFYvDrX4_ABr6k3HrbQ=/1907x0:5537x3630/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2934548/original/058073500_1570610704-shutterstock_318541805.jpg" alt=""/>
						</div>
						<p className=" product-title"> Daging Ayam Berbumbu Rasa Original</p>
						<p className=" product-price"> Rp.410.000 </p>
						<div className="counter">
						    <button className="minus"></button>
						    <input type="text" value={3}/>
						    <button className=" plus"></button>
						</div>
					    </div>
					 </Fragment>

					);
				    }
				}

				export default Product;




Membuat File Product.css :


				.header {

				  background: #68c93e;

				  display: ruby-text-container;

				  width: 400px;

				  justify-content: space-between;

				  padding: 20px;

				  box-sizing: border-box;

				  margin-bottom: 40px;

				}



				.troley {


				  position: relative;

				}



				.troley img {

				  width: 30px;

				  margin-top: 15px;

				}



				.count {

				  background: #112492;

				  padding: 10px;

				  border-radius: 50%;

				  min-width: 10px;

				  height: 10px;

				  line-height: 10px;

				  text-align: center;

				  color: white;

				  font-size: 11px;

				  position: absolute;

				  bottom: -8px;

				  left: -13px;

				}



				.header .logo img {

				    width: 40%;
				  margin: 0;
				 margin-top: 10px;

				}



				.card {

				  width: 340px;

				  height: 495px;

				  box-sizing: border-box;

				  margin-left: 30px;

				  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.49);

				}



				.img-thumb-prod img {

				  width: 95%;

				  margin-left: 9px;

				  margin-top: 9px;

				}



				.product-title {

				  font-weight: 700;

				  margin: 10px;

				}



				.product-price {

				  color: orange;

				  font-weight: 700;

				  margin-left: 10px;

				}



				.minus,

				.plus {

				  color: white;

				  height: 45px;

				  width: 45px;

				  background: rgb(0, 0, 145);

				  border-radius: 5px;

				  border: 0;

				  margin: 2px 6px;

				}



				.counter {

				  margin-left: 12px;

				  margin-bottom: 10px;

				}



				.counter input {

				  height: 40px;

				  width: 200px;

				  border-radius: 3px;

				  border: 1px solid gray;

				  text-align: center;

				} 













