import React, { useState } from "react";

function Course(props) {
  const [course, setCourse] = useState({
    id: null,
    title: "",
    slug: "",
    authorId: null,
    category: ""

  })

  function updateValue(event){
    setCourse({[event.target.id]:event.target.value});
  }

  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <div className="field">
            <input
              id="title"
              type="text"
              name="title"
              className="form-control"
              onChange={updateValue}
              value={course.title}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="author">Author</label>
          <div className="field">
            <select
              id="author"
              name="authorId"
              value={course.authorId}
              onChange={updateValue}
              className="form-control"
            >
              <option value="" />
              <option value="1">Cory House</option>
              <option value="2">Scott Allen</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="category">Category</label>
          <div className="field">
            <input
              type="text"
              id="category"
              name="category"
              className="form-control"
              onChange={updateValue}
              value={course.category}
            />
          </div>
        </div>

        <input type="submit" value="Save" className="btn btn-primary" />
      </form>
    </>
  );
}

export default Course;
