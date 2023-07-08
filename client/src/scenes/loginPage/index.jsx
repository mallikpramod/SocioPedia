import {Box,Typography,useTheme,useMediaQuery} from "@mui/material";
import Form from "./Form.jsx";

const LoginPage = () =>{
    const theme = useTheme();
    const isNonMobileScreen = useMediaQuery("(min-width:100px)");
    return <Box>
        <Box width="100%" backgroundColor={theme.palette.background.alt} p="1rem 6%" textAlign="center" >
        <Typography 
           fontWeight={"bold"}
           fontSize="32px"
           color = "primary"
           sx ={{
             "&:hover":{
                color:"primary",
                cursor:"pointer",
             }
           }}
          >
          Sociopedia
          </Typography>
          </Box> 
          <Box width={isNonMobileScreen? "50%":"93%"}
           p="2rem"
           m ="2rem auto"
           borderRadius="1.5rem"
           backgroundColor={theme.palette.background.alt}
           >
            <Typography fontWeight="500" variant="h5" sx={{mb:"1.5rem"}}>
                welcome to Sociopedia, the Social Media for Sociopath!
            </Typography>
            <Form/>
          </Box>
    </Box>;
};
export default LoginPage;