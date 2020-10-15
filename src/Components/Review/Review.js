import { Box, Grid, makeStyles, TextField } from "@material-ui/core";
import { CloudUpload } from "@material-ui/icons";
import React from "react";
import { useForm } from "react-hook-form";
import Dashboard from "../Dashboard/Dashboard";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#F4F7FC",
    height: "85vh",
  },
  form: {},
  input: {
    backgroundColor: "white",
    borderRadius: "5px",
  },
  helperText: {
    color: "red",
  },
  submit: {
    padding: "13px 60px",
    border: "none",
    backgroundColor: "black",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "40px",
  },
  container: {
    marginTop: "50px",
  },
  uploadBtn: {
    padding: "12px 40px",
    border: "none",
    display: "block",
    margin: "25px 0 0",
    borderRadius: "4px"

  }


});

const Review = () => {

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
     console.log(data);
    const jsonData = JSON.stringify(data);
    const formData = new FormData();
    formData.append("image", data.image[0]);
    formData.append("data", jsonData);

    fetch('http://localhost:8080/addReview', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(result => {

        if(result){
            
            alert("You have successfully added an review")
        }

    })


  };

  const handleFile = () => {
    document.getElementById('image').click()
  }

  const classes = useStyles();
  return (
    <>
      <Dashboard>
        <Grid className={classes.root} container spacing={5}>
          <Grid item md={6} sm={6}>
            <Box className={classes.container}>
              <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  inputRef={register({
                    required: "Name is required",
                  })}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                  id="name"
                  type="text"
                  label="Your name"
                  name="name"
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  helperText={errors.name && errors.name.message}
                />

                <TextField
                  inputRef={register({
                    required: "Company's name & Designation is required",
                  })}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                  id="company"
                  type="text"
                  label="Company's name & Designation"
                  name="company"
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  helperText={errors.company && errors.company.message}
                />

                <TextField
                  inputRef={register({
                    required: "Description is required",
                  })}
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  className={classes.input}
                  multiline
                  rows={5}
                  id="description"
                  type="text"
                  label="Description"
                  name="description"
                  FormHelperTextProps={{
                    className: classes.helperText,
                  }}
                  helperText={errors.description && errors.description.message}
                />

                <input
                  style={{ display: "none" }}
                  ref={register({
                    required: "Your image is required",
                  })}
                  type="file"
                  name="image"
                  id="image"
                />

                <button
                  className={classes.uploadBtn}
                  type="button"
                  onClick={handleFile}
                >
                  <CloudUpload></CloudUpload> Upload your image
                </button>
                {errors.image && (
                  <p style={{ color: "red", marginTop: "15px" }}>{errors.image.message}</p>
                )}

                <input
                  className={classes.submit}
                  type="submit"
                  value="Submit"
                />
              </form>
            </Box>
          </Grid>
        </Grid>
      </Dashboard>
    </>
  );
};

export default Review;
