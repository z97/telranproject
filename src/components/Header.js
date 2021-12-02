import React from 'react';

const Header = () => {
    return(
        <div className='header'>
            <form action="/action_page.php">
                <label htmlFor="search">Search</label>
                <input type="text" id="search" name="search"><br><br>
                        <input type="submit" value="Submit">
            </form>
        </div>
    )
}

export default Header;