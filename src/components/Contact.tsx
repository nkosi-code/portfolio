import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

     if (name !== '' && email !== '' && message !== '') {
       var templateParams = {
         name: name,
         email: email,
         message: message
       };

       console.log(templateParams);
         emailjs.send('service_ryeit7o', 'template_j767fia', templateParams, 'SO79ffyTrfnFVg-6e').then(
         (response) => {
           console.log('SUCCESS!', response.status, response.text);
         },
         (error) => {
           console.log('FAILED...', error);
         },
       );
       setName('');
       setEmail('');
       setMessage('');
     }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
                  <p>Got an idea, project, or opportunity? I’m a freelance developer who enjoys turning ideas into practical, user-friendly solutions. Feel free to reach out anytime.
</p>
          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                id="outlined-required"
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                error={nameError}
                              helperText={nameError ? "Please enter your name" : ""}
                              sx={{
                                  backgroundColor: "#fff",
                                  borderRadius: "6px",

                                  "& .MuiInputBase-input": {
                                      color: "#000",
                                  },

                                  "& .MuiInputLabel-root": {
                                      color: "#555",
                                  },

                                  "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                          borderColor: "#ccc",
                                      },
                                      "&:hover fieldset": {
                                          borderColor: "#5000ca",
                                      },
                                      "&.Mui-focused fieldset": {
                                          borderColor: "#5000ca",
                                      },
                                  },
                              }}
              />
              <TextField
                required
                id="outlined-required"
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                error={emailError}
                              helperText={emailError ? "Please enter your email or phone number" : ""}
                              sx={{
                                  backgroundColor: "#fff",
                                  borderRadius: "6px",

                                  "& .MuiInputBase-input": {
                                      color: "#000",
                                  },

                                  "& .MuiInputLabel-root": {
                                      color: "#555",
                                  },

                                  "& .MuiOutlinedInput-root": {
                                      "& fieldset": {
                                          borderColor: "#ccc",
                                      },
                                      "&:hover fieldset": {
                                          borderColor: "#5000ca",
                                      },
                                      "&.Mui-focused fieldset": {
                                          borderColor: "#5000ca",
                                      },
                                  },
                              }}
              />
            </div>
            <TextField
              required
              id="outlined-multiline-static"
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              error={messageError}
                          helperText={messageError ? "Please enter the message" : ""}
                          sx={{
                              backgroundColor: "#fff",
                              borderRadius: "6px",

                              "& .MuiInputBase-input": {
                                  color: "#000",
                              },

                              "& .MuiInputLabel-root": {
                                  color: "#555",
                              },

                              "& .MuiOutlinedInput-root": {
                                  "& fieldset": {
                                      borderColor: "#ccc",
                                  },
                                  "&:hover fieldset": {
                                      borderColor: "#5000ca",
                                  },
                                  "&.Mui-focused fieldset": {
                                      borderColor: "#5000ca",
                                  },
                              },
                          }}
            />
            <Button variant="contained" endIcon={<SendIcon />} onClick={sendEmail}>
              Send
            </Button>
          </Box>
        </div>
      </div>
    </div>
  );
}

export default Contact;