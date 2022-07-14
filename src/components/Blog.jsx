import React, { useEffect, useState } from 'react'
import "../App.css"

const Blog = () => {

    const [query, setQuery] = useState("")
    const [gif, setGif] = useState([]);

    const [pic, setPic] = useState("");
    const [text, setText] = useState("");
    
    const [msg, setMsg] = useState([]);

    useEffect(() => {
        fetchData();
    }, [query]);


    const fetchData = async () => {
        const res = await fetch(`https://api.giphy.com/v1/stickers/search?api_key=ugljLSSEpDBAQ2dTp6G4rDcdFMLnBcbX&q=${query}`);
        const response = await res.json();
        //console.log(response.data);
        setGif(response.data);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (text !== "") {
            setMsg([text, ...msg]);
            setText("");
        }
    }



    const handleClick = (id) => {
        setPic(id);
    };


    return (
        <>
            <div className='container'>


                <div className="main_body">
                    <form onSubmit={handleSubmit}>
                        <img className="profile" src="https://cdn-icons.flaticon.com/png/128/3033/premium/3033143.png?token=exp=1657827121~hmac=21740fc6d77d66c21b9d7ab5a8be88c8" alt="" />

                        <input className='input_box' type="text" placeholder="Write something here..." onChange={(e) => setText(e.target.value)} value={text} cols="74" rows="6" />
                        <br /><br />
                        <button type="submit" className='btn2'>Post</button>
                    </form>

                    <div className="second">

                        <img style={{ height: "76%" }} src={pic} />
                        {
                            msg.map((el) => {
                                return (
                                    <>
                                        <div className='content'>


                                            <h3 >{el}</h3>
                                        </div>

                                    </>
                                )
                            })
                        }
                    </div>
                </div>



            </div>
            <div className='container_box'>
                <div className="gif_box">

                    <input className="input_search" type="text" placeholder="Check In" />
                    <input className="input_search" type="text" placeholder="Tag Event" />
                    <input className="input_search" type="text" placeholder='GIF' onChange={(e) => setQuery(e.target.value)} />
                    <input className="input_search" type="text" placeholder="Tag Friends" />

                </div>
                <div className="last">

                    <div className="lowest">
                        <button className="btn">Private</button>
                        <button className="btn2">Add Post</button>
                    </div>

                </div>

                <div className='emoji_box'>
                    {

                        gif.map((el) => {
                            console.log("value", el);
                            return <>
                             
                                <img className='best_pic' src={el.images.original.url} onClick={() => handleClick(el.images.original.url)} />
                            </>
                        })
                    }
                </div>
            </div>
            )

        </>
    )
}
export default Blog