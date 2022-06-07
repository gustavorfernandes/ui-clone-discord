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
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Gustavo"
          date="06/06/2022"
          content="Esta é uma mensagem."
        />

        <ChannelMessage
          //key={n}
          author="Alguém"
          date="06/06/2022"
          content={
            <>
              <Mention>@Gustavo</Mention>, você foi mencionado.
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
