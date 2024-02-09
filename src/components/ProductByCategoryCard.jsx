import { Box, Card, Typography, CardContent, CardMedia } from "@mui/material";

const ProductByCategoryCard = ({ image, title, price }) => {
  return (
    <Box>
      <Card
        sx={{
          display: "flex",
          height: "150px",
          paddingX: "15px",
          alignItems: "center",
          borderRadius: "0",
          boxShadow: "none",
          borderBottom: "1px solid",
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="product-image"
          sx={{
            width: "150px",
            aspectRatio: "1",
            objectFit: "contain",
          }}
        />
        <Box sx={{ width: 1, paddingLeft: "15px" }}>
          <CardContent
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h5">{title}</Typography>
              <Typography variant="h6">{price} руб.</Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductByCategoryCard;
