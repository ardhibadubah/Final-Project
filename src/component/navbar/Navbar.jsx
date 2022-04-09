import { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/image/LogoSumbawa1.png';
import AuthModal from '../modal/AuthModal';
import './Navbar.css';
import { useSelector } from 'react-redux';

function Navbar() {
  const [show, setShow] = useState(false);

  const { displayName } = useSelector((state) => state.auth.currentUser);

  console.log(displayName);

  const handleOpenModal = () => {
    setShow(true);
  };
  return (
    <>
      <section id='navbarAll'>
        <nav
          className='navbar navbar-expand-lg navbar-dark shadow-sm'
          style={{ backgroundColor: '#3e497a' }}>
          <div className='container'>
            <img src={Logo} alt='' width='100' />
            <button
              className='navbar-toggler'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarNav'
              aria-controls='navbarNav'
              aria-expanded='false'
              aria-label='Toggle navigation'>
              <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarNav'>
              <ul className='navbar-nav ms-3'>
                <li className='nav-item mx-2'>
                  <Link className='nav-link' aria-current='page' to='/'>
                    Home
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/Wisata'>
                    Wisata
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/Kuliner'>
                    Kuliner
                  </Link>
                </li>
                <li className='nav-item mx-2'>
                  <Link className='nav-link' to='/Budaya'>
                    Budaya
                  </Link>
                </li>
              </ul>

              <ul className='navbar-nav ms-auto'>
                <li className='nav-item mx-3'>
                  {displayName ? (
                    <p className='mb-0 text-light'>Hello, {displayName}</p>
                  ) : (
                    <button
                      className='btn text-light'
                      onClick={handleOpenModal}>
                      Sign In
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <AuthModal show={show} setShow={setShow} />
      </section>
    </>
  );
}

export default Navbar;
