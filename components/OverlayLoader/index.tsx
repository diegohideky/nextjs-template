import { Spin, Space } from 'antd'
import styles from './OverlayLoader.module.scss'

const OverlayLoader: React.FC = () => {
  return (
    <div className={styles.overlayLoader}>
      <Space size="middle">
        <Spin size="large" />
      </Space>
    </div>
  )
}

export default OverlayLoader
