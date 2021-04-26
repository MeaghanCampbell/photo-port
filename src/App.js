// root component that's responsible for how React components currently render

import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact'

function App() {
  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  //set contact Selected initially to false to prevent contact from showing a user when the navigate to the homepage
  // with contactSelected we can establish a conditional to render the Gallery and About components when this is galise and the ContactForm is true
  const [contactSelected, setContactSelected] = useState(false)

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // pass these getter and setter functions into nav will allow this component to modify the state in App component which will render based on user selection
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
      {!contactSelected ? (
        // if contact is not selected, render gallery and about, else render contact form
        // this is another syntax to write if else statement
        // : is the ternary operator that enables conditional rendering similar to the && operator as a short circuit
        // ternary supplies the false condition to render as well
        // <> and </> are react fragments - a shorthand abbreviation for <React.Fragment>
          // they allow multiple elements to be grouped together
        <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
        </>
      ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
