import { Post } from "./components/Post";
import { Header } from "./components/Header";
import { SideBar } from "./components/Sidebar";

import styles from "./App.module.css";
import "./global.css";

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/72585783?v=4",
      name: "Luisa Novaes",
      role: "Web Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: " 👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://shorturl.at/dDZ68",
      name: "John Souza",
      role: "Front-End Developer",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        content: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻 ",
      },
      {
        type: "link",
        content: "Acesse e deixe seu feedback 👉 devonlane.design",
      }
    ],
    publishedAt: new Date("2022-05-03 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <SideBar />
        <main>
            {posts.map(post => {
              return (
              <Post 
                 key={post.id}
                 author={post.author}
                 content={post.content}
                 publishedAt={post.publishedAt} 
                />
              )
            })}
        </main>
      </div>
    </div>
  );
}

export default App;
