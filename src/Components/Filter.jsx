import React from 'react';
import { DatePicker } from 'antd';
import styled from "styled-components";

const FilterCont = styled.div`

`;

const Filter = () => {
    const [date, setDate] = React.useState("");

    return (
        <FilterCont>
            <DatePicker size={"Small"} picker="range" />
        </FilterCont>
    )
}

export default Filter;