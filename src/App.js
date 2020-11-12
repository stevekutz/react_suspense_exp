import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';


// use lazy import for Posts comp, use default exports, named exports not supported
// NOT suported for server-side rendering
const Posts = React.lazy(() => import('./containers/Posts'));


class App extends Component {
    state = {
        showPosts: false,
    }

    modeHandler = () => {
        this.setState(prevState => {
        return {showPosts: !prevState.showPosts}
        })
    }


    render() {
        return (
        <React.Fragment>
            <button onClick = {this.modeHandler}> Toggle Button </button>
            {this.state.showPosts 
                ? 
                (<Suspense fallback = {<div> ... Loading ... </div>}>
                        <Posts />
                </Suspense>
                )
                :
                <User />            
                } 
        </React.Fragment>


        // <BrowserRouter>
        //   <React.Fragment>
        //     <nav>
        //       <NavLink to="/user">User Page</NavLink> |&nbsp;
        //       <NavLink to="/posts">Posts Page</NavLink>
        //     </nav>
        //     <Route path="/" component={Welcome} exact />
        //     <Route path="/user" component={User} />
            
        //     {/* original Route calling Posts comp */}  
        //     {/* <Route path="/posts" component={Posts} /> */}

        //     {/*   */}
        //     <Route 
        //       path = '/posts' 
        //       render = {() => (
        //         <Suspense fallback = {<div> ... Loading ... </div>}>
        //           <Posts />
        //         </Suspense>  
        //       )}   
                
        //     />
            
        //   </React.Fragment>
        // </BrowserRouter>
        );
    }
}

export default App;
