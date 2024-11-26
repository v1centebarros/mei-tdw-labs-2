import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to the home page!</p>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Link to={"/ex01"}>Ex01</Link>
                <Link to={"/ex02"}>Ex02</Link>
                <Link to={"/ex03"}>Ex03</Link>
                <Link to={"/ex04"}>Ex04</Link>
                <Link to={"/atm"}>Atm</Link>
                <Link to={"/ex06"}>Ex06</Link>
                <Link to={"/ex07"}>Ex07</Link>
            </div>
        </div>
    );
}

export default Home;