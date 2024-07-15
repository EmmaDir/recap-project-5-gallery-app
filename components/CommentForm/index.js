import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function CommentForm({ onSubmitComment }) {
  return (
    <Form>
      <label htmlFor="comment">Add comment:</label>
      <textarea id="comment" name="comment"></textarea>
      <button type="submit" onSubmit={() => onSubmitComment}>
        Send
      </button>
    </Form>
  );
}
