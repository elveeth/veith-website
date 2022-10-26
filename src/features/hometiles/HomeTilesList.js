import { Col, Row } from 'reactstrap';
import HomeTile from './HomeTile';
import { selectAllHometiles } from './hometilesSlice';

const HomeTilesList = () => {
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
                        <HomeTile hometile={hometile} />
                    </Col>

                )
            })}
        </Row>
    )
};

export default HomeTilesList;