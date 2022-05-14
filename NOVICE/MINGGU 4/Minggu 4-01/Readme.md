DOM

Document Object Model ( DOM ) adalah representasi data dari objek yang terdiri dari struktur dan konten dokumen di web. 


1. DOM SELECTION METHOD 
 
   * getElementById ()
   * getElementsByTagName ()
   * getElementsByClassname ()
   * querySelector ()
   * querySelectorAll () 
   
   
   CONTOH :
    * getElementById () mengembalikan elemen yangmana elemennya hanya ada satu.
    Misal saya memiliki html seperti berikut :
    
		    <!DOCTYPE html>
		<html lang="en">
		<head>
			  <meta charset="UTF-8">
			  <title>Dom Selection</title>
			  <style>
			    * { 
				border: 2px solid #dedede; 
				padding: 15px; 
				margin: 15px; 
			    }
			    html { 
			      margin: 0;
			      padding: 0;
			    }
			    body { 
			      max-width: 600px;
			      margin: 30px auto;
			      font-family: sans-serif;
			      color: #333;
			    }
			  </style>
			</head>
			<body>

		  <h1 id="judul">Hello World</h1>
		  <div id="container">
		      <section id="a">
			  <p class="p1">paragraf 1</p>
			  <a href="https://github.com/	 
			  chamida12">Github Chamida</a>
			  <p class="p2">paragraf 2</p>
			  <p class="p3">paragraf 3</p>
		      </section>
		      <section id="b">
			  <p>paragraf 4</p>
			  <ul>
			      <li>item 1</li>
			      <li>item 2</li>
			      <li>item 3</li>
			  </ul>
		      </section>
		  </div>

		<script src="latihan.js"></script>
		</body>
		</html>
		
		
		
Lalu saya bisa menggunakan DOM getElementById ()  dan dapat memanipulasi judul lewat dom tersebut. Misal dengan cara demikian :

		const judul = document.getElementById('judul');
		judul.style.color = 'yellow'
