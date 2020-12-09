var app = new Vue({
    el: '#root',
    data: {
        indiceMenuSelezionato  : 0,
        navMenu: [
            'Home',
            'Services',
            'Skills',
            'Partners',
            'Blog'
        ],
        sponsorItems: [
            'img/logo-1.png',
            'img/logo-2.png',
            'img/logo-3.png',
            'img/logo-4.png',
            'img/logo-5.png'
        ],
        footerMenu: {
            about: [
                'The Company',
                'Institutional',
                'Social & Events',
                'Innovation',
                'Environment',
                'Technology',
            ],
            transport: [
                'Industrialized',
                'Chemicals',
                'Packaged Liquids',
                'Construction',
                'Laminated Wood',
                'And others',
            ],
            support: [
                'Responsibility',
                'Terms of Use',
                'About Cookies',
                'Privacy Policy',
                'Accessibility',
                'Information',
            ]
        },
        isActive: false
    },
    methods: {
        isChanged(indice) {
            //this.isActive = !this.isActive;
            this.indiceMenuSelezionato = indice;
        }
    }

});
