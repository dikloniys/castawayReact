import styled from "styled-components";

const Button = styled.div`
    background-color: rgba(17, 141, 168, 1);
    padding: 12px 15px 12px 20px;
    border-radius: 6px;
    font-size: 17px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export default function ButtonUI() {
  return (
    <Button>
        <a href="reviews.html">View all episodes</a>
    </Button>
  )
}
