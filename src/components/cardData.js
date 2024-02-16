
// import images dynamically
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';


    // creat each card content using the array below
const cards = [
        {
            id: 1,
            image: image1,
            title: 'Need a Design',
            content: 'Our proficient design team orchestrates the meticulous installation of high-rise sprinklers, ensuring safety and precision in every detail.',
            bgcolor: '#OOOOFF', // Adjust colors as per your preference,
            tcolor:'black'
        },
        {
            id: 2,
            image: image2,
            title: 'Planning',
            content: 'Strategic installations, ensuring seamless execution and safety compliance at every stage.Taylored to your needs',
            bgcolor: '#FFD700',
            tcolor:'black'
        },
        {
            id: 3,
            image: image3,
            title: 'Need a quote',
            titleColor:'white',
            content: 'We provide competitive quotes,which includes a site visit to understand your requirements, providing great value and  great service .',
            textColor:'white',
            bgcolor: '#000000'
          
            
        }
    ];

export default cards;