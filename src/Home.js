const Home = () => {
    const handleClick = () =>{
        console.log("Button clicked");
    }
    return (  
        <div className="home">
            <h2>HomePage</h2>
            <button onClick={handleClick}>click</button>
        </div>
    );
}
 
export default Home;