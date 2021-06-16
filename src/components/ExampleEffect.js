import React ,{useState,useEffect} from 'react';

export default function ExampleEff() {

    const [smile,setSmile] = useState('');

    useEffect(()=>{
        document.title = `I am feeling ${smile} today`;
    });
    
    return(
        <>
        <div>
            <button onClick={()=> setSmile(':D')}>Happy smile</button>
            <button onClick={()=> setSmile(':(')}>Sad smile</button>
        </div>
            <p>{smile}</p>
            <p>Look at the title</p>
        </>
    );
}