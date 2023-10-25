import { Viaje } from '../models/Viaje.js';
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => { // req lo que se resive en el archivo : res lo que express responde

    try {
        const [ viajes, testimoniales ] = await Promise.all([
            Viaje.findAll({ limit: 3 }),
            Testimonial.findAll({ limit: 3 })
        ]);

        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes,
            testimoniales,
        });
    } catch (error) {
        console.log(error);
    }
};

const paginaNosotros = (req, res) => { // req lo que se resive en el archivo : res lo que express responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
};

const paginaViajes = async (req, res) => { // req lo que se resive en el archivo : res lo que express responde
    //Consultar BD
    const viajes = await Viaje.findAll();

    console.log(viajes);

    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes,
    });
};

const paginaTestimoniales = async (req, res) => { // req lo que se resive en el archivo : res lo que express responde
    
    try {
        const testimoniales = await Testimonial.findAll();
        
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
};

// agregando el slug a la url
const paginaDetalleViaje = async (req, res) => {
    // resive el nombre del slug
    const { slug } = req.params;

    try {
        // de la tabla trae los datos solo del slug que mandamos
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: "Información Viaje",
            viaje,
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje,
}