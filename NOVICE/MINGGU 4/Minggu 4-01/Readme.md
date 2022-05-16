DOM

Document Object Model ( DOM ) adalah representasi data dari objek yang terdiri dari struktur dan konten dokumen di web. 


1. DOM SELECTION METHOD 
 
   * getElementById ()
   * getElementsByTagName ()
   * getElementsByClassName ()
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
		
Jika kita membuka inspect pada document dan mengetik judul pada console maka akan keluar :

<h1 id="judul" style="color: yellow; background-color: purple;">


		
		
  *getElementsByTagName () - mengembalikan HTMLColection. Dengan contoh html  yang sama kita akan mengembalikan nilai element p dari javascript.

               const p = document.getElementsByTagName('p');
	
	
Maka yang akan keluar adalah :

		HTMLCollection { 0: p.p1, 1: p.p2, 2: p.p3, 3: p, 			length: 4 }
		
		
* getElementsByClassName () - Mengembalikan HTMLColection
Menggunakan HTML yang sama kita mencoba memanggil class p1 :

		const p1 = document.getElementsByClassName ('p1');
		    p1[0].innerHTML = ' Pengubahan menggunakan
		    Javascript';
		    
Maka yang akan keluar  di console adalah :


		p1
		HTMLCollection { 0: p.p1
		, length: 1 }
		​
		0: <p class="p1">
		​
		length: 1
		​
		<prototype>: HTMLCollectionPrototype { item: 	
		item(), namedItem: namedItem(), length: Getter, … }
		
		
	* querySelector ()

Menggunakan HTML yanng sama kita mencoba mengambil paragraf ke 4 dari javascript :

		const p4 = document.querySelector (' #b p');
		
Tugas ini berbunyi carikan saya element yang idnya b dan carikan paragraf. Kode ini hanya bisa membuka dan mengubah satu element saja. 


	  * querySelectorAll () 
	  
Jika ingin  mengubah semua element secara bersamaan menggunakan kode di atas, contoh :

		const p = document.getElementsByTagName ('p');
		
		
Hasil yang akan dikeluarkan :


		HTMLCollection { 0: p.p1, 1: p.p2, 2: p.p3, 3: p, length: 4 } //yang dikembalikan pada console

Jika ingin mewarnai seluruh  element p maka harus melakukan looping.

		const p = document.getElementsByTagName ('p');
		for (let i = 0; i < p.length; i++){
		    p[i].style.backgroundColor = ' Yellow';
		}
		
		
		

