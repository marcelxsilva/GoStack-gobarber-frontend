import styled, { css } from 'styled-components';
import { lighten } from 'polished';
import PerfectScrollbar from 'react-perfect-scrollbar'
export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.div`
  background: none;
  border: 0;
  position: relative;

${props => props.hasUnRead &&
    css`
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
  color: #fff;

& + div {
  margin-top: 15px;  
  padding-top: 15px;  
  border-top: 1px solid rgba(255,255,255,0.1)
}

  p {
    font-size: 13px;
    line-height: 18px;
  }
  time {
    font-size: 12px;
    opacity: 0.6;
  }
  button {
    font-size: 12px;
    border: 0;
    background: none;
    color: ${lighten(0.2, '#7159c1')};
    padding: 0 5px;
    margin: 0 5px;
    border-left: 1px solid rgba(255,255,255,0.1);
  }

  ${props => props.unRead && 
    css`
    &::after {
      content: '';
      display: inline-block;
      margin-left: 5px;
      width: 8px;
      height: 8px;
      background: #ff862e;
      border-radius: 50%;
    }`
  }

`

export const NotificationList = styled.div`
  position: absolute;
  width: 260px;
  left: -70px;
  top: calc(100% + 30px);
  background: rgba(0,0,0,0.6);
  border-radius: 4px;
  padding: 15px 5px;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 20%);
    top: -20px;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 20px solid rgba(0,0,0,0.6);
  }
`


export const Scroll= styled(PerfectScrollbar)`
  max-height: 260px;
  padding: 5px 15px;

`