import styles from './Post.module.css'

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https:github.com/pedroesmerio.png" />
          <div className={styles.authorInfo}>
            <strong>Pedro Esmerio</strong>
            <span>Web Developer</span>
          </div>

        </div>
        <time title='15 Aug 23:31:28' dataTime="2022-05-11 08:13:30">Publicado há 1h</time>
      </header>

      <div className={styles.content}>
        <p>Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio. É um projeto que fiz no NLW Return.</p>
        <p><a href='#'>Jane.design/doctorcare</a></p>
        <p><a href='#'>#novoprojeto #nlw #rocketseat</a></p>
      </div>
    </article>
  )
} 
