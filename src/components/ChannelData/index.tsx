import React, { useRef, useEffect } from 'react';
import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }
  }, [messagesRef]); 
  
  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />

        <ChannelMessage
          //key={n}
          author="Leanos"
          date="06/06/2022"
          content="Mensagem"
        />







        <ChannelMessage
          //key={n}
          author="Aliene"
          date="06/06/2022"
          content={
            <>
              <Mention>@Leanos</Mention>, eu te amo!
            </>
          }
          hasMention
        />
      </Messages>

      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  );
}

export default ChannelData;
