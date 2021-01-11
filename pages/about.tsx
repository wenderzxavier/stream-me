import { Box, Button, Container, Typography } from "@material-ui/core";
import Link from "next/link";

const About = () => {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js Example
        </Typography>
        <Link href="/">
          <Button variant="contained" color="primary">
            Go to the index page
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default About;
