import React from 'react';
// chaning impicitily returning jsx to expicity returning the body 
// react ccomponent passsing props.
// console.log(props)
// llist - 1.history , 2.location, 3.match,staticcontext
// 1.history - bnch of properties which may be func which allow ass to manipulate functions
//2. location have diff properties 1. hash(url#hash <-- comes here),pathname,search(url?search <-- comes here),state

// react-route passig props ,which ca used to uild real wrld app
const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Editing the expense with id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
