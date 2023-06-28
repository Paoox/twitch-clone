export default function Streamer(props) {
  const name = props.userName;
  const activity = props.activity;
  const image = props.url;
  const count = props.count;

  return (
    <>
      <div className="user-card">
        <div className="user">
          <img src={image} alt="icon" className="img-user" />
        </div>
        <div className="data-user">
          <span className="user-name">{name}</span>
          <br></br>
          <span className="user-activity">{activity}</span>
        </div>
        <div className={props.isActive ? "rankin" : ""}>
          {props.isActive && <p className="online-rank">🔴</p>}
          {props.isActive && <p className="count-rank">{count}</p>}
        </div>
      </div>
    </>
  );
}
