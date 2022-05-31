----LifeCycle Component----

Terdapat 3 fase dalam component :
1.Mounting
2.Updating
3.UnMounting 


A. Mounting adalah Fase Mounting adalah fase ketika components di buat atau pertama kali di render ke DOM. 
Pada fase ini ada tiga methods yang akan di eksekusi yaitu componentWillMount, render, dan componentDidMount.


B. Fase Updating

Fase updating adalah fase ketika sebuah component akan di render ulang, biasanya ini terjadi ketika ada 
perubahan pada state atau props yang mengakibatkan perubahan DOM.

Di fase ini adalah 5 methods yang akan di eksekusi.

   1. componentWillReceiveProps : fungsi ini akan di eksekusi bila state yang ada di component akan di 
    update atau di ubah dengan nilai props yang baru.
   2.  shouldComponentUpdate : tugasnya adalah untuk menentukan apakah sebuah component akan di render 
    ulang atau tidak.Method ini akan mengembalikan nilai boolean true & false, jika true maka component akan di render ulang atau sebaliknya.
   3.  componentWillUpdate : fungsi ini akan di eksekusi jika fungsi shouldComponentUpdate mengembalikan nilai true.
    Kemudian kembali method render akan di jalankan
   4. componentDidUpdate : fungsinya sama dengan componentDidMount yaitu untuk manipulasi DOM dan request data.

C. Fase Unmounting

Fase unmounting adalah fase ketika component di hapus dari DOM.

Pada fase ini hanya ada satu method yang akan di eksekusi yaitu componentWillUnmount, yang di jalankan sebelum sebuah component di hapus dari DOM








