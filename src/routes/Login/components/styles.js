import { css } from 'emotion';

export const loginPage = css`
  max-width: 1500px;
  width: 100%;
  max-width: 500px;
  padding: 20px;
  background-color: #eff0f1;
  margin: auto;
  border-radius: 16px;
  border: solid 1px rgb(2, 0, 36, 1);
  position: relative;
  top: 10em;
`;

export const loginBox = css`
  margin: 0 auto;
  padding: 20px;
`;

export const loginText = css`
  font-style: normal;
  color: rgb(2, 0, 36);
  font-size: 26px;
  font-weight: 500;
  width: fit-content;
  margin: auto;
`;

export const fields = css`
  margin-top: 1rem;
  display: grid;
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
  background: #eaeaeaab;
  border: solid 1px rgb(2, 0, 36, 0.3);
`;
