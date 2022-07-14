import "../App.css"

const Navbar = () =>{
    return (
        <div className="container">
             <div className = "head">
       <div className = "content">
        <img className = "pic" src="https://www.freepnglogos.com/uploads/pen-png/pen-png-transparent-image-pngpix-0.png" alt="" />
        <p>Compose Post</p>
       </div>
       <div className = "content">
        <img className = "pic" src="https://th.bing.com/th/id/R.d99acb4c49c6c643030dced66fc7b6b8?rik=l4xs5pA0AF5VVg&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_339013.png&ehk=qEuMr%2fPxozCqhH8Z8XsGggKw%2bMFBVWX4I%2bJzZEu03io%3d&risl=&pid=ImgRaw&r=0" alt="" />
        <p>Photo/Video Album</p>
       </div>
       <div className = "content">
        <img className = "pic" src="https://png.pngtree.com/element_our/png/20181213/video-vector-icon-png_267481.jpg" alt="" />
        <p>Live Videos</p>
       </div>
    </div>
        </div>
    )
}

export default Navbar