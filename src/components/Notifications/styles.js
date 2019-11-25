import styled, { css } from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  background: none;
  border: 0;
  position: relative;

${props => props.hasUnRead && css`
&::after {
  position: absolute;
  right: -1px;
  top: -3px;
  width: 12px;
  height: 12px;
  background: #ff892e;
  content: '';
  border-radius: 50%;
}`
}
`;

export const Notification = styled.div`

`

export const NotificationList = styled.div`

`