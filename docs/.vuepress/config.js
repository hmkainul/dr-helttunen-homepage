module.exports = {
    base: '/~kjhelttu/',
    head: [
        ['link', { rel: 'icon', href: '/logo.png' }]
    ],
    title: 'Dr Kaisa Helttunen',
    description: 'Academy Research Fellow at University of Jyväskylä. Macrocyclic Receptors for Selective Anion Extraction project aims to offer pioneering solutions for the selective binding of biologically and technologically important anions.',
    themeConfig: {
        search: false,
        sidebar: 'auto',
        nav: [
            { text: 'Project', link: '/marext/' },
            { text: 'Publications', link: '/publications/'},
            { text: 'Curriculum Vitae', link: '/curriculum-vitae/'},
        ]
    }
}
