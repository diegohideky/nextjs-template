import styles from './Container.module.scss'

export type ContainerProps = {
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.main}>{children}</div>
    </div>
  )
}

export default Container
