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
                        <img className="profile" src="data:image/png;base64,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" alt="" />

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