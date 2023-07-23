import React, { useState } from "react";

import Modal from "../modal/Modal";

import {
  Button,
  ButtonContainer,
  Container,
  Content,
} from "./CommentsTab.styles";

const CommentsTab = () => {
  const [openDialog, setOpenDialog] = useState(false);

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };
  return (
    <>
      <Container>
        <Content>
          <div>Leave a comment!</div>
          <ButtonContainer>
            <Button onClick={handleDialogOpen}>SIGN IN</Button>
            <span>or</span>
            <Button onClick={handleDialogOpen}>REGISTER</Button>
          </ButtonContainer>
        </Content>
      </Container>
      <Modal open={openDialog} handleClose={handleDialogClose} />
    </>
  );
};

export default CommentsTab;
