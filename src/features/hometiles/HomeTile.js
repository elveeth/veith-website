import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const Hometile = ({ hometile }) => {
    const { image, name } = hometile;
    return (
        <Card>
            <CardImg 
                width='100%'
                src={image}
                alt={name}
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
    )
};

export default Hometile;