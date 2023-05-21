export const Inicio = () => {
    return (
        <div
            className="store-info"
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundImage: 'url(fondo.jpg)',
                height: '80vh', /* Ajusta la altura del contenedor a la altura de la ventana */
                backgroundSize: 'cover', /* Ajusta la imagen de fondo para que cubra todo el contenedor */
            }}
        >
            <div style={{ flex: 1, margin: '20px', textAlign: 'left' }}>
                <h1 style={{ margin: 0 }}>Tienda DIEGO'S</h1>
                <h2>¡Bienvenido a nuestra tienda de palyeras para equipos de fútbol!</h2>
                <p style={{ margin: '10px 0' }}>En nuestra tienda, nos apasiona el fútbol y entendemos la importancia de lucir bien en la cancha. Por eso, ofrecemos una amplia selección de palyeras de alta calidad para equipos de fútbol.</p>
            </div>
            <div style={{ flex: 1, margin: '20px' }}>
                <img src="atlas.jpeg" alt="Store Logo" style={{ maxWidth: '50%', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }} />
            </div>
        </div>
    );
}


