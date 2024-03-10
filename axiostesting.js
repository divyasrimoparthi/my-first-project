import React from "react";
import Axios from "axios";

function callAxios(){
    Axios.get('http://localhost:5000/klef/cse')
        .then(res => getData(res.data))
        .catch(err => console.log(console.err));
}

function getData(data){
    alert(data);
}

function AxiosTesting(){
    return(
        <div>
            <h3>Axios Demo</h3>
            <button onClick={callAxios}>Submit</button>
        </div>
    );
}

export default AxiosTesting;