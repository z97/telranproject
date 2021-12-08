import React from 'react';

const Header = () => {
    return (
        <div className='header'>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand">Navbar</a>
                    <form className="d-flex input-group w-auto">
                        <input
                            type="search"
                            className="form-control rounded"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="search-addon"
                        />
                        <span className="input-group-text border-0" id="search-addon">
                            <i className="bi bi-search"/>
                        </span>
                        <label htmlFor="start">Start date:</label>

                        <input type="date" id="start" name="trip-start"
                               value="2018-07-22"
                               min="2018-01-01" max="2018-12-31"/>
                    </form>
                </div>
            </nav>
            <dateFromPicker/>
        </div>
    )
}

export default Header;