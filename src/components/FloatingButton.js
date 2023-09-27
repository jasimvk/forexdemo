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
        <Button variant="contained" color="warning" onClick={handleOpenModal}>
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
            maxWidth: '500px', // Set a maximum width if needed
            boxShadow: 4,
            borderRadius: '8px',
            padding: '16px',
          }}
        >
          <CardContent>
            <Typography variant="h4" align="center" gutterBottom>
              Contact Information
            </Typography>
            <Grid container  >
              <Grid item xs={12} md={6} lg={6}>

                <List>
                  {socialMediaLinks.map((item, index) => (
                    <ListItem key={index}>
                      {item.icon}
                      <ListItemText
                        sx={{ ml: 1 }}
                        primary={
                          <Link href={item.link} target="_blank" rel="noopener noreferrer">
                            {item.label}
                          </Link>
                        }
                      />
                    </ListItem>
                  ))}
                </List> 
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <List>
                <ListItem>
                  <EmailIcon sx={{ mr: 1 }} />
                  <ListItemText
                    primary={
                      <Link href={"mailto:contact@demo.com"} target="_blank" rel="noopener noreferrer">
                        contact@demo.com
                      </Link>
                    }
                  />

                </ListItem>
                <ListItem>
                  <PhoneIcon sx={{ mr: 1 }} />
                  <ListItemText
                    primary={
                      <Link href={"tel:+1234567890"} target="_blank" rel="noopener noreferrer">
                        +123 456 7890
                      </Link>
                    }
                  />
                </ListItem>
                <ListItem>
                  <LanguageIcon sx={{ mr: 1 }} />
                  <ListItemText
                    primary={
                      <Link href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        Website
                      </Link>
                    }
                  />
                </ListItem>
              </List>
              </Grid></Grid>
          </CardContent>
        </Card>
      </Modal>
    </>
  );
};

export default FloatingButton;