import { useState } from "react";
const Section = ({ title, description, isVisible, setIsVisible }) => {
  const [text, setText] = useState("Show");
  return (
    <>
      <h1>{title}</h1>
      <button
        onClick={() => (
          setIsVisible(isVisible), setText(text === "Show" ? "Hide" : "Show")
        )}
      >
        Show
      </button>
      {isVisible && <p>{description}</p>}
    </>
  );
};

const Instamart = () => {
  const [showSection, setShowSection] = useState("")
  return (
    <>
      <Section
        title="Instamart Home"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta natus ducimus sint autem sequi recusandae ratione quo architecto culpa placeat facere vel fugiat eum aut explicabo voluptate consequatur totam beatae, qui eligendi. Voluptas fugit quae optio. Voluptate, quo dolorum?"
        isVisible={showSection === "home"}
        setIsVisible={() => {setShowSection("home")}}
      />
      <Section
        title="Instamart About"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta natus ducimus sint autem sequi recusandae ratione quo architecto culpa placeat facere vel fugiat eum aut explicabo voluptate consequatur totam beatae, qui eligendi. Voluptas fugit quae optio. Voluptate, quo dolorum?"
        isVisible={showSection === "about"}
        setIsVisible={() => {setShowSection("about")}}
      />
      <Section
        title="Instamart Team"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta natus ducimus sint autem sequi recusandae ratione quo architecto culpa placeat facere vel fugiat eum aut explicabo voluptate consequatur totam beatae, qui eligendi. Voluptas fugit quae optio. Voluptate, quo dolorum?"
        isVisible={showSection === "team"}
        setIsVisible={() => {setShowSection("team")}}
      />
      <Section
        title="Instamart Career"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste dicta natus ducimus sint autem sequi recusandae ratione quo architecto culpa placeat facere vel fugiat eum aut explicabo voluptate consequatur totam beatae, qui eligendi. Voluptas fugit quae optio. Voluptate, quo dolorum?"
        isVisible={showSection === "career"}
        setIsVisible={() => {setShowSection("career")}}
      />
    </>
  );
};

export default Instamart;
