import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <div>
            <header>
                <nav className="navbar navbar-expand-lg lg-body-tertiary">
                    <div className="container-fluid">
                        <a href="#" className="navbar-brand">Outlet Demo</a>
                        <button type="button" className="navbar-toggle" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                        aria-label="Toggle-navigation"><span className="navbar-toggler-icon"></span></button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav"> 
                                <li className="nav-item">
                                    <Link className="mx-2" to={"/"}>Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="mx-2" to={"/about-us"}>About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="mx-2" to={"/services"}>Services</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="mx-2" to={"/contact-us"}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            <main>
                {/* Nested outlet will be rendering here  */}
                <Outlet/>
            </main>
            <footer>
                <div className="card text-center">
                    <div className="card-header">Featured</div>
                    <div className="card-body">
                        <h5 className="card-title">Special title treatment</h5>
                        <p className="card-text">With Supporting text below as a natural lead-in to additional content</p>
                    </div>
                    <div className="card-footer text-body-secondary">2 day ago </div>
                </div>
            </footer>
        </div>
    );
}