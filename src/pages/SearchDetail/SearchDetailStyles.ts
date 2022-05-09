export const SearchDetailStyles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        width: '70%',
        minWidth: 1150,
        backgroundColor: '#FFFFFF',
        margin: 'auto',
        borderBottom: '1px solid #CCCCCC',
        flexWrap: 'nowrap',
        flexDirection: 'row',
        flexFlow: 'wrap'
    } as React.CSSProperties,
    breadcrumb: {
        border: '0px solid black',
        height: 30,
        alignItems: 'center',
        width: '70%',
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 5,
        color: '#333'
    } as React.CSSProperties,
    containerImage: {
        border: '1px solid rgb(204, 204, 204)',
        width: '70%',
        display: 'flex',
        height: 500,
        marginLeft: 25,
        marginTop: 25
    } as React.CSSProperties,
    image: {
        width: '100%',
        height: 500,
        objectFit: 'scale-down'
    } as React.CSSProperties,
    noImage: {
        margin: 'auto',
        height: 200,
        opacity: 0.2,
        display: 'flex',
        objectFit: 'contain'
    } as React.CSSProperties,
    infoProduct: {
        border: '0px solid',
        marginLeft: 25,
        width: 290,
        height: 500,
        objectFit: 'contain',
        marginTop: 25
    } as React.CSSProperties,
    description: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 25,
        marginBottom: 25,
        width: '100%',
        minHeight: 300
    } as React.CSSProperties,
    descriptionTitle: {
        fontSize: 26
    } as React.CSSProperties,
    descriptionText: {
        fontSize: 22,
        marginTop: 25,
        whiteSpace: 'pre-line',
        textAlign: 'justify'
    } as React.CSSProperties,
    condition: {
        fontSize: 18,
        marginBottom: 5
    } as React.CSSProperties,
    infoProductTitle: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 0
    } as React.CSSProperties,
    infoProductPrice: {
        display: 'flex',
        marginTop: 20,
        marginBottom: 10
    } as React.CSSProperties,
    amount: {
        fontSize: 42
    } as React.CSSProperties,
    amountDecimals: {
        width: 30,
        fontSize: 18,
        marginTop: 8,
        marginLeft: 2
    } as React.CSSProperties,
    freeShipping: {
        textAlign: 'center',
        marginTop: 20,
        color: 'green',
        fontSize: 16,
        fontWeight: 'bold'
    } as React.CSSProperties,
    button: {
        border: '0px solid',
        marginTop: 15
    } as React.CSSProperties
};
