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