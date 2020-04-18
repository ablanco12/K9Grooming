import "semantic-ui-css/semantic.min.css";

export const WhiteBtn = styled.button`
  text-transform: uppercase;
  background-color: #fff;
  color: #777;
  text-decoration: none;
  padding: 15px 30px;
  border-radius: 30px 5px 30px 5px;
  margin: 2px 8px;
  border: none;
  transition: all 0.2s;

  :focus {
    outline: 0;
  }

  :hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }

  :active {
    transform: translateY(-1px);
    box-shadow: 0 5px 9px rgba(0, 0, 0, 0.3);
  }
  /* hidden psudeo element */
  /* ::after {
    content: '';
    display: inline-block;
    height: 100px;
    width: 100px;
} */
  @media (max-width: 850px) {
    padding: 5px 20px;
  }
`;
