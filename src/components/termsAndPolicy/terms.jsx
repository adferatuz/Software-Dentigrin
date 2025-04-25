import './styles.css'

const Terms = () => {
    return (
        <main className='modal-terms'>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Términos y condiciones de uso</h2>
                <p className='modal-terms-description'>Estos términos y condiciones regulan el uso de la aplicación Dentigrin. Al utilizar la aplicación, aceptas cumplir con estos términos.</p>
                <ul className='modal-terms-list'>
                    <li>Uso de la aplicación</li>
                    <li>Protección de datos personales</li>
                    <li>Responsabilidad del usuario</li>
                    <li>Modificaciones</li>
                    <li>Aceptación</li>
                </ul>
            </section>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Uso de la aplicación</h2>
                <p className='modal-terms-description'>Dentigrin permite a los usuarios agendar, consultar y administrar citas odontológicas de manera segura. El usuario es responsable de la veracidad de los datos que registre en la plataforma.</p>
            </section>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Protección de datos personales</h2>
                <p className='modal-terms-description'>Dentigrin recopila datos sensibles como nombres, datos de contacto e información relacionada con citas médicas. Nos comprometemos a proteger tu información siguiendo las mejores prácticas de seguridad. Tus datos serán utilizados exclusivamente para la gestión de citas y comunicación relacionada.</p>
            </section>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Responsabilidad del usuario</h2>
                <p className='modal-terms-description'>El usuario debe mantener la confidencialidad de su contraseña y su cuenta. Cualquier actividad realizada desde la cuenta será responsabilidad del usuario.</p>
            </section>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Modificaciones</h2>
                <p className='modal-terms-description'>Dentigrin se reserva el derecho de actualizar estos términos y condiciones en cualquier momento. Te notificaremos sobre cambios relevantes a través de la aplicación o el correo registrado.</p>
            </section>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Aceptación</h2>
                <p className='modal-terms-description'>Al crear una cuenta y utilizar Dentigrin, aceptas que has leído y estás de acuerdo con estos términos y condiciones.</p>
            </section>
            <section className='modal-terms-content'>
                <h2 className='modal-terms-title'>Contacto</h2>
                <p className='modal-terms-description'>Si tienes preguntas o inquietudes sobre estos términos, contáctanos a través de la aplicación o envíanos un correo a <strong>teamsupportdentigrin@example.com</strong></p>
            </section>


        </main>
    )
}

export default Terms;