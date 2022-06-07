import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
  nickname: string,
  isBot?: boolean,
  isAdmin?: boolean,
  isOffline?: boolean
}

const UserRow: React.FC<UserProps> = ( { nickname, isBot, isAdmin, isOffline }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />
      <strong className={`${isAdmin ? 'online' : ''} ${isOffline ? 'offline' : ''}`}>{nickname}</strong>
      {isBot && <span>✔ Bot</span>}  
    </User>
  );
};

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Admin - 1</Role>
      <UserRow nickname="Leanos" isAdmin />
      <UserRow nickname="Music" isBot isAdmin/>
      <UserRow nickname="Cadu Farias" isAdmin/>
            
      <Role>Bot – 1</Role>                      
      <UserRow nickname="Steam" isBot />

      <Role>Disponível – 3</Role>      
      <UserRow nickname="Aliene" />

      <Role>Offline – 2</Role>
      <UserRow nickname="Morgan Freeman" isOffline /> 
      <UserRow nickname="Nicolas Cage" isOffline /> 
      <UserRow nickname="Leo DiCaprio" isOffline />
    </Container>
 );
};

export default UserList;
