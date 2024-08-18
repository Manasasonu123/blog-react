import { Link } from "react-router-dom/cjs/react-router-dom.min";

const BlogList = ({blogs,title}) => {  //(props)
    // const value=props.blogs; 
    // const title=props.title;

    // console.log(props,value);
    return ( 
        <div className="blog-list">
             <h2>{title}</h2>
             {blogs.map((val)=>(//Here it loops inside blog    .Here blog vant be accessed as it is in Home.js
                <div className="blog-preview" key={val.id}>  
                <Link to={`/blogs/${val.id}`}>
                {/* Here key should be any unique property */}
                    <h2>{val.title}</h2>
                    <p>Written by: {val.author}</p>
                </Link>
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;