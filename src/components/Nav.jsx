import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";

function Nav() {
    return (
        <header>
            <nav>
                <a href="/">
                    <img src={headerLogo} alt="Header logo" />
                </a>
            </nav>
        </header>
    )
}

export default Nav;