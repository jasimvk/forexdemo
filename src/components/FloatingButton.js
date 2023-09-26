import React, { useState } from 'react';
import {
  Button,
  Modal,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';

import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000,
        }}
      >
        <Button variant="contained" color="primary" onClick={handleOpenModal}>
          Contact Us
        </Button>
      </div>
    
      <Modal
        open={isOpen}
        onClose={handleCloseModal}
        aria-labelledby="contact-modal"
        aria-describedby="contact-info"
      >
        <Card
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '80%', // Adjust the width for responsiveness
            maxWidth: '400px', // Set a maximum width if needed
          }}
        >
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <List>
                <ListItem>
                  <TwitterIcon />
                  <ListItemText
                    primary="Twitter"
                    secondary={
                      <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" >
                        
                      w</a>
                    }
                  />
                </ListItem>
                <ListItem>
                  <FacebookIcon />
                  <ListItemText
                    primary="Facebook"
                    secondary={
                      <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
                        
                      w</a>
                    }
                  />
                </ListItem>
                <ListItem>
                  <InstagramIcon />
                  <ListItemText
                    primary="Instagram"
                    secondary={
                      <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
                        
                      w</a>
                    }
                  />
                </ListItem>
                {/* Add more social media links here */}
              </List>
              <List>
                <ListItem>
                  <EmailIcon />
                  <ListItemText primary="Email" secondary="contact@example.com" />
                </ListItem>
                <ListItem>
                  <PhoneIcon />
                  <ListItemText primary="Phone" secondary="+1234567890" />
                </ListItem>
                <ListItem>
                  <LanguageIcon />
                  <ListItemText
                    primary="Website"
                    secondary={
                      <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                        
                      w</a>
                    }
                  />
                </ListItem>
              </List>
            </Box>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default FloatingButton;
