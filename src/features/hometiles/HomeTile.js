import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const HomeTile = ({ hometile }) => {
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

export default HomeTile;