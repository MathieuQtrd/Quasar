
const Nav = () => {
    return (
        <nav className="navbar bg-dark border-bottom border-body navbar-expand-lg" data-bs-theme="dark">
            <div className="container">
                <a className="navbar-brand" href="#">Mon Restaurant</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Menu</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav
