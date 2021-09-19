import React from 'react';
import styled from "styled-components";
import { useHistory } from 'react-router-dom';
// import { loadData, saveData } from '../Utils/LocalStorage';
// import { Button } from 'antd';
// import { PoweroffOutlined } from '@ant-design/icons';
// import { Typography } from 'antd';

const NavbarCont = styled.div`
    background-color: #020252;
    color: #e2e2e2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1%;

    & > .head {
        font-size: 2em;
        font-weight: 600;
    }
`;

const Navbar = () => {

    // const auth = loadData("auth") || false;

    const history = useHistory();

    // const [isLoading, setIsLoading] = React.useState(false);

    const toHome = () => {
        history.push("/list");
    }

    // const handleLogout = () => {
    //     setIsLoading(true);
    //     // saveData("auth", false);
    //     window.location.reload();
    // }

    // const toRegisterPage = () => {

    //     history.push("/register");
    // }

    // const toLoginPage = () => {

    //     history.push("/login");
    // }

    return (
        <NavbarCont>
            
            <div className="head" onClick={toHome}>
                Motor Vehicle Collisions
            </div>
            
            {/* {
                auth ?
                <div className="userActions">
                    <Button type="primary" danger icon={<PoweroffOutlined />} onClick={handleLogout} loading={isLoading}>LOGOUT</Button>
                </div> :
                <div className="actions">
                    <Button type="primary" ghost={false} onClick={toRegisterPage}>REGISTER</Button>
                    <Button type="primary" ghost={false} onClick={toLoginPage}>LOGIN</Button>
                </div>
            } */}

        </NavbarCont>
    )
}

export default Navbar;