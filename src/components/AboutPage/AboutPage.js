import React, { useReducer } from "react";
import "./AboutPage.css";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const initialState = {
  Name: "",
  Email: "",
  Message: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

const useStyles = makeStyles({
  button: {
    width: "30px",
    height: "50px",
    backgroundColor: "#f5f5ef",
    fontSize: "15px"
  }
});

const AboutPage = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [changePage, setChangePage] = React.useState(false);

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const { Name, Email, Message } = state;

  return (
    <div>
      <h1 className="headline-about">About me</h1>
      <hr className="underline" />
      <section className="bio-form">
        <p className="bio">
          I am a <b>software developer</b> at Founders & Coders with a
          background in software testing. I enjoy writing{" "}
          <b>clean, concise code</b>, and <b>building intuitive UI</b>. I work
          best in a fast-paced forward-thinking company with a{" "}
          <b>supportive culture</b> that values <b>diversity</b>, where I can{" "}
          <b>learn</b> and grow to be the best web software developer I can be.
        </p>
        <div className="form-container">
          <form
            action="https://formspree.io/xlebobod"
            method="POST"
            className="form"
          >
            {/* <h1 className="headline">Contact me</h1>
            <hr className="underline" /> */}
            <fieldset className="fieldset">
              <legend>Get in touch</legend>
              <div>
                <label htmlFor="Name">Name:</label>
                <br />
                <input
                  type="text"
                  name="Name"
                  className="input-field"
                  id="Name"
                  value={Name}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="Email">Email:</label>
                <br />
                <input
                  type="Email"
                  name="Email"
                  id=""
                  className="input-field"
                  value={Email}
                  onChange={onChange}
                  required
                />
              </div>
              <br />
              <div>
                <label htmlFor="Message">Message:</label>
                <br />
                <textarea
                  type="text"
                  name="Message"
                  id="messageBox"
                  wra="soft"
                  className="input-field"
                  value={Message}
                  onChange={onChange}
                />
              </div>
              <br />
              <Button type="submit" className={classes.button}>
                Send
              </Button>
            </fieldset>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;

// <button>
// <a
//   class=""
//   href="../../../public/asset/roshan_thaabith_cv copy.pdf"
//   downdload
//   target="_blank"
// >
//   {" "}
//   CV↓{" "}
// </a>
// </button>
