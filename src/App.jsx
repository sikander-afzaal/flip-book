import "./App.css";
import FlipPage from "react-flip-page";

const App = () => {
  return (
    <div className="container">
      <FlipPage
        className="book"
        animationDuration={1000}
        orientation={"horizontal"}
        showHint
        treshold={"60px"}
        showSwipeHint
        responsive
        showTouchHint
      >
        <div className="cards-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
        </div>
        <div className="cards-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
        </div>
        <div className="cards-grid">
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
          <div className="card">
            <img
              src="https://images.unsplash.com/photo-1640271443625-3276ed8f62b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt=""
            />
            <h2>Charizad</h2>
          </div>
        </div>
      </FlipPage>
    </div>
  );
};

export default App;
