//PROPS
const MyButton = (porps) => {
    return (
        <div>
             <button onClick ={() => porps.click()}>Click Disini</button>
         </div>
    )
}

export default MyButton;



//Code Buat Component Button

// const myButton = () => {
//     return (
//         <div>
//              <button>Click Disini</button>
//          </div>
//     )
// }
// export default myButton;


// Funcional Component 
// function myButton(){
//     const klik = () => {
//         alert ("Terimakasih");
//         console.log("klik disini");
//     };
//     return(
//         <div>
//             <button onClick={() => klik ()}> Klik Disini </button>
//         </div>
//     );
// }

// export default myButton;