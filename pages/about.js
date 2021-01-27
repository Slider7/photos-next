import Header from '../components/Header';

const aboutStyle = {
  textAlign: 'center',
  marginTop: 40,
  width: '95%'
};

export default function About() {
  return (
    <Header>
      <div style={aboutStyle}>
        <h3>Интерфейс фотостока на основе API Unsplash</h3>
        <p>Веб приложение на базе Next.js (React)</p>
        <p>
          <a href="mailto:kemalsh771@gmail.com">kemalsh771@gmail.com</a>
        </p>
        <p>2020</p>
      </div>
    </Header>
  );
}
