import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AddBookForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    Genre: '',
    ReleaseYear: '',
    Synopsis: '',
    PosterImageURL: '' 
  });

  const handleChange = (e) => {
    // const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: [e.target.value]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("Form Submitted");
    navigate('/');
  };

  return (
    <>
      <h2>Add Book Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Director:
          <input
            type="text"
            name="director"
            value={formData.director}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Genre:
          <select
            type="text"
            name="Genre"
            value={formData.Genre}
            onChange={handleChange}
            required
          >
            <option value="">Select Genre</option>
            <option value="Comedy">Comedy</option>
            <option value="TRiller">Triller</option>
            </select>
        </label>
        <label>
          ReleaseYear:
          <input
            type="number"
            name="ReleaseYear"
            value={formData.ReleaseYear}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Synopsis:
          <input
            type="text"
            name="Synopsis"
            value={formData.Synopsis}
            onChange={handleChange}
            required
          />
        </label>
        <label>
        PosterImageURL:
          <input
            type="text"
            name="PosterImageURL"
            value={formData.PosterImageURL}
            onChange={handleChange}
            required
          />
        </label>
          
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default AddBookForm;


