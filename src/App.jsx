export default function App() {
  return (
    <>
      <nav className="navBar">
        <img
          src="/src/assets/vecteezy_twitch-logo-png-twitch-icon-transparent-png_18930502_651 (1).png"
          alt=""
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
            <div className="user">
              <img
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/d4885242-febf-4a11-a42a-a0ad52474ee2-profile_image-70x70.png"
                alt="icon"
                className="img-user"
              />
            </div>
            <div className="data-user">
              <span className="user-name">ElSpreen</span>
              <br></br>
              <span className="user-activity">Conversando</span>
            </div>
            <div className="rankin">
              <p className="online-rank">🔴</p>
              <p className="count-rank">92.3 K</p>
            </div>
          </div>
        </aside>
        <section>
          <img
            src="/src/assets/encabezado.png"
            alt=""
            className="img-initial"
          />
        </section>
      </section>
    </>
  );
}
