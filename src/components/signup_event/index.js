import SmallEvent from "../SmallEvent";

<div>
    <h1>sign up and pay</h1>
    <SmallEvent/>
    <form onSubmit={(e) => {
        e.preventDefault();
    }}>
        <div className="mb-3">
            <label htmlFor="name" className="form-label">Name</label>
            <input type="text" className="form-control" id="nameInput" aria-describedby="name">
            </input>
        </div>
        <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
            <input type="text" className="form-control" id="inputphoneNumber">
            </input>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label">Email</label>
            <input type="text" className="form-control" id="inputEmail">
            </input>
        </div>
        <div className="mb-3">
            <label htmlFor="count" className="form-label">Email</label>
            <input type="number" className="form-control" id="inputCount">
            </input>
        </div>
        <p>Attention. Be careful when filling out ... </p>
        <button type="submit" className="btn btn-primary">Payment</button>
    </form>
</div>

