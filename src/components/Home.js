import BlogList from "./BlogList";
import useFetch from "../Hooks/useFetch";
const Home = () => {
   const {data:blog,isPending,error}=useFetch('http://localhost:8000/blogs')

    //const [name,setName]=useState('mario')

    // const handleDelete=(id)=>{
    //     const newBlogs=blog.filter((blog)=>blog.id !== id)
    //     setBlogs(newBlogs)
    //}
    // useEffect(()=>{
    //     console.log('use effect ran')
    //     console.log(name)
    // },[name])   //here name is a dependency which causes state to change

    return ( 
        <div className="home">
         {error && <div>{ error }</div>}
         { isPending && <div>Loading...</div>}
           {blog && <BlogList blogs={blog} title="All Blogs..." />}


        </div>
     );
}
 
export default Home ;