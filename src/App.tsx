import './App.css'
import Layout from "./components/Layout/layout.tsx";
import Landing from "./components/Landing/landing.tsx";
import Introduction from "./components/Introduction/introduction.tsx";
import Feedback from "./components/Feedback/feedback.tsx";

function App() {

  return (
      <>
          <Layout showBoarderDiv={true}>
              <Landing></Landing>
          </Layout>
          <Layout showBoarderDiv={false}>
              <Introduction></Introduction>
          </Layout>
          <Layout showBoarderDiv={false}>
              <Feedback></Feedback>
          </Layout>
      </>


  )
}

export default App
