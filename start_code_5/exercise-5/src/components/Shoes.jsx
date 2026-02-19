export default function Shoes({ shoes }) {
  return (
    <li key={shoes.id} className="shoes-item">
      <button>
        <img src={shoes.image.src} alt={shoes.image.alt} />
        <h3>{shoes.title}</h3>
      </button>
    </li>
  );
}
