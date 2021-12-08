import SmallEvent from "../SmallEvent";

<div>
    <h1>sign up and pay</h1>
    <SmallEvent/>
    <form onSubmit={(e) => {
        e.preventDefault();
    }}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="name" className="form-control" id="nameInput" aria-describedby="name">
            </input>
        </div>
        <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="password" className="form-control" id="exampleInputPassword1"></input>
        </div>
        <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1">
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label></input>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
    </form>
</div>

