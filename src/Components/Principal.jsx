import { Outlet } from "react-router-dom";

export const Principal = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/inicio">Teinda DIEGO'S</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <a className="nav-link" href="/datos" style={{ height: "60px" }}>
                                Productos
                            </a>
                            <a className="nav-link" href="/ususarios" style={{ height: "60px" }}>
                                Mision
                            </a>
                            <a className="nav-link" href="/informacion" style={{ height: "60px" }}>
                                Informacion
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </>
    );
};
