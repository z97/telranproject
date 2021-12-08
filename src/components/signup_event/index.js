<div>
    <from onSubmit={(e) => {
        e.preventDefault();
    }}>

        <label htmlFor="fname">First Name</label>
        <input type="text" id="fName" name="firstName" placeholder="Your name.."/>
        <label htmlFor="planet">Planet</label>
        <select id="planet" name="planet">{
        </select>
    </from>
</div>