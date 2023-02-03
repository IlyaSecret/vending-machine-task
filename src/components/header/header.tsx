import { useNavigate } from "react-router-dom";
import "./header.css";

export default function Header() {
    const navigate = useNavigate();
    return (
        <div className="header">
            <h1 className='header__title'>Vending Machine</h1>
            <nav className="header__nav">
                <ul className="header__nav--items">
                    <li className="header__nav--item" onClick={() => {
                        navigate("/")
                    }}>Главная</li>
                    <li className="header__nav--item" onClick={() => navigate("/inventory")}>Инвентарь</li>
                </ul>
            </nav>
        </div>
    )
}