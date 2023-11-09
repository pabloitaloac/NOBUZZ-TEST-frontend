import React from 'react';
import "./Sidebar.css"
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';


import { currentUser, login, logout } from '../redux/actions';


function Sidebar() {

  const dispatch = useDispatch()

const handleLogin =()=>{
  console.log('loging');
  // dispatch(login({id:'1'}))
  login({id:'1'})
}

    return ( 

      <>
      {currentUser?.id?
        <div id="sidebar">
            <h1>Logout</h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <button type="submit">Buscar</button>
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Your Name</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Your Friend</a>
              </li>
            </ul>
          </nav>
        </div>
:
        <div id="sidebar">
            <h1 onClick={handleLogin}>Login</h1>
          <div>
          </div>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Home</a>
              </li>
            </ul>
          </nav>
        </div>
      }
      </>

     );
}


const mapDispatchToProps = {
  currentUser, login, logout
};


export default connect(currentUser,mapDispatchToProps)(Sidebar);