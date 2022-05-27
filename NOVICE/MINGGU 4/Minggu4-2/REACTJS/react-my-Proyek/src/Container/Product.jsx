import React, {Component,Fragment} from "react";
import'./Product.css';

class Product extends Component {
    state = {
        order: 0 // Membuat state yang dimasukan kedalam troley & card
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1 //Jadi ini maksudnya adalah value state sebelumnya ditambahkan satu
        })

    }
   
    handleMinus = () => {
        if(this.state.order > 0){ //Ketika state order lebih besar dari 0 maka eksekusi set order di bawah. Namun jika state order sama dengan 0
                                    //atau kurang dari 0 maka fungsi dibawah atau setstate tidak dipakai
            this.setState({
                order: this.state.order - 1
            }) 
    

        }
        
    }
    render(){
        return(
            <Fragment>
            <div className="header">
                <div className="logo">
                    <img src="data:image/png;base64,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" alt=""/>
                    </div>
                <div className="troley">
                    <img src=" https://w7.pngwing.com/pngs/164/964/png-transparent-shopping-cart-computer-icons-bag-shopping-cart-angle-text-service.png" alt=""/>
                    <div className=" count ">{this.state.order} </div>
                </div>

            </div>
            
            <div className=" card">
                <div className="img-thumb-prod">
                    <img src="https://cdn1-production-images-kly.akamaized.net/WtODOvnlFFYvDrX4_ABr6k3HrbQ=/1907x0:5537x3630/1200x1200/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/2934548/original/058073500_1570610704-shutterstock_318541805.jpg" alt=""/>
                </div>
                <p className=" product-title"> Daging Ayam Berbumbu Rasa Original</p>
                <p className=" product-price"> Rp.410.000 </p>
                <div className="counter">
                    <button className="minus" onClick={this.handleMinus}></button>
                    <input type="text" value={this.state.order}/>
                    <button className=" plus" onClick={this.handlePlus}></button>
                </div>
            </div>
         </Fragment>

        );
    }
}

export default Product;