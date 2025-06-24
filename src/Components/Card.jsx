export function Card({ image, name, mail, puesto }) {
    return (
        <div style={{ width: '18rem', borderRadius: '0.25rem', backgroundColor: '#4CAF50' }}>
            <div style={{ padding: '1.25rem', textAlign: 'center' }}>

                
                <img src={image || "https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"} style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover', marginBottom: '1rem' }} />
                
                {name && (
                    <h3 style={{ marginBottom: '0.5rem', fontSize: '1.25rem', fontWeight: '500', lineHeight: '1.2', color: "#FFFFFF" }}>
                        {name}
                    </h3>
                )}

                {mail && (
                    <p style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                        Mail: {mail}
                    </p>
                )}

                {puesto && (
                    <p style={{ color: '#FFFFFF', marginBottom: '1rem' }}>
                        Puesto: {puesto}
                    </p>
                )}

            </div>
        </div>
    );
}