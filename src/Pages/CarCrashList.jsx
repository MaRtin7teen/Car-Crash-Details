import React from 'react';
import axios from "axios";
import styled from "styled-components";
import Filter from '../Components/Filter';
import CardItem from '../Components/CardItem';
import Paginate from '../Components/Paginate';

const ListContainer = styled.div`

    & > .filters {
        text-align: center;
        margin: 2%;
    }

    & > .cardCont {
        padding: 5%;
        display: grid;
        grid-template-columns: 33.33% 33.33% 33.33%;
        grid-gap: 2%;
    }

    & > .paginate {
        margin: 2%;
        display: flex;
        justify-content: center;
    }
`;

const CarCrashList = () => {

    const [fullList, setFullList] = React.useState([]);
    const [list, setList] = React.useState([]);

    const [page, setPage] = React.useState(1);

    const [totalPages, setTotalPages] = React.useState(0);
    const [start, setStart] = React.useState(0);
    const [end, setEnd] = React.useState(5);

    const [errorMsg, setErrorMsg] = React.useState("");

    const changePage = (value) => {
        setStart((value * 5) - 6)
        setEnd((value * 5));
        setPage(value);
    }

    console.log(start, end);

    const getList = () => {

            axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?$limit=5`)
                .then((res) => {
                    setList(res.data);
                    console.log(res.data);
                })
                .catch((error) => {
                    setErrorMsg(error.message);
                    // console.log(error.message);
                });
    }

    const getAllList = () => {
        axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json`)
                .then((res) => {
                    setFullList(res.data);
                    setTotalPages(res.data.length);
                    console.log(res.data.length);
                })
                .catch((error) => {
                    // setErrorMsg(error.message);
                    console.log(error.message);
                });
    }

    React.useEffect(() => {
        getList();
        getAllList();
        // eslint-disable-next-line
    }, []);

    return (
        <ListContainer>

            <div className="filters">
                <Filter />
            </div>

            <div className="cardCont">
                {
                    list.length ? 
                    list.slice(start, end).map(details => <CardItem details={details} key={details.collision_id} />) :
                    <div>
                        Error: {errorMsg}
                    </div>
                }
            </div>

            <div className="paginate">
                <Paginate totalPages={totalPages} page={page} changePage={changePage} />    
            </div>

        </ListContainer>
    )
}

export default CarCrashList;