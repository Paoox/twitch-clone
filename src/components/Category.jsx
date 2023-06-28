export default function Category(props) {
  const title = props.title;
  const spects = props.spects;
  const image = props.url;
  const tag1 = props.tag1;
  const tag2 = props.tag2;

  return (
    <>
      <div className="category">
        {props.isActive && <button className="category-new"> New</button>}
        <img src={image} alt={title} />
        <p className="category-title">{title}</p>
        <p className="spects">{spects}</p>
        <span className="category-tags">
          <button className="tag1">{tag1}</button>
          <button className="tag2">{tag2}</button>
        </span>
      </div>
    </>
  );
}
