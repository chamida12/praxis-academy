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






