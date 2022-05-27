import React, {Component} from "react";
import'./Product.css';

class CardProdact extends Component {
    state = {
        order: 0
    }
     
    handlePerubahanCounter = (newValue) =>{
        this.props.CountBerubah(newValue);
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1 
        },() => {
            this.handlePerubahanCounter(this.state.order);
        })

    }
   
    handleMinus = () => {
        if(this.state.order > 0){
            this.setState({
                order: this.state.order - 1
            },() => {
                this.handlePerubahanCounter(this.state.order);
            })
    
            
    

        }
        
    }
    render(){
        return(
            
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
         

        );
    }
}

export default CardProdact;