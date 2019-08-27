# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1a. Indicate which of the following statements about React are false:

- React is a modern, efficient answer to complex UI applications
- React will only render on the server using Node.js - false
- React is a full stack framework for modern web applications - false
- React is a flexible library that plays the role of V in an MVC framework
- You should always update a component's state directly using this.state
- React is made up of encapsulated components that manage their own state
- React components render HTML

1b. Add an interesting true fact about React to the list.

2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer:

  Researched answer:

Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. Once that is done, the component is done with it.
Smart components (or container components) on the other hand have a different responsibility. Because they have the burden of being smart, they are the ones that keep track of state and care about how the app works.



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer:
  
Installing react package into the project.

  Researched answer:



4. How would you explain state to a friend who doesn't know code?

  Your answer:

  Researched answer:
  The state starts with a default value when a Component mounts and then suffers from mutations in time (mostly generated from user events). It's a serializable* representation of one point in time—a snapshot.






5. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer:
Props are short for properties, they should not be changed. State is internal to a component while props are passed to the component. 


  Researched answer:
  s
  props (short for “properties”) and state are both plain JavaScript objects. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).


