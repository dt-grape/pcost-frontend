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
            width: { xs: "100px", md: "150px" },
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
              <Typography sx={{ fontSize: { xs: "18px", md: "24px" } }}>
                {title}
              </Typography>
              <Typography sx={{ fontSize: { xs: "14px", md: "18px" } }}>
                {price} руб.
              </Typography>
            </Box>
          </CardContent>
        </Box>
      </Card>
    </Box>
  );
};

export default ProductByCategoryCard;
