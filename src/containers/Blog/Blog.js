import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response) =>{
            this.setState((prevState, props) =>{
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {return {...post, author: 'Max'}});
                return {posts: updatedPosts}
            });
        }).catch((error) => {
            this.setState((prevState, props) => {return {error: true}});
        });
    }

    postSelectedHandler = (postId) =>{
        this.setState(
            (prevState, props) =>{
                return {selectedPostId: postId};
            }
        );
    }
    render () {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>

        if(!this.state.error){
            posts = this.state.posts.map((post) => {
                return <Post 
                key={post.id} 
                title={post.title}
                author={post.author}
                clicked={() => {this.postSelectedHandler(post.id)}} />
            });
        }

        console.log(this.state.posts);
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;