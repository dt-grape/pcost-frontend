import Header from "../components/Header";
import Categories from "../components/Categories";
import Products from "../components/Products";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Categories />
      </Box>
      <Products />
    </>
  );
};

export default Home;
