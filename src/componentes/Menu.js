export default function Menu(){
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    >
                    <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="http://localhost:3000/">
                            Home
                        </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/categorias">
                                Listar Categorias
                            </a>
                        </li>
                        <li>
                            <a className="nav-link" href="http://localhost:3000/cadastracategoria">
                            Cadastrar Categoria
                            </a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    );
};