import { useState } from "react";

function InputExample() {
    const[form, setForm] = useState({name:"", surname:""});

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value } );
    };

    return(
        <div>
            <hr/>
            <br/><br/>
            Name <br/>
            <input name= "name" value={form.name} onChange = {onChangeInput}></input>

            <br/><br/>

            Surname <br/>
            <input name= "surname" value={form.surname} onChange = {onChangeInput}></input>
            <br/><br/>
            {form.name} {form.surname}
            <br/><br/>


        </div>
    );

}

export default InputExample;