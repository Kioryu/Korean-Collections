import contact from '../img/notice/contact.jpg'
import delevery from '../img/notice/delivery.jpg'
import charge from '../img/notice/charge.png'

const type = 1; // Notice Type Index

export const posts = [
    {
        type: type,
        title: 'How to order',
        path: contact,
        description:"How to order!",
        img: charge
    },
    {
        type: type,
        title: 'delivery',
        path: delevery,
        description:"delevery!",
        img: charge
    },
];