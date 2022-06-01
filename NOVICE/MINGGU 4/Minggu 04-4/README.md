----Pemanggilan API------

Menggunakan fect untuk pemanggilan API 



                    import React,{Component,Fragment} from "react";
                    import "./BlogPost.css";
                    import Post from "./Post";

                    class BlogPost extends Component {
                        state ={
                            post:[]
                        }
                        componentDidMount(){
                            fetch('https://jsonplaceholder.typicode.com/posts')
                            .then(response => response.json())
                            .then(json => {
                                this.setState({
                                    post: json
                                })
                            })
                        }


                        render(){
                            return(
                                <Fragment>
                                <p className=" section-title"> Blog Post  </p>
                                {
                                    this.state.post.map(post =>{
                                        return  <Post key ={post.id}title = {post.title} desc ={post.body}/>

                                    }) // berfungsi untuk melooping array 
                                }
                                </Fragment>
                            )
                        }
                    }
                    export default BlogPost;




Pemanggilan API menggunakan Axios hanya perlu merubah bagian 


                         componentDidMount(){
                                
                                axios.get('https://jsonplaceholder.typicode.com/posts')
                                .then((res)=>{
                                    this.setState({
                                        post:res.data
                                    })
                                })
                            }









---- ROUTING -----



install terlebih dahuli react - router -dom dengan cara :

                 npm install react-router-dom



file yang di root :

                import React from "react";
                import { Routes,Route } from "react-router-dom";
                import BlogPost from "../BlogPost/BlogPost";
                import Product from "../../Container/Product";

                function Home (){
                    return (
                        <Routes>
                            <Route path="/" element={<BlogPost/>}></Route>
                            <Route path="/aku" element={<Product/>}></Route>
                        </Routes>
                    )
                }


                export default Home;



Di root di index.js:


            import React from 'react';
            import ReactDOM from 'react-dom/client';
            import { BrowserRouter } from 'react-router-dom';
            import './index.css';
            import reportWebVitals from './reportWebVitals';
            import Home from './Component/YouTube/Home';

            const root = ReactDOM.createRoot(document.getElementById('root'));
            root.render(
              <React.StrictMode>
                <BrowserRouter>
                
                <Home/>
                
                </BrowserRouter>
              
              </React.StrictMode>
            );

            reportWebVitals();







