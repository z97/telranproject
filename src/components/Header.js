import React from 'react';


class Header extends React.Component {

    render() {
        return (
            <div className='header'>
                <nav className="navbar navbar-light bg-light">
                    <div className="container-fluid">
                        <a className="navbar-brand">Navbar</a>
                        <form className="d-flex input-group w-auto">
                            <input
                                type="search"
                                className="search"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="search-addon"
                            />
                            <span className="input-group-text border-0" id="search-addon">
                            <i className="bi bi-search"/>
                        </span>
                            <span className="datePicker">
                                <label htmlFor="start">Start date:</label>
                                <input type="date" id="start" name="trip-start"
                                       value="2018-07-22"
                                       min="2018-01-01" max="2018-12-31"/>
                                <label htmlFor="start">End date:</label>
                                <input type="date" id="start" name="trip-start"
                                       value="2018-07-22"
                                       min="2018-01-01" max="2018-12-31"/>
                            </span>
                        </form>
                    </div>
                </nav>
                <dateFromPicker/>
            </div>
        )
    }
}

export default Header;