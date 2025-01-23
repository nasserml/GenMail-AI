

import { Columns2, Facebook, Frame, Framer, Image, Link2, PanelTop, Projector, RectangleEllipsis, SquareSplitVertical, Text, TextSelectionIcon, Twitter } from "lucide-react";


export default [
    {
        icon: RectangleEllipsis,
        label: 'Przycisk',
        type: 'Button',
        content: 'Przykładowy przycisk',
        url: '#',
        style: {
            textAlign: 'center',
            backgroundColor: '#007bff',
            color: '#ffffff',
            padding: '10px',
            width: 'auto',
            fontSize: '16px',
            borderRadius: '0px',
            fontWeight: 'normal',
            objectFit: 'contain',

        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
        }
    },
    {
        icon: TextSelectionIcon,
        type: 'Text',
        label: 'Tekst',
        textarea: 'Przykładowy tekst',
        style: {
            backgroundColor: '#fff',
            color: '#000000',
            padding: '10px',
            textAlign: 'center',
            fontSize: '22px',
            fontWeight: 'normal',
            textTransform: 'uppercase'
        },
        outerStyle: {
            backgroundColor: '#fff',
            width: '100%'
        }
    },
    {
        icon: Image,
        type: 'Image',
        label: 'Obrazek',
        imageUrl: "/image.png",
        alt: 'Image',
        url: '#',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: '50%',
            width: '70%',
            margin: '0px',
            borderRadius: '0px'
        },
        outerStyle: {
            display: 'flex',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff'
        }
    },
    {
        icon: Frame,
        type: 'Logo',
        label: 'Logo',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: '30%',
            width: '30%',
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%'
        }
    },
    {
        icon: PanelTop,
        type: 'LogoHeader',
        label: 'Logo menu',
        imageUrl: "/logo.svg",
        alt: 'logo',
        url: '#',
        style: {
            backgroundColor: '#ffffff',
            padding: '10px',
            height: '40%',
            width: '40%',
        },
        outerStyle: {
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            backgroundColor: '#fff',
            width: '100%'
        }
    },
    {
        icon: SquareSplitVertical,
        type: 'Divider',
        label: 'Divider',
        content: '',
        style: {
            color: '#000000',
            padding: '10px',
            width: '100%'
        }
    },
    {
        type: 'SocialIcons',
        icon: Twitter,
        label: 'Social media',
        socialIcons: [
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
                url: ''
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
                url: ''
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
                url: ''
            }
        ],
        options: [
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/2111/2111463.png',
                url: ''
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968852.png',
                url: ''
            },
            {
                icon: 'https://cdn-icons-png.flaticon.com/128/5968/5968756.png',
                url: ''
            }
        ],
        style: {
            width: 40,
            height: 40
        },
        outerStyle: {
            display: 'flex',
            gap: 15,

        }



    }

]