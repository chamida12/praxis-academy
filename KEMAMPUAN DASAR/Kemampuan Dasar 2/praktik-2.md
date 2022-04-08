		1. MEMBUAT ORGANIZATION PADA GITHUB
ketik bagian + lalu tambahkan new organization 
		2.TUGAS MENAMBAHKAN ANGGOTA TEAM
masuk kedalam repository organization yang telah dibuat (membuat repository terlebih dahulu di dalam organization sama seperti membuat repositoty biasa), klik bagian setting lalu pilih collabolator dan pilih add people.
setelah memilih anggota team diharapkan mengirim link invitetion pada orang yang di jadikan anggota.
		3. PUSH FIRST COMMIT
sama seperti mengpush pertama.
		4.PULL REQUEST
terdapat dua cara yaitu Fork & Pull Model dan Share Repository Model

	A. Fork & Pull Model 
	-membuka bagian organization -lalu buka repository pilih fork dibagian kanan atas.- akan muncul " Where should we fork code?"
	-pilih akun github kita untuk menyalin.
	-selanjutnya mengclone repository yang di salin dengan cara:
chamida@chamida-Vostro-3401:~$ git clone https://github.com/awalcoding/code.git
Cloning into 'code'...
remote: Enumerating objects: 12, done.
remote: Counting objects: 100% (12/12), done.
remote: Compressing objects: 100% (7/7), done.
remote: Total 12 (delta 0), reused 9 (delta 0), pack-reused 0
Unpacking objects: 100% (12/12), 9.83 KiB | 52.00 KiB/s, done.
	-membuat branch (cabang baru)
	saya mengetik git checkout -b pull. pull adalah nama branch yang saya buat. maka akan muncul
Switched to a new branch 'pull'
chamida@chamida-Vostro-3401:~/code anis$ git add .
chamida@chamida-Vostro-3401:~/code anis$ git commit -m "information added in readme"
On branch pull
nothing to commit, working tree clean
	cabangnya harus sebagai master.
chamida@chamida-Vostro-3401:~/code anis$ git checkout master
error: pathspec 'master' did not match any file(s) known to git
	jika mengalami eror seperti saya maka harus merubah terlebih dahulu ke main dengan cara
chamida@chamida-Vostro-3401:~/code anis$ git branch -M master
	lalu chek lagi apakah sudah masuk ke master atau belum dengan cara
git branch
	jika sudah muncul seperti di bawah ono maka sudah:
 chamida@chamida-Vostro-3401:~/code anis$ git branch
* master
  pull
	selanjutnya lakukan :
chamida@chamida-Vostro-3401:~/code anis$ git remote -v
origin	https://github.com/praxis-code/code.git (fetch)
origin	https://github.com/praxis-code/code.git (push)
chamida@chamida-Vostro-3401:~/code anis$ git fetch https://github.com/praxis-code/code.git 
From https://github.com/praxis-code/code
 * branch            HEAD       -> FETCH_HEAD
chamida@chamida-Vostro-3401:~/code anis$ git push https://github.com/praxis-code/code.git
Username for 'https://github.com': chamida12
Password for 'https://chamida12@github.com': 
Total 0 (delta 0), reused 0 (delta 0)
remote: 
remote: Create a pull request for 'master' on GitHub by visiting:
remote:      https://github.com/praxis-code/code/pull/new/master
remote: 
To https://github.com/praxis-code/code.git
 * [new branch]      master -> master
chamida@chamida-Vostro-3401:~/code anis$ git push origin pull
Username for 'https://github.com': chamida12
Password for 'https://chamida12@github.com': 
Total 0 (delta 0), reused 0 (delta 0)
remote: 
remote: Create a pull request for 'pull' on GitHub by visiting:
remote:      https://github.com/praxis-code/code/pull/new/pull
remote: 
To https://github.com/praxis-code/code.git
 * [new branch]      pull -> pull
	
		5. MERGING A PULL REQUSET
	-buka repository organization- lalu klil pull request- klik new pull requet- dalam bagian base pilih branch yang kita buat -bagian compare pilih branch main atau master- dan tunggu konfirmasi.
gunanya untuk melihat perubahan apa saja yang terjadi di github
		6.Setting Up Travis CI
 
		
		
	
