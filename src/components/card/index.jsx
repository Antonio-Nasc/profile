import React from 'react';
import LinkProfile from '../link';
import { Avatar, Card, CardHeader, Stack, Typography, CardActions, Divider } from "@mui/material";
import ContentText from '../text';

export default function CardProfile() {
    return (
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          background: '#ADD8E6',
        }}
      >
        <Card
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 400,
            p: 2,
            borderRadius: 5
          }}
        >
          <CardHeader
            avatar={
              <Avatar
                alt="Foto de perfil do José"
                src="src/assets/perfil.jpg"
                sx={{ width: 100, height: 100, mb: 2, ml: 2 }}
              />
            }
            title={
              <Typography variant="h6">
                <strong>José Nascimento</strong>
              </Typography>
            }
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              width: '100%',
            }}
          />
          <Stack sx={{ width: '100%', textAlign: 'center', mb: 2 }}>
            <ContentText text={"Full-stack React Developer"} />
            <ContentText text={"+55 79 99802-0511"} />
            <ContentText text={"joseeantonioo2000@gmail.com"} />
          </Stack>
          <CardActions
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <LinkProfile linkName={"GitHub"} href={"https://github.com/Antonio-Nasc"} />
            <LinkProfile linkName={"LinkedIn"} href={"https://www.linkedin.com/in/jose-antonio-nascimento-957124211/"} />
            <LinkProfile linkName={"Instagram"} href={"https://www.instagram.com/antonio__nasc/"} />
          </CardActions>
        </Card>
      </Stack>
    );
  }
