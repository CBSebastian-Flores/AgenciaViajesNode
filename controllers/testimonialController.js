import { Testimonial } from '../models/Testimoniales.js';

const guardarTestimonial = async (req, res) => {

    // Validar si los campos estan vacios
    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === '') {
        errores.push({mensaje: 'El nombre es obligatorio'});
    }
    if(correo.trim() === '') {
        errores.push({mensaje: 'El correo es obligatorio'});
    }
    if(mensaje.trim() === '') {
        errores.push({mensaje: 'El mensaje no puede ir vacio'});
    }

    if(errores.length > 0){

        // Consultar Testimoniales Existentes
        const testimoniales = await Testimonial.findAll();
        // Mostrar la vista de errores
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales,
        });
    } else {
        // Almacenamiento en la base de datos
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje,
            })

            res.redirect('testimoniales');
            
        } catch (error) {
            console.log( error );
        }
    }
}

export {
    guardarTestimonial,
}