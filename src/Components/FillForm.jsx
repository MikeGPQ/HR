export function fillForm() {
    return (
        <div style={{ width: '100%', paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto', maxWidth: '1140px' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginRight: '-15px', marginLeft: '-15px', justifyContent: 'center', marginTop: '3rem' }}>
                <div style={{ flex: '0 0 50%', maxWidth: '50%', paddingRight: '15px', paddingLeft: '15px' }}>
                    <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', minWidth: '0', wordWrap: 'break-word', backgroundColor: '#fff', backgroundClip: 'border-box', border: '1px solid rgba(0,0,0,.125)', borderRadius: '0.25rem' }}>
                        <div style={{ padding: '0.75rem 1.25rem', marginBottom: '0', backgroundColor: '#0d6efd', borderBottom: '1px solid rgba(0,0,0,.125)', color: 'white' }}>
                            <h4 style={{ marginBottom: '0', fontSize: '1.5rem', fontWeight: '500' }}>Login</h4>
                        </div>
                        <div style={{ flex: '1 1 auto', padding: '1.25rem' }}>
                            <form>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="email" style={{ display: 'inline-block', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '400' }}>Email address</label>
                                    <input type="email" style={{ display: 'block', width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5', color: '#212529', backgroundColor: '#fff', backgroundClip: 'padding-box', border: '1px solid #ced4da', borderRadius: '0.25rem', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }} id="email" placeholder="Enter your email" />
                                </div>
                                <div style={{ marginBottom: '1rem' }}>
                                    <label htmlFor="password" style={{ display: 'inline-block', marginBottom: '0.5rem', fontSize: '1rem', fontWeight: '400' }}>Password</label>
                                    <input type="password" style={{ display: 'block', width: '100%', padding: '0.375rem 0.75rem', fontSize: '1rem', fontWeight: '400', lineHeight: '1.5', color: '#212529', backgroundColor: '#fff', backgroundClip: 'padding-box', border: '1px solid #ced4da', borderRadius: '0.25rem', transition: 'border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }} id="password" placeholder="Enter your password" />
                                </div>
                                <div style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center' }}>
                                    <input type="checkbox" style={{ width: '1em', height: '1em', marginTop: '0.25em', verticalAlign: 'top', backgroundColor: '#fff', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'contain', border: '1px solid rgba(0,0,0,.25)', marginRight: '0.5rem' }} id="rememberMe" />
                                    <label style={{ marginBottom: '0', fontSize: '1rem', fontWeight: '400' }} htmlFor="rememberMe">Remember me</label>
                                </div>
                                <button type="submit" style={{ color: '#fff', backgroundColor: '#0d6efd', borderColor: '#0d6efd', display: 'inline-block', fontWeight: '400', lineHeight: '1.5', textAlign: 'center', textDecoration: 'none', verticalAlign: 'middle', cursor: 'pointer', userSelect: 'none', padding: '0.375rem 0.75rem', fontSize: '1rem', borderRadius: '0.25rem', border: '1px solid transparent', transition: 'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out' }}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

