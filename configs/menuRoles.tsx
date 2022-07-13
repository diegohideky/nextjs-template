import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons'
import { RolesAliases } from '../enums/roles'
import { TRole } from '../types/roles'

export const navMenuItems = [
  {
    key: 'mail',
    title: 'Mail',
    icon: <MailOutlined />,
    render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
  },
  {
    key: 'Submenu',
    title: 'Navigation Submenu',
    icon: <SettingOutlined />,
    render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
    subItems: [
      {
        key: 'two',
        title: 'Navigation Two',
        icon: <AppstoreOutlined />,
        render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
      },
      {
        key: 'three',
        title: 'Navigation Three',
        icon: <AppstoreOutlined />,
        render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
      },
      {
        render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
        key: 'Item Group',
        title: 'Item Group',
        icon: <AppstoreOutlined />,
        groupItem: {
          items: [
            {
              key: 'four',
              title: 'Navigation Four',
              icon: <AppstoreOutlined />,
              render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
            },
            {
              key: 'five',
              title: 'Navigation Five',
              icon: <AppstoreOutlined />,
              render: (role: TRole) => Object.keys(RolesAliases).includes(role?.alias),
            },
          ],
        },
      },
    ],
  },
]
