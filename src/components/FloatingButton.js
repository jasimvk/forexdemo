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
        <Card sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '50%' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Contact Information
            </Typography>
            <Box display="flex" justifyContent="space-between">
              <List>
                <ListItem>
                  <ListItemText primary="Twitter" secondary="https://twitter.com/example" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Facebook" secondary="https://www.facebook.com/example" />
                </ListItem>
                <ListItem>
                  <ListItemText primary="Instagram" secondary="https://www.instagram.com/example" />
                </ListItem>
                {/* Add more social media links here */}
              </List>
              <List>
                <ListItem>
                  <EmailIcon fontSize="small" />
                  <ListItemText primary="Email" secondary="contact@example.com" />
                </ListItem>
                <ListItem>
                  <PhoneIcon fontSize="small" />
                  <ListItemText primary="Phone" secondary="+1234567890" />
                </ListItem>
                <ListItem>
                  <LanguageIcon fontSize="small" />
                  <ListItemText primary="Website" secondary="https://www.example.com" />
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
