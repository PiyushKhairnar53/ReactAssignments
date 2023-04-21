import loading from "./loading.gif";
import { Container } from "react-bootstrap";

const Loading = (show:any) => {
 return show && (
    <Container className='text-center p-4' >
      <h1>Loading...</h1>
    </Container>
 );
};

export default Loading;