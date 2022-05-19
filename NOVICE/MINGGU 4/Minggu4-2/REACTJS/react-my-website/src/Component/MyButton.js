// const myButton = () => {
//     return (
//         <div>
//              <button>Click Disini</button>
//          </div>
//     )
// }
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