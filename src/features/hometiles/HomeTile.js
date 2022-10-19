import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const HomeTile = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.hometile.image}
                alt={props.hometile.name}
            />
            <CardImgOverlay>
                <CardTitle>{props.hometile.name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
};

export default HomeTile;