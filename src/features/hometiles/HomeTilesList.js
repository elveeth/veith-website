import { HOMETILES } from '../../app/shared/HOMETILES';
import { Col, Row } from 'reactstrap';
import HomeTile from './HomeTile';

const HomeTilesList = () => {
    return (
        <Row className='ms-auto'>
            {HOMETILES.map((hometile) => {
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