chamida@chamida-Vostro-3401:~$ mkdir rhymes
chamida@chamida-Vostro-3401:~$ cd rhymes
chamida@chamida-Vostro-3401:~/rhymes$ git init
Initialized empty Git repository in /home/chamida/rhymes/.git/
chamida@chamida-Vostro-3401:~/rhymes$ touch README.txt
chamida@chamida-Vostro-3401:~/rhymes$ git add README.txt
chamida@chamida-Vostro-3401:~/rhymes$ git commit -m 'First commit'
[master (root-commit) 08ddbdb] First commit
 1 file changed, 0 insertions(+), 0 deletions(-)
 create mode 100644 README.txt
chamida@chamida-Vostro-3401:~/rhymes$ echo 'This repo is a collection of my favorite nursery rhymes.' >> README.txt
chamida@chamida-Vostro-3401:~/rhymes$ git status
On branch master
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   README.txt

no changes added to commit (use "git add" and/or "git commit -a")
chamida@chamida-Vostro-3401:~/rhymes$ git diff
diff --git a/README.txt b/README.txt
index e69de29..c83e022 100644
--- a/README.txt
+++ b/README.txt
@@ -0,0 +1 @@
+This repo is a collection of my favorite nursery rhymes.
chamida@chamida-Vostro-3401:~/rhymes$ git add README.txt
chamida@chamida-Vostro-3401:~/rhymes$ git commit -m 'Added project overview to README.txt'
[master 8c62318] Added project overview to README.txt
 1 file changed, 1 insertion(+)

	Bagian selanjutnya adalah mendownload dan mengaplod nya (Alice downloads favorite rhymes.)
pada bagian ini terdapat tulidan not found 
 	BAGIAN MENYALIN FILE DAN MEMBERIKAN PERUBAHAN 
 
	MENYALIN PROYEK DAN MERUBAH BEBERAPA HAL
	
