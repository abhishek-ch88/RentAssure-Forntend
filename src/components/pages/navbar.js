import logo from "../assets/images/logo.png";
import "../css/navbar.css";

function Navbar() {

    return(
        <div className="navbarclass">
            <nav class="navbar navbar-expand-sm d-flex justify-content-sm-between ">
                <a class="navbar-brand" href="{#}"><img src={logo} alt="RentAssure"/> </a>
                <button id="nav-collaps-button" className=" navbar-toggler" type="button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" data-toggle="modal" data-target="#navbar-model">
                    <i class="fas fa-bars" style={{fontSize:'2rem'}}></i>
                </button>

                <div class="d-none d-sm-block mx-3" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="{#}"><i class="d-none fas fa-home"></i>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{#}"><i class="d-none fas fa-info"></i>About</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="{#}"><i class="d-none fas fa-shopping-cart"></i>Rent</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="{#}"><i class="d-none fas fa-comments"></i>Contact</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="{#}"><i class="d-none fas fa-sign-in-alt"></i>Signin</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="navbar-model" class="modal fade " role="dialog">
                <div class="modal-dialog modal-lg" role="content">
                    <div class="modal-content">
                        <div class="modal-body">
                            <ul class="navbar-nav">
                                <li class="nav-item ">
                                    <a class="nav-link active" href="{#}"><i class="fas fa-home"></i>Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{#}"><i class="fas fa-info"></i>About</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="{#}"><i class="fas fa-shopping-cart"></i>Rent</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="{#}"><i class="fas fa-comments"></i>Contact</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link " href="{#}"><i class="fas fa-sign-in-alt"></i>Signin</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar