import { Outlet } from "react-router-dom";
import DefaultHeader from "../container/DefaultHeader";
import "./HomePage.css";
import Menu from "../container/menu/Menu";


function HomePage() {


    return (
        <>
            <main>
            
            <div className="container">
                <Outlet />
                <DefaultHeader/>
             
            </div>
        </main>

        </>
    );
}


export default HomePage;