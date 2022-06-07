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
      <UserRow nickname="Gustavo" isAdmin />      
            
      <Role>Bot – 1</Role>                      
      <UserRow nickname="Music" isBot />

      <Role>Disponível – 3</Role>      
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />
      <UserRow nickname="Alguém" />

      <Role>Offline – 22</Role>
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />      
      <UserRow nickname="Alguém" isOffline />
      <UserRow nickname="Alguém" isOffline />
    </Container>
 );
};

export default UserList;
