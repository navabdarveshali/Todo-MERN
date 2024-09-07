import { useState } from "react";

export function CreateTodo() {
  // react-query
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addTodo=() => {
    // axios
    fetch("http://localhost:3000/todo", {
      method: "POST",
      body: JSON.stringify({
        title: title,
        description: description,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then(async function (res) {
      const json = await res.json();
      alert("Todo added");
    });
  }

  return (
    <>
    <div className="container"><h2>Create Todo</h2></div>
    
<form className="container">
  <div className="mb-3">
    <label className="form-label" >Title</label>
    <input type="text" className="form-control" required onChange={function (e) {setTitle(e.target.value);}} >{}</input>
  </div>
  <div className="mb-3">
    <label className="form-label" >Description</label>
    <input type="text" className="form-control" required onChange={function (e) {setDescription(e.target.value);}}>{}</input>
  </div>
  <button type="submit" className="btn btn-dark" onClick={addTodo}>Submit</button>
</form>
</>
  );
}





    // <div className="container my-3">
    //   <div>
    //     <input
    //       id="title"style={{
    //         padding: 10,
    //         margin: 10,
    //       }}
    //       type="text"
    //       placeholder="title"
        //   onChange={function (e) {
        //     const value = e.target.value;
        //     setTitle(e.target.value);
        //   }}
    //     ></input>{" "}
    //     <br />
    //     <input
    //       id="desc"
    //       style={{
    //         padding: 10,
    //         margin: 10,
    //       }}
    //       type="text"
    //       placeholder="description"
    //       onChange={function (e) {
    //         const value = e.target.value;
    //         setDescription(e.target.value);
    //       }}
    //     ></input>{" "}
    //     <br />
    //     <button
    //       style={{
    //         padding: 10,
    //         margin: 10,
    //       }}
    //       onClick={addTodo}
    //     >
    //       Add a todo
    //     </button>
    //   </div>
    // </div>