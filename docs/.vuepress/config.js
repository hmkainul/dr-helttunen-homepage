module.exports = {
    base: '/~kjhelttu/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    title: "Kaisa Helttunen's Old Home Page",
    description: 'Academy Research Fellow at University of Jyväskylä. Macrocyclic Receptors for Selective Anion Extraction project aims to offer pioneering solutions for the selective binding of biologically and technologically important anions.',
    themeConfig: {
        search: false,
        sidebar: 'auto',
        nav: [
            { text: 'Research Group', link: 'https://www.jyu.fi/en/research-groups/organic-chemistry-for-circular-economy' },
            { text: 'MAREXT project', link: '/marext/' },
            { text: 'Teaching', link: '/teaching/' },
            { text: 'Events', link: '/events/' },
            { text: 'Publications', link: '/publications/' },
            { text: 'Curriculum Vitae', link: '/curriculum-vitae/' },
        ]
    }
}
