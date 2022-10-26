import { Container, Row, Col, Button } from 'reactstrap';
import HometileDetail from '../features/hometiles/HometileDetail';
import HometilesList from '../features/hometiles/HometilesList';
import { selectRandomHometile } from '../features/hometiles/hometilesSlice';

const HometilesDirectoryPage = () => {
    let selectedHometile = selectRandomHometile();

    const toggleHometile = () => {
        selectedHometile = selectRandomHometile();
        console.log(selectedHometile);
    }

    return (
        <Container>
            <Button onClick={() => toggleHometile()}>
                Select Random Tile
            </Button>
            <Row>
                <Col sm='5' md='7'>
                    <HometilesList />
                </Col>
                <Col sm='7' md='5'>
                    <HometileDetail hometile={selectedHometile} />
                </Col>
            </Row>
        </Container>
    )
};

export default HometilesDirectoryPage;