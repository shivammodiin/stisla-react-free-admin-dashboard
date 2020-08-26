export const Data = {
    menus: [{
            header: true,
            name: 'Dashboard'
        },
        {
            dropdown: true,
            // active: true,
            name: 'Dashboard',
            icon: 'fas fa-fire',
            children: [{
                    name: 'Ecommerce Dashboard',
                    url: '/',
                    // active: true
                },
                {
                    name: 'General Dashboard',
                    url: '/dashboard/general',
                    active: false
                }
            ]
        },
        {
            header: true,
            name: 'Starter'
        },
        {
            dropdown: true,

            name: 'Layout',
            icon: 'fas fa-columns',
            children: [{
                    name: 'Default Layout',
                    url: '/layout/default'
                }, {
                    name: 'Transparent Sidebar',
                    url: '/layout/transparent-sidebar'

                }, {

                    name: 'Top Navigation',
                    url: '/layout/top-navigation'
                }

            ]
        },
        {
            name: 'Blank Page',
            icon: 'far fa-square',
            url: "/blank"

        },
        {
            dropdown: true,
            name: 'Bootstrap',
            icon: 'fas fa-th',
            children: [{
                    name: 'Alert',
                    url: '/bootstrap/alert'
                },
                {
                    name: 'Badge',
                    url: '/bootstrap/badge'
                },
                {
                    name: 'Breadcrumb',
                    url: '/bootstrap/breadcrumb'
                },
                {
                    name: 'Button',
                    url: '/bootstrap/button'
                },
                {
                    name: 'Card',
                    url: '/bootstrap/card'
                },
                {
                    name: 'Carousel',
                    url: '/bootstrap/carousel'
                },
                {
                    name: 'Collapse',
                    url: '/bootstrap/collapse'
                },
                {
                    name: 'Dropdown',
                    url: '/bootstrap/dropdown'
                },
                {
                    name: 'Form',
                    url: '/bootstrap/form'
                },
                {
                    name: 'List Group',
                    url: '/bootstrap/list-group'
                },
                {
                    name: 'Media Object',
                    url: '/bootstrap/media-object'
                },
                {
                    name: 'Modal',
                    url: '/bootstrap/modal'
                },
                //
                {
                    name: 'Nav',
                    url: '/bootstrap/nav'
                },
                {
                    name: 'Navbar',
                    url: '/bootstrap/navbar'
                },
                {
                    name: 'Pagination',
                    url: '/bootstrap/pagination'
                },
                {
                    name: 'Popover',
                    url: '/bootstrap/popover'
                },
                {
                    name: 'Progress',
                    url: '/bootstrap/Progress'
                },
                {
                    name: 'Table',
                    url: '/bootstrap/table'
                },
                {
                    name: 'Tooltip',
                    url: '/bootstrap/tooltip'
                },
                {
                    name: 'Typography',
                    url: '/bootstrap/typography'
                }
            ]
        },
        {
            header: true,
            name: 'Stisla'
        },
        {
            dropdown: true,
            name: 'Components',
            icon: 'fas fa-th-large',
            children: [{
                    name: 'Article',
                    url: '/component/article'
                },
                {
                    name: 'Avatar',
                    url: '/component/avatar',
                    beep: true
                },
                {
                    name: 'Chat Box',
                    url: '/component/chat-box'
                },
                {
                    name: 'Empty State',
                    url: '/component/empty-state',
                    beep: true
                },
                {
                    name: 'Gallery',
                    url: '/component/gallery'
                },
                {
                    name: 'Hero',
                    url: '/component/hero',
                    beep: true
                },
                {
                    name: 'Multiple Upload',
                    url: '/component/multiple-upload',
                    beep: true
                },
                {
                    name: 'Pricing',
                    url: '/component/pricing'
                },
                {
                    name: 'Statistic',
                    url: '/component/statistic'
                },
                {
                    name: 'Tab',
                    url: '/component/tab'
                },
                {
                    name: 'Table',
                    url: '/component/table'
                },
                {
                    name: 'User',
                    url: '/component/user'
                },
                {
                    name: 'Wizard',
                    url: '/component/wizard',
                    beep: true
                }
            ]
        },
        {
            dropdown: true,
            name: 'Forms',
            icon: 'far fa-file-alt',
            children: [{
                    name: 'Advance Form',
                    url: '/form/advance-form'
                },
                {
                    name: 'Editor',
                    url: '/form/editor'
                },
                {
                    name: 'Validation',
                    url: '/form/validation'
                }
            ]
        },
        {
            dropdown: true,
            name: 'Google Maps',
            icon: 'fas fa-map-marker-alt',
            children: [{
                    name: 'Advance Route',
                    url: '/google-maps/advance-route'
                },
                {
                    name: 'Draggable Marker',
                    url: '/google-maps/draggable-marker'
                },
                {
                    name: 'Geocoding',
                    url: '/google-maps/geocoding'
                },
                {
                    name: 'Geolocation',
                    url: '/google-maps/geolocation'
                },
                {
                    name: 'Marker',
                    url: '/google-maps/marker'
                },
                {
                    name: 'Multiple Marker',
                    url: '/google-maps/multiple-marker'
                },
                {
                    name: 'Route',
                    url: '/google-maps/route'
                },
                {
                    name: 'Simple',
                    url: '/google-maps/simple'
                }
            ]
        },
        {
            dropdown: true,
            name: 'Modules',
            icon: 'fas fa-plug',
            children: [{
                    name: 'Calendar',
                    url: '/module/calendar'
                },
                {
                    name: 'ChartJS',
                    url: '/module/chartjs'
                },
                {
                    name: 'DataTables',
                    url: '/module/datatables'
                },
                {
                    name: 'Flag',
                    url: '/module/flag'
                },
                {
                    name: 'Font Awesome',
                    url: '/module/font-awesome'
                },
                {
                    name: 'Ion icons',
                    url: '/module/ion-icons'
                },
                {
                    name: 'Owl Carousel',
                    url: '/module/owl-carousel'
                },
                {
                    name: 'Sparkline',
                    url: '/module/sparkline'
                },
                {
                    name: 'Sweet Alert',
                    url: '/module/sweetalert'
                },
                {
                    name: 'Toastr',
                    url: '/module/toastr'
                },
                {
                    name: 'Vector Map',
                    url: '/module/vector-map'
                },
                {
                    name: 'Weather Icons',
                    url: '/module/weather-icons'
                }
            ]
        },
        {
            header: true,
            name: 'Pages'
        },
        {
            dropdown: true,
            active: false,
            name: 'Auth',
            icon: 'far fa-user',
            children: [{
                    name: 'Forgot Password',
                    url: '/auth/forget-password',
                    active: false
                },
                {
                    name: 'Login',
                    url: '/auth/login',
                    active: false
                },

                {
                    name: 'Register',
                    url: '/auth/register',
                    active: false
                },
                {
                    name: 'Reset Password',
                    url: '/auth/reset-password',
                    active: false
                }
            ]
        },
        {
            dropdown: true,
            active: false,
            name: 'Errors',
            icon: 'fas fa-exclamation',
            children: [{
                    name: '503',
                    url: '/error/503',
                    active: false
                },
                {
                    name: '403',
                    url: '/error/403',
                    active: false
                },
                {
                    name: '404',
                    url: '/error/404',
                    active: false
                },
                {
                    name: '500',
                    url: '/error/500',
                    active: false
                }
            ]
        },
        {
            dropdown: true,
            active: false,
            name: 'Features',
            icon: 'fas fa-bicycle',
            children: [{
                    name: 'Activities',
                    url: '/feature/activities',
                    active: false
                },
                {
                    name: 'Post Create',
                    url: '/feature/post-create',
                    active: false
                },
                {
                    name: 'Posts',
                    url: '/feature/posts',
                    active: false
                },
                {
                    name: 'Profile',
                    url: '/feature/profile',
                    active: false
                },
                {
                    name: 'Settings',
                    url: '/feature/Settings',
                    active: false
                },
                {
                    name: 'Setting Detail',
                    url: '/feature/setting-detail',
                    active: false
                },
                {
                    name: 'Tickets',
                    url: '/feature/tickets',
                    active: false
                }
            ]
        },
        {
            dropdown: true,
            active: false,
            name: 'Utilities',
            icon: 'fas fa-ellipsis-h',
            children: [{
                    name: 'Contact',
                    url: '/utilities/contact',
                    active: false
                },
                {
                    name: 'Invoice',
                    url: '/utilitie/Invoice',
                    active: false
                },
                {
                    name: 'Subscribe',
                    url: '/utilities/subscribe',
                    active: false
                }
            ]
        },
        {
            dropdown: false,
            active: false,
            name: 'Credits',
            icon: 'fas fa-pencil-ruler',
            url: '/credit',
        }
    ]
};