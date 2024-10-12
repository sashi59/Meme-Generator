import {useState, React, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MemeCard from "../components/MemeCard";
import { fetchMeme } from "../api/meme";
const Home = () => {
    const [meme, setMeme] = useState(null);
    useEffect(()=>{
        fetchMeme().then((meme)=>setMeme(meme.data.memes));
    },[])
  
   
    return (
        <div className="meme-conatainer row">
            
            {meme && meme.map((m)=>(<MemeCard name={m.name} img={m.url} />))}
            

            
        </div>
    )
};

export default Home;
