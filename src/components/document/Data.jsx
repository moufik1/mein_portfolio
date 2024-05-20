import Unterlagen1 from "../../assets/Unterlagen1.jpg";
import Unterlagen2 from "../../assets/Unterlagen2.jpg";
import Unterlagen3 from "../../assets/Unterlagen1.jpg";
import Unterlagen4 from "../../assets/Unterlagen4.jpg";
import Unterlagen5 from "../../assets/Unterlagen5.jpg";
import Unterlagen7 from "../../assets/Unterlagen7.jpg";
import Unterlagen8 from "../../assets/Unterlagen8.jpg";
import Abiturezeugnis from "../../assets/Abiturezeugnis.pdf";
import Computernetzwerk_zertifikat from "../../assets/Computernetzwerk_zertifikat.pdf";
import Multimedia_Entwicklung_zertifikat from "../../assets/Multimedia_Entwicklung_zertifikat.pdf";
import Praktikum_Computernetzwerck from "../../assets/Praktikum_Computernetzwerck.pdf";
import Praktikum_Multimedia_Entwicklung from "../../assets/Praktikum_Multimedia_Entwicklung.pdf";
import Zertifkat_B1_ösd from "../../assets/Zertifkat_B1_ösd.pdf";

export const documentsData = [

    {
        id: 1,
        image: Unterlagen1,
        title: 'Abiturezeugnis',
        category: 'abitur',
        file: `${Abiturezeugnis}`,
    },
    {
        id: 2,
        image: Unterlagen2,
        title: 'Computernetzwerk zertifikat',
        category: 'zeugnisse',
        file: `${Computernetzwerk_zertifikat}`,
    },

    {
        id: 3,
        image: Unterlagen4,
        title: 'Multimedia_Entwicklung',
        category: 'zeugnisse',
        file: `${Multimedia_Entwicklung_zertifikat}`,
    },
    {
        id: 4,
        image: Unterlagen5,
        title: 'Praktikum Computernetzwerck',
        category: 'praktikum',
        file: `${Praktikum_Computernetzwerck}`,
    },
    {
        id: 5,
        image: Unterlagen7,
        title: 'Praktikum Multimedia Entwicklung',
        category: 'praktikum',
        file: `${Praktikum_Multimedia_Entwicklung}`,
    },
    {
        id: 6,
        image: Unterlagen8,
        title: 'Zertifkat_B1_ösd',
        category: 'zertifikat',
        file: `${Zertifkat_B1_ösd}`,
    },
];

export const documentsNav = [
    {
        name: 'all'
    },
    {
        name: 'zertifikat'
    },
    {
        name: 'abitur'
    },
    {
        name: 'zeugnisse'
    },
    {
        name: 'praktikum'
    },
];