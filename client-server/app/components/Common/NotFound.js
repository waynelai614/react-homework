import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <section className="hero is-fullheight is-warning is-bold">
    <div className="hero-body">
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-8 is-offset-2 has-text-centered">
            <span
              className="icon"
              style={{
                width: '12rem',
                height: '12rem'
              }}
            >
              <i className="fa fa-frown-o" style={{fontSize: 200}}></i>
            </span>
            <h1 className="title" style={{fontSize: '4rem'}}>
              404
            </h1>
            <h2 className="subtitle" style={{fontSize: '2rem'}}>
              Page Not found
            </h2>
            <Link to="/" className="button is-warning is-inverted is-outlined">
              Home Page
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default NotFound;
