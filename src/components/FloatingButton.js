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
  Grid,
  Link,
  Divider,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const socialMediaLinks = [
  { icon: <TwitterIcon />, label: 'Twitter', link: 'https://twitter.com/example' },
  { icon: <FacebookIcon />, label: 'Facebook', link: 'https://www.facebook.com/example' },
  { icon: <InstagramIcon />, label: 'Instagram', link: 'https://www.instagram.com/example' },
  // Add more social media links here
];

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
            maxWidth: '650px', // Set a maximum width if needed
            boxShadow: 4,
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom>
              Contact Information
            </Typography>
            <Divider />
            <List>
              {socialMediaLinks.map((item, index) => (
                <ListItem key={index}>
                  {item.icon}
                  <ListItemText
                    primary={
                      <Link href={item.link} target="_blank" rel="noopener noreferrer">
                        {item.label}
                      </Link>
                    }
                  />
                </ListItem>
              ))}
            </List>
            <Divider />
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
                  primary={
                    <Link href="https://www.example.com" target="_blank" rel="noopener noreferrer">
                      Website
                    </Link>
                  }
                />
              </ListItem>
            </List>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default FloatingButton;