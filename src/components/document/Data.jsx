import Unterlagen1 from "../../assets/Unterlagen1.jpg";
import Unterlagen2 from "../../assets/Unterlagen2.jpg";
import Unterlagen3 from "../../assets/Unterlagen1.jpg";
import Unterlagen4 from "../../assets/Unterlagen4.jpg";
import Unterlagen5 from "../../assets/Unterlagen5.jpg";
import Unterlagen7 from "../../assets/Unterlagen7.jpg";
import Abiturezeugnis from "../../assets/Abiturezeugnis.pdf";
import Computernetzwerk_zertifikat from "../../assets/Computernetzwerk_zertifikat.pdf";
import Multimedia_Entwicklung_zertifikat from "../../assets/Multimedia_Entwicklung_zertifikat.pdf";
import Praktikum_Computernetzwerck from "../../assets/Praktikum_Computernetzwerck.pdf";
import Praktikum_Multimedia_Entwicklung from "../../assets/Praktikum_Multimedia_Entwicklung.pdf";

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
        category: 'zertifikate',
        file: `${Computernetzwerk_zertifikat}`,
    },

    {
        id: 3,
        image: Unterlagen4,
        title: 'Multimedia_Entwicklung',
        category: 'zertifikate',
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
];

export const documentsNav = [
    {
        name: 'all'
    },
    {
        name: 'lebenslauf'
    },
    {
        name: 'abitur'
    },
    {
        name: 'zertifikate'
    },
    {
        name: 'praktikum'
    },
];