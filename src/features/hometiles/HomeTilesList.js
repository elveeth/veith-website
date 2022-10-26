import { Col, Row } from 'reactstrap';
import Hometile from './Hometile';
import { selectAllHometiles } from './hometilesSlice';

const HometilesList = () => {
    const hometiles = selectAllHometiles();
    return (
        <Row className='ms-auto'>
            {hometiles.map((hometile) => {
                return (
                    <Col
                        md='5'
                        className='m-4'
                        key={hometile.id}
                    >
                        <Hometile hometile={hometile} />
                    </Col>

                )
            })}
        </Row>
    )
};

export default HometilesList;