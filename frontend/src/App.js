import { Container } from "react-bootstrap";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import React from 'react';
function App() {
  return (
    <>    
    <Header/>

      <main className="py-3">
        <Container>
          <Outlet/>
        </Container>
      </main>

    <Footer/>
    </>
  );
}

export default App;
