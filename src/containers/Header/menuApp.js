export const adminMenu = [
    { //Quản lí người dùng
        name: 'menu.admin.manage-user', menus: [
            {
                name: 'menu.admin.crud', link: '/system/user-manage'
            },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux'
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/user-doctor'
                // subMenus: [
                //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
                //     { name: 'menu.admin.manage-admin', link: '/system/user-redux' },
                // ]
            },
            { name: 'menu.admin.manage-admin', link: '/system/user-admin' },

        ]
    },
    { //Quản lí phòng khám
        name: 'menu.admin.manage-clinic', link: '/system/manage-clinic'

    },
    { //Quản lí chuyên khoa
        name: 'menu.admin.manage-specialty', link: '/system/manage-specialty'

    },
    { //Quản lí cẩm nang
        name: 'menu.admin.manage-handbook', link: '/system/manage-handbook'

    }
];