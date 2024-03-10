import React from 'react';
import {callApiFormData, errorResponse, getSession} from './main';
import './myprofile.css'
import Axios from 'axios';


export function userInfo(){
    var url = "http://localhost:5000/myprofile/userinfo"
    //var data = JSON.stringify({
      //  emailid : getSession("sid")
    //});
    //callApi("POST", url, data, userData, errorResponse);
    Axios.post(url, {emailid: getSession("sid")})
        .then(res => userData(res.data))
        .catch(err => errorResponse(err));
}

export function userData(res){
    var data = res;
    // var data = JSON.parse(res);
    var L1 = document.getElementById("L1");
    var L2 = document.getElementById("L2");
    var L3 = document.getElementById("L3");
    var L4 = document.getElementById("L4");
    var IM1=document.getElementById("IM1");
    //L1.innerText = data[0].firstname;
    L1.innerHTML = <b style='color:red'>${data[0].firstname}</b> 
    L2.innerText = data[0].lastname;
    L3.innerText = data[0].contactno;
    L4.innerText = data[0].emailid;
    IM1.src='require./images/photo'+data[0].imgurl;
}

export function uploadPhoto(){
    var FU1 = document.getElementById('FU1');
    var url = "http://localhost:5000/uploaddp";
    var data = new FormData();
    data.append("fname", getSession("SID"));
    data.append("myfile", FU1.files[0]);
    callApiFormData("POST", url, data, uploadSuccess, errorResponse);
}

export function uploadSuccess(res){
    var data = JSON.parse(res);
    alert(data);
}

class MyProfile extends React.Component
{
    constructor(){
        super();
        this.sid = getSession("sid");
        if(this.sid === "")
            window.location.replace("/");
        userInfo();
    }
    render()
    {
        return(
            <div className="fullheight">
                <table className='tableStyle'>
                    <tr>
                        <td colSpan={2}><h3>User Information</h3></td>
                    </tr><br></br>
                    <tr>
                        <td className='firstcolumn'>First Name</td>
                        <td><label id='L1' ></label></td>
                    </tr><br></br>
                    <tr>
                        <td className='firstcolumn'>Last Name</td>
                        <td><label id='L2' ></label></td>
                    </tr><br></br>
                    <tr>
                        <td className='firstcolumn'>Contact No.</td>
                        <td><label id='L3' ></label></td>
                    </tr><br></br>
                    <tr>
                        <td className='firstcolumn'>Email ID</td>
                        <td><label id='L4' ></label></td>
                    </tr><br></br>
                    <tr>
                        <td className='firstcolumn'>Upload photo</td>
                        <td><input type='file' id='FU1' accept='image/jpeg' onChange={uploadPhoto}/></td>
                    </tr>
                    <tr>
                        <td className='firstcolumn'>Photo</td>
                        <td><img src='#' alt='' id='IM1' className='imgstyle'/></td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default MyProfile;