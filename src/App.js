import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';

function App() {
  const comments = [
    { id: 1, text: 'Love this!' },
    { id: 2, text: 'Wololoo!' },
    { id: 3, text: 'Make this world!' },
  ];

  const loading = false;

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackItem />
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map((comment, index) => (
              <li key={index}> {comment.text}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
