import { css } from 'emotion';

export const loginPage = css`
  max-width: 1500px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #eff0f1;
  margin: auto;
  border-radius: 16px;
  border: solid 1px rgb(2,0,36, 1);
  position: relative;
  top: 10em;
  color: rgb(2,0,36);
`;

export const loginBox = css`
  margin: 0 auto;
  padding: 20px;
`;
export const loginText = css`
  font-style: normal;
  color: rgb(2,0,36);
  font-size: 26px;
  font-weight: 500;
  width: fit-content;
  margin: auto;
`;
export const fields = css`
  margin-top: 1rem;
  display: grid;
`;
export const eachLine = css`
  margin-top: 1rem;
  display: flex;
`;
export const button = css`
  background-image: linear-gradient(
    110deg,
    #2dbfbd -20%,
    #316f98 57%,
    #248ba5 210%
  );
  color: white;
  border-radius: 4px;
  height: auto;
  padding: 8px;
  margin-top: 0.5em;
  border: 0;
  position: unset !important;
  &:hover {
    background: #2dbfbd;
  }
`;

export const input = css`
  box-shadow: unset;
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  padding: 11px 10px;
  margin-bottom: 3px;
  width: 43%;
`;
export const inputSingle = css`
  box-shadow: unset;
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  padding: 11px 10px;
  margin-bottom: 3px;
`;
export const inputSingleText = css`
  box-shadow: unset;
  font-family: 'Montserrat', sans-serif;
  border-radius: 6px;
  padding: 11px 10px;
  margin-bottom: 3px;
  width:95%;
`;
export const radioText=css`
  margin: 0px 4em 0em 0;

`
export const singleRadio=css`
  margin: 0px 2em 0em 0;
`
export const inboxText = css`
  font-style: normal;
  font-size: 14px;
  text-transform: capitalize;
`;
export const imageBox = css`
  height:5em;
  // border: solid 1px #070C42;
  width:4.5em;
`;
export const addImage = css`
  margin: auto;
  width: 2em;
  height: 100%;
  margin-left: 1.25em;
  cursor:pointer;
`;
    
