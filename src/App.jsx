import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'
import { Post } from './components/Post'

import styles from './App.module.css'

export default function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post name={'Pedro'} description={'Lorem ipsum state rf adrf dtg srg sfghsfgs '} />
          <Post name={'Pedro'} description={'Lorem ipsum state rf adrf dtg srg sfghsfgs '} />
          <Post name={'Pedro'} description={'Lorem ipsum state rf adrf dtg srg sfghsfgs '} />
        </main>
      </div>
    </div>
  )
}
