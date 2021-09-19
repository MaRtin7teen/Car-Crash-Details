import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import { useParams } from 'react-router-dom';

const Details = styled.div`
    padding: 2% 5%;

    & .details {
        border: 1px solid gray;
        display: grid;
        grid-template-columns: 40% 60%;

        & > .left {
            border: 1px solid gray;

            & > div {
                border: 1px solid lightgray;
                padding: 0 3%;
                font-weight: 700;
            }
        }

        & > .right {
            border: 1px solid gray;

            & > div {
                border: 1px solid lightgray;
                padding: 0 3%;
            }
        }
    }
`;

const CrashDetails = () => {

    const params = useParams();

    const itemId = params.id;

    const [loading, setLoading] = React.useState(false);

    const [details, setDetails] = React.useState([]);

    React.useEffect(() => {
        setLoading(true);

        axios.get(`https://data.cityofnewyork.us/resource/h9gi-nx95.json?collision_id=${itemId}`)
            .then (res => {
                setDetails(res.data[0]);
                console.log(res.data);
            })
            .catch (error => {
                console.log(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
        // eslint-disable-next-line
    }, []);

    return (
        <Details>
            <h3>CRASH DETAILS</h3>

            {
                loading ?
                <>loading</> :
                details.crash_date ?
                <div className="details">
                    <div className="left">
                        {
                            Object.keys(details).filter(ele => ele !== "location").map(ele => <div>{ele}</div>)
                        }
                    </div>
                    <div className="right">
                        {
                            Object.values(details).filter(ele => typeof(ele) !== "object").map(ele => <div>{ele}</div>)
                        }
                    </div>
                </div> :
                <div>
                    Details not found for id - "{itemId}"
                </div>
            }
        </Details>
    )
}

export default CrashDetails;