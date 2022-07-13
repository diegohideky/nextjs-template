import { useContext, useState } from 'react'
import { Button, Menu } from 'antd'
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
  QuestionOutlined,
} from '@ant-design/icons'
import styles from './MainMenu.module.scss'

import type { MenuProps } from 'antd'
import { UserContext } from '../../contexts/UserContext'

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem
}

const verticalItems: MenuItem[] = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('Option 3', '3', <ContainerOutlined />),

  getItem('Navigation One', 'sub1', <MailOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Option 7', '7'),
    getItem('Option 8', '8'),
  ]),

  getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),

    getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  ]),
]

const horizontalItems: MenuItem[] = [
  getItem('Navigation One', '1', <MailOutlined />),
  getItem('', 'sub2', <UserOutlined />, [
    getItem('Profile', 'profile', <UserOutlined />),
    getItem('Settings', 'settings', <SettingOutlined />),
    getItem('Help', 'help', null, [getItem('FAQ', 'faq', <QuestionOutlined />)]),
    getItem('Sign out', 'signout', <LogoutOutlined />),
  ]),
]

export type MainMenuProps = {
  children: React.ReactNode
}

const MainMenu: React.FC<MainMenuProps> = ({ children }) => {
  const { user } = useContext(UserContext)

  const [collapsed, setCollapsed] = useState(false)

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={styles.mainMenu}>
      <div className={styles.verticalMenu}>
        <Button className={styles['toggle-btn']} type="primary" onClick={toggleCollapsed}>
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <div className={styles['menu-area']}>
          <div className={collapsed ? styles['sider-collepsed'] : styles['sider-open']}>
            <Menu
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              mode="inline"
              inlineCollapsed={collapsed}
              items={verticalItems}
            />
          </div>
          <div className={styles.content}>{children}</div>
        </div>
      </div>

      <div className={styles.horizontalMenu}>
        <Menu mode="horizontal" defaultSelectedKeys={['mail']} items={horizontalItems} />
      </div>
    </div>
  )
}

export default MainMenu
