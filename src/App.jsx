import Streamer from "./components/Streamer";
import Category from "./components/Category";
import { categorys } from "./data/categorys";
import { users } from "./data/users";

export default function App() {
  return (
    <>
      <nav className="navBar">
        <img
          src="/src/assets/vecteezy_twitch-logo-png-twitch-icon-transparent-png_18930502_651 (1).png"
          alt="twitch"
        />
      </nav>
      <section className="main">
        <aside className="title_chanels">
          <span className="title">
            CANALES RECOMENDADOS
            <img
              src="/src/assets/collapse-left-svgrepo-com.svg"
              alt="collapse"
              className="collapse"
            />
          </span>
          <div className="users">
            {users.map((user, index) => {
              return (
                <Streamer
                  key={`user-card-${index}`}
                  url={user.url}
                  userName={user.userName}
                  activity={user.activity}
                  isActive={user.isActive}
                  count={user.count}
                />
              );
            })}
          </div>
        </aside>
        <section>
          <img
            src="/src/assets/encabezado.png"
            alt=""
            className="img-initial"
          />
          <div className="categorys">
            {categorys.map((category, index) => {
              return (
                <Category
                  key={`category-card-${index}`}
                  url={category.url}
                  title={category.title}
                  spects={category.spects}
                  isActive={category.isActive}
                  tag1={category.tag1}
                  tag2={category.tag2}
                />
              );
            })}
          </div>
        </section>
      </section>
    </>
  );
}
