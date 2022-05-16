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
    Misal saya memiliki html pada folder yang sama di github saya yang berjudul latihan.html
		
		
		
Lalu saya bisa menggunakan DOM getElementById ()  dan dapat memanipulasi judul lewat dom tersebut. Misal dengan cara demikian :

		const judul = document.getElementById('judul');
		judul.style.color = 'yellow'
		
Jika kita membuka inspect pada document dan mengetik judul pada console maka akan keluar :

<h1 id="judul" style="color: yellow; background-color: purple;">


		
		
  - getElementsByTagName () - mengembalikan HTMLColection.
   Dengan contoh html  yang sama kita akan mengembalikan nilai element p dari javascript.

               const p = document.getElementsByTagName('p');
	
	
Maka yang akan keluar adalah :

		HTMLCollection { 0: p.p1, 1: p.p2, 2: p.p3, 3: p, 			length: 4 }
		
		
 - getElementsByClassName () - Mengembalikan HTMLColection
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
		
		
- querySelector ()

Menggunakan HTML yanng sama kita mencoba mengambil paragraf ke 4 dari javascript :

		const p4 = document.querySelector (' #b p');
		
Tugas ini berbunyi carikan saya element yang idnya b dan carikan paragraf. Kode ini hanya bisa membuka dan mengubah satu element saja. 


-  querySelectorAll () 
	  
Jika ingin  mengubah semua element secara bersamaan menggunakan kode di atas, contoh :

		const p = document.getElementsByTagName ('p');
		
		
Hasil yang akan dikeluarkan :


		HTMLCollection { 0: p.p1, 1: p.p2, 2: p.p3, 3: p, length: 4 } //yang dikembalikan pada console

Jika ingin mewarnai seluruh  element p maka harus melakukan looping.

		const p = document.getElementsByTagName ('p');
		for (let i = 0; i < p.length; i++){
		    p[i].style.backgroundColor = ' Yellow';
		}
		
		
		
2. MANIPULASI ELEMENT

  - element.innerHTML - Untuk mengubah isi dari sebuah teks yang telah di seleksi.
  
		  const judul = document.getElementById('judul');
		judul.innerHTML = '<em> Tentang Chami </em>';
		// maka bagian judul yang awalnya adalah Hello Word akan diubah secara otomatis. menambahkan <em></em> agar hurufnya 			miring
		
		
 -  element.style.<properticss>
 
 
 
		 const judul = document.querySelector ('#judul');
		judul.style.color =  'lightblue';
		judul.style.backgroundColor = 'silver';
		
		
3. MANIPULASI NODE
  
  Beberapa method javascript :
  - document.createElement ()
  - document.createTextNode ()
  - node.appendChild ()
  - node.insertBefore ()
  - parentNode.removeChild ()
  - parentNode.replaceChild ()
  
  
  Menggunakan node.appendChild ():
  
		  // menambahkan paragraf baru menggunakan DOM javascript 
		const pBaru = document.createElement('p'); // membuat paragraf baru
		const text = document.createTextNode ('Paragraf Baru'); // membuat text yang ada di dalam paragraf.

		//menyimpan text kedalam paragraf 
		pBaru.appendChild(text);
		//simpan pBaru di akhir section A
		const sectionA = document.getElementById('a');
		sectionA.appendChild(pBaru); 
		
		
  Menggunakan  node.insertBefore () :
  
  
  
			//membuat element baru
			const liBaru = document.createElement('li');
			const textLibaru = document.createTextNode('Item Baru');

			liBaru.appendChild(textLibaru);

			const ul = document.querySelector('section#b ul');
			const li2 = ul.querySelector('li:nth-child(2)');

			ul.insertBefore(liBaru,li2);
			
			
  - parentNode.removeChild () - menghapus secation yang dipilih dengan cara :
  			
  			// mencari section yang akan di hapus
			const sectionA = document.getElementById('a');

			const link = document.getElementsByTagName('a')[0];// membuat element yang akan dihapus
			sectionA.removeChild(link);//menghapus link


    - parentNode.replaceChild () - membuat section baru.
  




			const sectionB =  document.getElementById ('b');
			const p4 = sectionB.querySelector('p');

			const h2Baru = document.createElement('h2');
			const teksH2Baru = document.createTextNode ('Judul Baru!');

			h2Baru.appendChild(teksH2Baru);

			sectionB.replaceChild(h2Baru,p4);
