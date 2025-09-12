import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={`${open ? "color-menu" : ""}`}>
      <nav>
        <h1 className="logo">FARES</h1>
        
        {/* Menú */}
        <ul>
          <li className="list-unstyled">
            <button
              className="btn mt-2"
              onClick={() => setOpen(!open)}
            >
              <i className="bi bi-list menu-icon"></i>
            </button>

            {/* Dropdown */}
            {open && (
              <ul className="menu-desplegado">
                <li>CONOCENOS</li>
                <li>NUESTROS MINISTERIOS</li>
                <li>PROXIMOS EVENTOS</li>
                <li>PREGUNTAS</li>
                <li>CONTRIBUIR</li>
                <li>CONTACTANOS</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
