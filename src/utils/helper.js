import { href } from "react-router-dom"
import { Compass, Email, Facebook, Instagram, Phone, Telegram, Twitter, Whatup } from "./icons"

export const Navlinks = [
    { label: 'home', path: '/' },
    { label: 'about us', path: 'about' },
    { label: 'management', path: 'management' },
    { label: 'news & events', path: 'news' },
    { label: 'gallery', path: 'gallery' },
    { label: 'contact us', path: 'contact' },
]

export const capitalizeWords = (str) =>
    str.replace(/\b\w/g, (char) => char.toUpperCase())

export const Footer_Links = [
    {
        title: 'Links',
        links: [
            {

                text: 'Home',
                href: '/',
            },
            {
                text: 'About us',
                href: 'about',
            },
            {
                text: 'Management',
                href: 'management',
            },
            {
                text: 'News & Event',
                href: 'news',
            },
            {
                text: 'Gallery',
                href: 'gallery',
            },
            {
                text: 'Contact us',
                href: 'contact',
            },
        ],
    },
    {
        title: 'Find Us',
        links: [
            {
                icon: Compass,
                text: 'Lorem ipsum dolor siter amet, consectetur adipising elitsed do sum.',
                href: '',
            },
            {
                icon: Email,
                text: 'Loremipilum11@gmail.com',
                href: 'mailto:Loremipilum11@gmail.com',
            },
            {
                icon: Phone,
                text: '+234 805 029 1265+234 907 228 0656',
                href: 'tel:+234 805 029 1265+234 907 228 0656',
            },
        ],
    },
    {
        title: 'Social Contact',
        links: [
            {
                icon: Facebook,
                text: 'Facebook',
                href: 'https://www.facebook.com/',
            },
            {
                icon: Twitter,
                text: 'Twitter',
                href: 'https://twitter.com/?',
            },
            {
                icon: Instagram,
                text: 'Instagram',
                href: 'https://www.instagram.com/',
            },
            {
                icon: Whatup,
                text: 'Whatsapp',
                href: 'https://www.whatsapp.com/',
            },
            {
                icon: Telegram,
                text: 'Telegram',
                href: 'https://web.telegram.org/',
            },
        ],
    },
]