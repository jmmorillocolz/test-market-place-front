export const ItemStyle = {
    item: {
        height: 200,
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        minWidth: 900,
        backgroundColor: '#FFFFFF',
        margin: 'auto',
        borderBottom: '1px solid #CCCCCC'
    } as React.CSSProperties,
    containerImage: {
        display: 'flex',
        width: 175,
        height: 175,
        marginLeft: 15
    } as React.CSSProperties,
    image: {
        width: 175,
        height: 175,
        objectFit: 'scale-down'
    } as React.CSSProperties,
    noImage: {
        opacity: 0.2,
        display: 'flex',
        margin: 'auto',
        width: 175,
        objectFit: 'scale-down'
    } as React.CSSProperties,
    containerInfo: {
        marginLeft: 20,
        width: '100%',
        height: '100%'
    } as React.CSSProperties,
    priceContainer: {
        display: 'flex'
    } as React.CSSProperties,
    price: {
        marginTop: 15,
        marginLeft: 10,
        fontSize: '22px',
        fontWeight: 'bold',
        color: '#444'
    } as React.CSSProperties,
    priceDecimal: {
        display: 'flex',
        width: 30,
        marginTop: 15,
        marginLeft: 3,
        fontSize: '14px'
    } as React.CSSProperties,
    description: {
        marginTop: 15,
        marginLeft: 10,
        maxHeight: 121,
        color: '#444',
        fontSize: '20px'
    } as React.CSSProperties,
    place: {
        color: '#444',
        width: 350,
        alignSelf: 'flex-start',
        marginTop: 15,
        fontSize: '18px'
    } as React.CSSProperties,
    link: {
        color: '#444',
        fontSize: '18px',
        textDecoration: 'none'
    } as React.CSSProperties
};
