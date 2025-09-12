import { href } from "react-router-dom"
import { Compass, Email, Facebook, Instagram, Phone, Telegram, Twitter, Whatup } from "./icons"
import img1activity from '../assets/webp/ouractivity-img1.webp'
import img2activity from '../assets/webp/ouractivity-img2.webp'
import img1blog from '../assets/webp/blog-img1.webp'
import img2blog from '../assets/webp/blog-img2.webp'

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

export const Our_Activity = [
    {
        img: img1activity,
        title: 'Art & Creativity',
        description: 'Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.',
    },
    {
        img: img2activity,
        title: 'Sport & Entertainment',
        description: 'Art is the expression or application of human creative skill and imagination, typically in a visual form such as painting or sculpture, producing works to be appreciated primarily for their beauty or emotional power.',
    },
]

export const Blog = [
    img1blog,
    img2blog,
]