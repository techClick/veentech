import React, { useState } from 'react';
import MediaQuery from 'react-responsive';
import Header from 'views/components/Header/Header';
import { Container } from 'styles/styled';
import Gradient from 'views/components/Gradient/Gradient';
import * as S from './Contact.styled';
import { all_lowRes } from './Contact.styled';

const Contact = function Contact() {
  const placeHolders = ['Company / Name *', 'Email *', 'Subject(Optional)', 'Enter message *'];
  const [input, setInput] = useState<any>(placeHolders.map(() => ''));

  return (
    <S.Container>
      <Header />
      <MediaQuery minWidth={Number(all_lowRes.replace('px', ''))}>
        <Gradient height1="60vh" height2="40vh" />
      </MediaQuery>
      <MediaQuery maxWidth={Number(all_lowRes.replace('px', '')) + 1}>
        <Gradient height1="35vh" height2="65vh" />
      </MediaQuery>
      <S.BgContainer>
        <Container>
          <S.FlexContainer>
            <S.LabelContainer>
              <S.LabelCont>
                <S.Label>
                  Start a conversation
                  <S.Label2>
                    Our team is looking to hear you out!
                  </S.Label2>
                </S.Label>
              </S.LabelCont>
            </S.LabelContainer>
            <S.MessageConatiner>
              <S.MessageBox>
                {
                  placeHolders.map((placeHolder, i) => (
                    <>
                      {
                        i === 3 ? (
                          <>
                            <S.TextArea
                              value={input[i]}
                              placeholder={`${placeHolder}`}
                              onChange={(e: any) => {
                                const newInput = [...input];
                                newInput[i] = e.target.value;
                                setInput(newInput);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <S.Input
                              value={input[i]}
                              placeholder={`${placeHolder}`}
                              onChange={(e: any) => {
                                const newInput = [...input];
                                newInput[i] = e.target.value;
                                setInput(newInput);
                              }}
                            />
                          </>
                        )
                      }
                    </>
                  ))
                }
                <S.MainButtonDiv>
                  <S.MainButton
                    onClick={() => {}}
                  >
                    SEND MESSAGE
                  </S.MainButton>
                </S.MainButtonDiv>
              </S.MessageBox>
            </S.MessageConatiner>
          </S.FlexContainer>
        </Container>
      </S.BgContainer>
    </S.Container>
  );
};

export default Contact;
