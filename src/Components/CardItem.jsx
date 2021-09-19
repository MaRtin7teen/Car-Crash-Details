import React from 'react';
import styled from "styled-components";
import { Card } from 'antd';
import { useHistory } from 'react-router-dom';

const CardCont = styled.div`

    & > .card {
        filter: contrast(95%);
        
        :hover {
            cursor: pointer;
            filter: contrast(100%);
        }
    }
`;

const CardItem = ({details}) => {

    const history = useHistory();

    const [loading, setLoading] = React.useState(true);

    const toDetailsPage = (id) => {
        history.push(`/list/details/${id}`)
    }

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500);
    })

    return (
        <CardCont>
            <Card className="card" loading={loading} onClick={() => toDetailsPage(details.collision_id)}>
                <div>
                    first car:{details.vehicle_type_code1}
                </div>
                <div>
                    second car: {details.vehicle_type_code2}
                </div>
                <div>
                    crash_date: {details.crash_date}
                </div>
                <div>
                    crash_time: {details.crash_time}
                </div>
            </Card>
        </CardCont>
    )
}

export default CardItem;